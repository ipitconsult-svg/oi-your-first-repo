// Sistema de referências cruzadas entre categorias
// Permite que itens de uma categoria sejam exibidos em outras sem duplicação

export interface CategoryReference {
  // Subcategoria de destino (onde será mostrado)
  targetSubcategoryId: string;
  targetSubcategoryName: string;
  
  // Categoria de origem (de onde vem os itens)
  sourceCategory: string;
  sourceSubcategoryId?: string; // opcional, se não especificado, pega todos os itens da categoria
  
  // Configuração de exibição
  displayName?: string; // nome customizado para exibição
  description?: string; // descrição customizada
}

export const crossCategoryReferences: CategoryReference[] = [
  // 1. Storage Externo -> itens da categoria STORAGE
  {
    targetSubcategoryId: "storage-externo",
    targetSubcategoryName: "Storage Externo",
    sourceCategory: "STORAGE",
    displayName: "Storage Externo",
    description: "Soluções de armazenamento externo de alta performance para servidores dedicados"
  },
  
  // 2. Conectividade -> itens da categoria NETWORKING
  {
    targetSubcategoryId: "conectividade",
    targetSubcategoryName: "Conectividade",
    sourceCategory: "NETWORKING",
    displayName: "Conectividade",
    description: "Soluções de conectividade e networking para servidores dedicados"
  },
  
  // 3. Licenças e Softwares -> itens da categoria LICENÇAS DE SOFTWARE
  {
    targetSubcategoryId: "licencas-softwares",
    targetSubcategoryName: "Licenças e Softwares",
    sourceCategory: "LICENÇAS DE SOFTWARE",
    displayName: "Licenças e Softwares",
    description: "Licenças de software e aplicações para servidores dedicados"
  },
  
  // 4. Segurança -> itens da categoria SECURITY
  {
    targetSubcategoryId: "seguranca",
    targetSubcategoryName: "Segurança",
    sourceCategory: "SECURITY",
    displayName: "Segurança",
    description: "Soluções de segurança e proteção para infraestrutura dedicada"
  },
  
  // 5. Gerenciamento -> itens da categoria MANAGED SERVICES
  {
    targetSubcategoryId: "gerenciamento",
    targetSubcategoryName: "Gerenciamento",
    sourceCategory: "MANAGED SERVICES",
    displayName: "Gerenciamento",
    description: "Serviços gerenciados para infraestrutura dedicada"
  },
  
  // 6. Data Protection -> itens da categoria DATA PROTECTION
  {
    targetSubcategoryId: "data-protection",
    targetSubcategoryName: "Data Protection",
    sourceCategory: "DATA PROTECTION",
    displayName: "Data Protection",
    description: "Soluções de proteção e backup de dados para infraestrutura dedicada"
  }
];

// Função helper para buscar itens de uma categoria específica
export const getCategoryItems = (categoryName: string, categories: any[]) => {
  const category = categories.find(cat => cat.name === categoryName);
  if (!category) return [];
  
  // Função recursiva para extrair todos os itens de todas as subcategorias
  const extractAllItems = (subcategories: any[]): any[] => {
    let allItems: any[] = [];
    
    subcategories.forEach(subcat => {
      // Adicionar itens diretos da subcategoria
      if (subcat.items && subcat.items.length > 0) {
        allItems.push(...subcat.items);
      }
      
      // Recursivamente extrair itens de subcategorias aninhadas
      if (subcat.subcategories && subcat.subcategories.length > 0) {
        allItems.push(...extractAllItems(subcat.subcategories));
      }
    });
    
    return allItems;
  };
  
  return extractAllItems(category.subcategories);
};

// Função para aplicar referências cruzadas a uma categoria
export const applyCrossCategoryReferences = (categories: any[]) => {
  // Encontrar a categoria COMPUTE
  const computeCategory = categories.find(cat => cat.name === "COMPUTE");
  if (!computeCategory) return categories;
  
  // Encontrar a subcategoria "Bare Metal"
  const bareMetalSubcat = computeCategory.subcategories.find((sub: any) => 
    sub.name === "Bare Metal (Servidor Dedicado)"
  );
  if (!bareMetalSubcat) return categories;
  
  // Encontrar a subcategoria "Hardware"
  const hardwareSubcat = bareMetalSubcat.subcategories?.find((sub: any) => 
    sub.name === "Hardware"
  );
  if (!hardwareSubcat) return categories;
  
  // Adicionar subcategorias referenciadas
  const referencedSubcategories = crossCategoryReferences.map(ref => {
    const items = getCategoryItems(ref.sourceCategory, categories);
    
    return {
      id: ref.targetSubcategoryId,
      name: ref.displayName || ref.targetSubcategoryName,
      description: ref.description || `Itens referenciados da categoria ${ref.sourceCategory}`,
      items: items,
      _isReference: true, // flag para identificar que é uma referência
      _sourceCategory: ref.sourceCategory
    };
  });
  
  // Adicionar as subcategorias referenciadas à subcategoria Hardware
  if (!hardwareSubcat.subcategories) {
    hardwareSubcat.subcategories = [];
  }
  
  hardwareSubcat.subcategories.push(...referencedSubcategories);
  
  return categories;
};
