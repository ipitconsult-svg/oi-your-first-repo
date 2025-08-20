// Sistema de referências cruzadas entre categorias
// Permite que itens de uma categoria sejam exibidos em outras sem duplicação

export interface CategoryReference {
  // Subcategoria de destino (onde será mostrado)
  targetSubcategoryId: string;
  targetSubcategoryName: string;
  
  // Categoria de origem (de onde vem os itens)
  sourceCategory: string;
  sourceSubcategoryId?: string; // opcional, se não especificado, pega todos os itens da categoria
  specificItemIds?: string[]; // opcional, IDs específicos dos itens a serem referenciados
  
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
  },

  // 7. Licenças de Software de Segurança -> itens específicos da categoria LICENÇAS DE SOFTWARE
  {
    targetSubcategoryId: "4.6",
    targetSubcategoryName: "Licenças de Software de Segurança",
    sourceCategory: "LICENÇAS DE SOFTWARE",
    displayName: "Licenças de Software de Segurança",
    description: "Licenças especializadas em software de segurança e proteção",
    specificItemIds: ["8.1.3.1", "8.1.3.2", "8.1.3.3", "8.1.3.4", "8.1.6.1"] // Imunify e MagicSpam
  }
];

// Função helper para buscar itens de uma categoria específica
export const getCategoryItems = (categoryName: string, categories: any[], specificItemIds?: string[]) => {
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
  
  const allItems = extractAllItems(category.subcategories);
  
  // Se specificItemIds foi fornecido, filtrar apenas esses itens
  if (specificItemIds && specificItemIds.length > 0) {
    return allItems.filter(item => specificItemIds.includes(item.id));
  }
  
  return allItems;
};

// Função para aplicar referências cruzadas a uma categoria
export const applyCrossCategoryReferences = (categories: any[]) => {
  // 1. Aplicar referências para COMPUTE -> Bare Metal -> Hardware
  const computeCategory = categories.find(cat => cat.name === "COMPUTE");
  if (computeCategory) {
    const bareMetalSubcat = computeCategory.subcategories.find((sub: any) => 
      sub.name === "Bare Metal (Servidor Dedicado)"
    );
    if (bareMetalSubcat) {
      const hardwareSubcat = bareMetalSubcat.subcategories?.find((sub: any) => 
        sub.name === "Hardware"
      );
      if (hardwareSubcat) {
        // Filtrar apenas as referências para Hardware (primeiras 6)
        const hardwareReferences = crossCategoryReferences.filter(ref => 
          !ref.targetSubcategoryId.includes(".")
        );
        
        const referencedSubcategories = hardwareReferences.map(ref => {
          const items = getCategoryItems(ref.sourceCategory, categories, ref.specificItemIds);
          
          return {
            id: ref.targetSubcategoryId,
            name: ref.displayName || ref.targetSubcategoryName,
            description: ref.description || `Itens referenciados da categoria ${ref.sourceCategory}`,
            items: items,
            _isReference: true,
            _sourceCategory: ref.sourceCategory
          };
        });
        
        if (!hardwareSubcat.subcategories) {
          hardwareSubcat.subcategories = [];
        }
        hardwareSubcat.subcategories.push(...referencedSubcategories);
      }
    }
  }

  // 2. Aplicar referências para SECURITY -> Licenças de Software de Segurança
  const securityCategory = categories.find(cat => cat.name === "SECURITY");
  if (securityCategory) {
    // Buscar referência específica para SECURITY
    const securityReference = crossCategoryReferences.find(ref => 
      ref.targetSubcategoryId === "4.6"
    );
    
    if (securityReference) {
      const securitySubcat = securityCategory.subcategories.find((sub: any) => 
        sub.id === "4.6"
      );
      
      if (securitySubcat) {
        // Obter os itens específicos (Imunify e MagicSpam)
        const items = getCategoryItems(securityReference.sourceCategory, categories, securityReference.specificItemIds);
        
        // Substituir ou adicionar os itens referenciados
        if (!securitySubcat.items) {
          securitySubcat.items = [];
        }
        
        // Manter o item original "Link para Catálogo de Licenças" e adicionar os específicos
        const originalItems = securitySubcat.items.filter((item: any) => item.id === "4.6.1");
        const referencedItems = items.map(item => ({
          ...item,
          _isReference: true,
          _sourceCategory: securityReference.sourceCategory
        }));
        
        securitySubcat.items = [...originalItems, ...referencedItems];
      }
    }
  }
  
  return categories;
};
