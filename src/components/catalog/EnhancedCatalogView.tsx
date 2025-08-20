import React, { useState } from "react";
import { Search, Filter, ChevronRight, Home } from 'lucide-react';
import { categories } from "@/data/catalog";
import { AdvancedSearch } from "./AdvancedSearch";
import { Breadcrumbs } from "../ui/Breadcrumbs";

interface EnhancedCatalogViewProps {
  searchValue: string;
}

const EnhancedCatalogView: React.FC<EnhancedCatalogViewProps> = ({ searchValue }) => {
  console.log('EnhancedCatalogView renderizando', { categoriesCount: categories.length });
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>([]);
  const [showAdvancedSearch, setShowAdvancedSearch] = useState(false);
  const [navigationPath, setNavigationPath] = useState<string[]>([]);

  const toggleSubcategory = (subcatId: string) => {
    setExpandedSubcategories(prev => 
      prev.includes(subcatId) 
        ? prev.filter(id => id !== subcatId)
        : [...prev, subcatId]
    );
  };

  // Função para lidar com seleção de resultados de busca
  const handleSearchResultSelect = (result: any) => {
    setSelectedCategory(result.category);
    setNavigationPath([result.category, result.subcategory]);
    
    // Expandir automaticamente a categoria e subcategoria relevantes
    const category = categories.find(cat => cat.name === result.category);
    if (category) {
      const findAndExpandSubcategory = (subcats: any[], targetName: string): boolean => {
        for (const subcat of subcats) {
          if (subcat.name === targetName) {
            setExpandedSubcategories(prev => [...prev, subcat.id]);
            return true;
          }
          if (subcat.subcategories) {
            if (findAndExpandSubcategory(subcat.subcategories, targetName)) {
              setExpandedSubcategories(prev => [...prev, subcat.id]);
              return true;
            }
          }
        }
        return false;
      };
      
      if (category.subcategories) {
        findAndExpandSubcategory(category.subcategories, result.subcategory);
      }
    }
    
    // Fechar busca avançada após seleção
    setShowAdvancedSearch(false);
  };

  // Função para voltar à visualização de categorias
  const goBackToCategories = () => {
    setSelectedCategory(null);
    setNavigationPath([]);
    setExpandedSubcategories([]);
  };

  // Gerar breadcrumbs
  const breadcrumbs = [
    { label: 'Catálogo', url: '/', isActive: false },
    ...navigationPath.map((path, index) => ({
      label: path,
      url: `/${path.toLowerCase().replace(/\s+/g, '-')}`,
      isActive: index === navigationPath.length - 1
    }))
  ];

  // Função recursiva para contar todos os itens incluindo subcategorias aninhadas
  const countAllItems = (subcategories: any[]): number => {
    return subcategories.reduce((total, subcat) => {
      let itemCount = subcat.items ? subcat.items.length : 0;
      if (subcat.subcategories && subcat.subcategories.length > 0) {
        itemCount += countAllItems(subcat.subcategories);
      }
      return total + itemCount;
    }, 0);
  };

  // Função recursiva para renderizar subcategorias aninhadas
  const renderSubcategory = (subcat: any, level: number = 0) => {
    const isExpanded = expandedSubcategories.includes(subcat.id);
    const hasItems = subcat.items && subcat.items.length > 0;
    const hasSubcategories = subcat.subcategories && subcat.subcategories.length > 0;
    const totalItems = hasItems ? subcat.items.length : (hasSubcategories ? countAllItems(subcat.subcategories) : 0);
    const isReference = subcat._isReference;
    
    const bgColor = isReference 
      ? 'bg-purple-50' 
      : level === 0 ? 'bg-gray-50' : level === 1 ? 'bg-blue-50' : 'bg-green-50';
    const borderColor = isReference 
      ? 'border-purple-200' 
      : level === 0 ? 'border-gray-200' : level === 1 ? 'border-blue-200' : 'border-green-200';
    
    return (
      <div key={subcat.id} className={`${bgColor} border ${borderColor} rounded-lg`}>
        <div 
          className={`p-4 cursor-pointer hover:${isReference ? 'bg-purple-100' : level === 0 ? 'bg-gray-100' : level === 1 ? 'bg-blue-100' : 'bg-green-100'}`}
          onClick={() => toggleSubcategory(subcat.id)}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className={`font-semibold text-gray-900 ${level === 0 ? 'text-base' : 'text-sm'} ${isReference ? 'flex items-center gap-2' : ''}`}>
                {'  '.repeat(level)}
                {subcat.name}
                {isReference && (
                  <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded-full border border-purple-300">
                    🔗 Ref: {subcat._sourceCategory}
                  </span>
                )}
              </h3>
              <p className={`text-gray-600 ${level === 0 ? 'text-sm' : 'text-xs'}`}>
                {subcat.description}
              </p>
              <div className="text-xs text-gray-500 mt-2">
                {totalItems} itens totais | Clique para expandir
                {isReference && (
                  <span className="ml-2 text-purple-600 font-medium">
                    (Itens referenciados da categoria {subcat._sourceCategory})
                  </span>
                )}
              </div>
            </div>
            <span className="text-gray-400">
              {isExpanded ? '▼' : '▶'}
            </span>
          </div>
        </div>
        
        {isExpanded && (
          <div className="border-t bg-white p-4">
            {hasItems && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {subcat.items.map((item: any) => (
                  <div key={item.id} className={`border rounded-lg p-4 ${isReference ? 'bg-purple-50 border-purple-200' : 'bg-gray-50'}`}>
                    <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                      {item.name}
                      {isReference && (
                        <span className="text-xs bg-purple-100 text-purple-700 px-1.5 py-0.5 rounded">
                          REF
                        </span>
                      )}
                    </h4>
                    <p className="text-sm text-gray-600 mb-3">{item.description}</p>
                    
                    {item.price && (
                      <div className="text-sm font-semibold text-green-600 mb-2">
                        R$ {item.price.toFixed(2)}/mês
                      </div>
                    )}
                    
                    {item.characteristics && (
                      <div className="text-xs text-gray-500">
                        <strong>Características:</strong>
                        <ul className="list-disc list-inside mt-1">
                          {item.characteristics.slice(0, 3).map((char: string, idx: number) => (
                            <li key={idx}>{char}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                    
                    {item.tags && (
                      <div className="mt-2 flex flex-wrap gap-1">
                        {item.tags.slice(0, 4).map((tag: string, idx: number) => (
                          <span key={idx} className={`text-xs px-2 py-1 rounded ${isReference ? 'bg-purple-100 text-purple-800' : 'bg-blue-100 text-blue-800'}`}>
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    
                    {isReference && (
                      <div className="mt-2 text-xs text-purple-600 font-medium">
                        📂 Categoria original: {subcat._sourceCategory}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {hasSubcategories && (
              <div className="space-y-3">
                {subcat.subcategories.map((nestedSubcat: any) => 
                  renderSubcategory(nestedSubcat, level + 1)
                )}
              </div>
            )}
          </div>
        )}
      </div>
    );
  };

  // Se uma categoria específica está selecionada, mostrar detalhes
  if (selectedCategory) {
    const category = categories.find(cat => cat.name === selectedCategory);
    
    if (!category) {
      return <div>Categoria não encontrada</div>;
    }

    return (
      <div className="space-y-6">
        {/* Breadcrumbs */}
        <Breadcrumbs 
          items={breadcrumbs}
          onNavigate={(url) => {
            if (url === '/') {
              goBackToCategories();
            }
          }}
        />

        {/* Header da Categoria */}
        <div className="bg-white border border-gray-200 rounded-lg p-6">
          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{category.name}</h1>
              <p className="text-gray-600 mb-4">{category.description}</p>
              <div className="text-sm text-gray-500">
                {category.subcategories ? countAllItems(category.subcategories) : 0} itens totais
              </div>
            </div>
            <button
              onClick={goBackToCategories}
              className="text-blue-600 hover:text-blue-800 text-sm font-medium"
            >
              ← Voltar ao Catálogo
            </button>
          </div>
        </div>

        {/* Subcategorias */}
        {category.subcategories && category.subcategories.length > 0 && (
          <div className="space-y-4">
            {category.subcategories.map((subcat: any) => renderSubcategory(subcat))}
          </div>
        )}
      </div>
    );
  }

  // Visualização principal do catálogo
  return (
    <div className="space-y-6">
      {/* Header com Busca Avançada */}
      <div className="bg-white border border-gray-200 rounded-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Catálogo de Infraestrutura</h1>
            <p className="text-gray-600">Explore nossa ampla gama de soluções de infraestrutura</p>
          </div>
          <button
            onClick={() => setShowAdvancedSearch(!showAdvancedSearch)}
            className={`flex items-center gap-2 px-4 py-2 border rounded-lg transition-colors ${
              showAdvancedSearch 
                ? 'bg-blue-500 text-white border-blue-500' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
          >
            <Search className="w-4 h-4" />
            Busca Avançada
          </button>
        </div>

        {/* Busca Avançada */}
        {showAdvancedSearch && (
          <AdvancedSearch 
            categories={categories}
            onResultSelect={handleSearchResultSelect}
            className="border-t pt-4"
          />
        )}
      </div>

      {/* Grid de Categorias */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => {
          const totalItems = category.subcategories ? countAllItems(category.subcategories) : 0;
          
          return (
            <div
              key={category.id}
              className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow cursor-pointer"
              onClick={() => {
                setSelectedCategory(category.name);
                setNavigationPath([category.name]);
              }}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">{category.name}</h2>
              <p className="text-gray-600 text-sm mb-4">{category.description}</p>
              
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  {totalItems} produtos disponíveis
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </div>
              
              {/* Preview das subcategorias */}
              {category.subcategories && category.subcategories.length > 0 && (
                <div className="mt-4 pt-4 border-t border-gray-100">
                  <div className="text-xs text-gray-500 mb-2">Categorias principais:</div>
                  <div className="flex flex-wrap gap-1">
                    {category.subcategories.slice(0, 3).map((subcat, idx) => (
                      <span key={idx} className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded">
                        {subcat.name}
                      </span>
                    ))}
                    {category.subcategories.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{category.subcategories.length - 3} mais
                      </span>
                    )}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Estatísticas do Catálogo */}
      <div className="bg-gray-50 border border-gray-200 rounded-lg p-6">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Estatísticas do Catálogo</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center">
            <div className="text-2xl font-bold text-blue-600">{categories.length}</div>
            <div className="text-sm text-gray-500">Categorias</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-green-600">
              {categories.reduce((total, cat) => 
                total + (cat.subcategories ? cat.subcategories.length : 0), 0
              )}
            </div>
            <div className="text-sm text-gray-500">Subcategorias</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">
              {categories.reduce((total, cat) => 
                total + (cat.subcategories ? countAllItems(cat.subcategories) : 0), 0
              )}
            </div>
            <div className="text-sm text-gray-500">Produtos</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-orange-600">24/7</div>
            <div className="text-sm text-gray-500">Suporte</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnhancedCatalogView;
