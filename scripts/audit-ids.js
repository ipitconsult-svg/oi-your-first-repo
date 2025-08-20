#!/usr/bin/env node

// Script para auditar IDs únicos em todas as categorias
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Função para extrair IDs de um arquivo TypeScript
function extractIds(filePath) {
  const content = fs.readFileSync(filePath, 'utf8');
  const ids = [];
  
  // Regex para capturar IDs em formato: id: "valor"
  const idRegex = /id:\s*["']([^"']+)["']/g;
  let match;
  
  while ((match = idRegex.exec(content)) !== null) {
    ids.push({
      id: match[1],
      file: path.basename(filePath),
      line: content.substring(0, match.index).split('\n').length
    });
  }
  
  return ids;
}

// Função principal de auditoria
function auditIds() {
  const categoriesDir = path.join(__dirname, '../src/data/categories');
  const files = fs.readdirSync(categoriesDir).filter(file => file.endsWith('.ts'));
  
  const allIds = [];
  const duplicates = [];
  const idCounts = {};
  
  console.log('🔍 AUDITORIA DE IDs ÚNICOS');
  console.log('========================\n');
  
  // Extrair todos os IDs
  files.forEach(file => {
    const filePath = path.join(categoriesDir, file);
    const fileIds = extractIds(filePath);
    allIds.push(...fileIds);
  });
  
  // Contar ocorrências
  allIds.forEach(({ id, file, line }) => {
    if (!idCounts[id]) {
      idCounts[id] = [];
    }
    idCounts[id].push({ file, line });
  });
  
  // Identificar duplicatas
  Object.entries(idCounts).forEach(([id, occurrences]) => {
    if (occurrences.length > 1) {
      duplicates.push({ id, occurrences });
    }
  });
  
  // Relatório
  console.log(`📊 ESTATÍSTICAS:`);
  console.log(`Total de IDs encontrados: ${allIds.length}`);
  console.log(`IDs únicos: ${Object.keys(idCounts).length}`);
  console.log(`Duplicatas encontradas: ${duplicates.length}\n`);
  
  if (duplicates.length > 0) {
    console.log('🚨 DUPLICATAS ENCONTRADAS:');
    console.log('==========================');
    duplicates.forEach(({ id, occurrences }) => {
      console.log(`\n❌ ID "${id}" está duplicado:`);
      occurrences.forEach(({ file, line }) => {
        console.log(`   - ${file}:${line}`);
      });
    });
  } else {
    console.log('✅ Todos os IDs são únicos!');
  }
  
  // Verificar padrões de ID
  console.log('\n📋 PADRÕES DE ID POR CATEGORIA:');
  console.log('================================');
  
  files.forEach(file => {
    const categoryIds = allIds.filter(item => item.file === file);
    const categoryName = file.replace('.ts', '').toUpperCase();
    console.log(`\n${categoryName} (${categoryIds.length} IDs):`);
    
    // Mostrar estrutura hierárquica
    const hierarchyMap = {};
    categoryIds.forEach(({ id }) => {
      const parts = id.split('.');
      if (parts.length === 1) {
        console.log(`  📁 ${id} (categoria principal)`);
      } else if (parts.length === 2) {
        console.log(`    📂 ${id} (subcategoria)`);
      } else if (parts.length === 3) {
        console.log(`      📄 ${id} (item)`);
      } else {
        console.log(`        🔗 ${id} (item aninhado)`);
      }
    });
  });
  
  return {
    total: allIds.length,
    unique: Object.keys(idCounts).length,
    duplicates: duplicates.length,
    duplicateDetails: duplicates
  };
}

// Executar auditoria
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    const result = auditIds();
    process.exit(result.duplicates > 0 ? 1 : 0);
  } catch (error) {
    console.error('❌ Erro durante auditoria:', error.message);
    process.exit(1);
  }
}

export { auditIds, extractIds };
