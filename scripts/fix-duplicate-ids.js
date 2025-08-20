#!/usr/bin/env node

// Script para corrigir IDs duplicados automaticamente
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

function fixDuplicateIds() {
  console.log('🔧 CORREÇÃO AUTOMÁTICA DE IDs DUPLICADOS');
  console.log('==========================================\n');

  // Correções específicas para security.ts
  const securityFile = path.join(__dirname, '../src/data/categories/security.ts');
  let securityContent = fs.readFileSync(securityFile, 'utf8');
  
  // Corrigir 4.2.3 duplicado (segunda ocorrência)
  const lines = securityContent.split('\n');
  let foundFirst4_2_3 = false;
  let foundFirst4_3 = false;
  
  for (let i = 0; i < lines.length; i++) {
    // Corrigir 4.2.3 duplicado
    if (lines[i].includes('id: "4.2.3"')) {
      if (foundFirst4_2_3) {
        lines[i] = lines[i].replace('id: "4.2.3"', 'id: "4.2.3.1"');
        console.log('✅ Corrigido: 4.2.3 duplicado → 4.2.3.1');
      } else {
        foundFirst4_2_3 = true;
      }
    }
    
    // Corrigir 4.3 duplicado  
    if (lines[i].includes('id: "4.3"') && lines[i].includes('name:') === false) {
      if (foundFirst4_3) {
        lines[i] = lines[i].replace('id: "4.3"', 'id: "4.3.1"');
        console.log('✅ Corrigido: 4.3 duplicado → 4.3.1');
      } else {
        foundFirst4_3 = true;
      }
    }
  }
  
  securityContent = lines.join('\n');
  fs.writeFileSync(securityFile, securityContent);
  
  console.log('\n🎉 Correções aplicadas com sucesso!');
  console.log('\nExecute novamente a auditoria para verificar:');
  console.log('node scripts/audit-ids.js');
}

// Executar correções
if (import.meta.url === `file://${process.argv[1]}`) {
  try {
    fixDuplicateIds();
    process.exit(0);
  } catch (error) {
    console.error('❌ Erro durante correção:', error.message);
    process.exit(1);
  }
}

export { fixDuplicateIds };
