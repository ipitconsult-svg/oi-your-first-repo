import { useState, useMemo } from 'react';

export interface SearchFilters {
  query: string;
  priceRange: {
    min: number;
    max: number;
  };
  categories: string[];
  tags: string[];
  sortBy: 'name' | 'price' | 'relevance';
  sortOrder: 'asc' | 'desc';
}

export interface SearchResult {
  id: string;
  name: string;
  description: string;
  price?: number;
  category: string;
  subcategory: string;
  tags: string[];
  characteristics: string[];
  relevanceScore: number;
  path: string[]; // caminho navegacional
}

export const useAdvancedSearch = (allCategories: any[]) => {
  const [filters, setFilters] = useState<SearchFilters>({
    query: '',
    priceRange: { min: 0, max: 10000 },
    categories: [],
    tags: [],
    sortBy: 'relevance',
    sortOrder: 'desc'
  });

  // Extrair todos os itens de todas as categorias para busca
  const allItems = useMemo(() => {
    const items: SearchResult[] = [];
    
    const extractItems = (categories: any[], path: string[] = []) => {
      categories.forEach(category => {
        const categoryPath = [...path, category.name];
        
        if (category.subcategories) {
          extractSubcategoryItems(category.subcategories, categoryPath);
        }
      });
    };
    
    const extractSubcategoryItems = (subcategories: any[], path: string[]) => {
      subcategories.forEach(subcat => {
        const subcatPath = [...path, subcat.name];
        
        // Extrair itens diretos
        if (subcat.items) {
          subcat.items.forEach((item: any) => {
            items.push({
              id: item.id,
              name: item.name,
              description: item.description || '',
              price: item.price,
              category: path[0] || '',
              subcategory: subcat.name,
              tags: item.tags || [],
              characteristics: item.characteristics || [],
              relevanceScore: 0,
              path: subcatPath
            });
          });
        }
        
        // Extrair de subcategorias aninhadas
        if (subcat.subcategories) {
          extractSubcategoryItems(subcat.subcategories, subcatPath);
        }
      });
    };
    
    extractItems(allCategories);
    return items;
  }, [allCategories]);

  // Função de busca com scoring de relevância
  const searchResults = useMemo(() => {
    let results = [...allItems];
    
    // Filtro por query (busca textual)
    if (filters.query.trim()) {
      const query = filters.query.toLowerCase();
      results = results.map(item => {
        let score = 0;
        
        // Pontuação por correspondência no nome (peso maior)
        if (item.name.toLowerCase().includes(query)) {
          score += 100;
          if (item.name.toLowerCase().startsWith(query)) {
            score += 50; // Bônus para começar com a query
          }
        }
        
        // Pontuação por correspondência na descrição
        if (item.description.toLowerCase().includes(query)) {
          score += 30;
        }
        
        // Pontuação por correspondência em tags
        item.tags.forEach(tag => {
          if (tag.toLowerCase().includes(query)) {
            score += 20;
          }
        });
        
        // Pontuação por correspondência em características
        item.characteristics.forEach(char => {
          if (char.toLowerCase().includes(query)) {
            score += 10;
          }
        });
        
        return { ...item, relevanceScore: score };
      }).filter(item => item.relevanceScore > 0);
    }
    
    // Filtro por faixa de preço
    results = results.filter(item => {
      if (item.price === undefined) return true;
      return item.price >= filters.priceRange.min && item.price <= filters.priceRange.max;
    });
    
    // Filtro por categorias
    if (filters.categories.length > 0) {
      results = results.filter(item => 
        filters.categories.includes(item.category)
      );
    }
    
    // Filtro por tags
    if (filters.tags.length > 0) {
      results = results.filter(item =>
        filters.tags.some(tag => item.tags.includes(tag))
      );
    }
    
    // Ordenação
    results.sort((a, b) => {
      let comparison = 0;
      
      switch (filters.sortBy) {
        case 'name':
          comparison = a.name.localeCompare(b.name);
          break;
        case 'price':
          const priceA = a.price || 0;
          const priceB = b.price || 0;
          comparison = priceA - priceB;
          break;
        case 'relevance':
        default:
          comparison = b.relevanceScore - a.relevanceScore;
          break;
      }
      
      return filters.sortOrder === 'desc' ? -comparison : comparison;
    });
    
    return results;
  }, [allItems, filters]);

  // Estatísticas de busca
  const searchStats = useMemo(() => {
    const totalItems = allItems.length;
    const filteredItems = searchResults.length;
    
    // Categorias representadas nos resultados
    const categoriesInResults = [...new Set(searchResults.map(item => item.category))];
    
    // Tags mais comuns nos resultados
    const tagCounts: Record<string, number> = {};
    searchResults.forEach(item => {
      item.tags.forEach(tag => {
        tagCounts[tag] = (tagCounts[tag] || 0) + 1;
      });
    });
    
    const popularTags = Object.entries(tagCounts)
      .sort(([,a], [,b]) => b - a)
      .slice(0, 10)
      .map(([tag, count]) => ({ tag, count }));
    
    // Faixa de preços dos resultados
    const prices = searchResults
      .map(item => item.price)
      .filter(price => price !== undefined) as number[];
    
    const priceRange = prices.length > 0 ? {
      min: Math.min(...prices),
      max: Math.max(...prices),
      avg: prices.reduce((sum, price) => sum + price, 0) / prices.length
    } : null;
    
    return {
      totalItems,
      filteredItems,
      categoriesInResults,
      popularTags,
      priceRange
    };
  }, [allItems, searchResults]);

  // Função para obter todas as categorias disponíveis
  const availableCategories = useMemo(() => {
    return [...new Set(allItems.map(item => item.category))];
  }, [allItems]);

  // Função para obter todas as tags disponíveis
  const availableTags = useMemo(() => {
    const tags = new Set<string>();
    allItems.forEach(item => {
      item.tags.forEach(tag => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, [allItems]);

  return {
    filters,
    setFilters,
    searchResults,
    searchStats,
    availableCategories,
    availableTags,
    
    // Funções helper para atualizar filtros
    updateQuery: (query: string) => 
      setFilters(prev => ({ ...prev, query })),
    
    updatePriceRange: (priceRange: { min: number; max: number }) =>
      setFilters(prev => ({ ...prev, priceRange })),
    
    toggleCategory: (category: string) =>
      setFilters(prev => ({
        ...prev,
        categories: prev.categories.includes(category)
          ? prev.categories.filter(c => c !== category)
          : [...prev.categories, category]
      })),
    
    toggleTag: (tag: string) =>
      setFilters(prev => ({
        ...prev,
        tags: prev.tags.includes(tag)
          ? prev.tags.filter(t => t !== tag)
          : [...prev.tags, tag]
      })),
    
    updateSort: (sortBy: SearchFilters['sortBy'], sortOrder: SearchFilters['sortOrder']) =>
      setFilters(prev => ({ ...prev, sortBy, sortOrder })),
    
    clearFilters: () =>
      setFilters({
        query: '',
        priceRange: { min: 0, max: 10000 },
        categories: [],
        tags: [],
        sortBy: 'relevance',
        sortOrder: 'desc'
      })
  };
};
