import React, { useState } from "react";
import { categories } from "@/data/catalog";

interface SimpleCatalogViewProps {
  searchValue: string;
}

const SimpleCatalogView: React.FC<SimpleCatalogViewProps> = ({ searchValue }) => {
  console.log('SimpleCatalogView renderizando', { categoriesCount: categories.length });
  
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>([]);

  const toggleSubcategory = (subcatId: string) => {
    setExpandedSubcategories(prev => 
      prev.includes(subcatId) 
        ? prev.filter(id => id !== subcatId)
        : [...prev, subcatId]
    );
  };

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
    
    return (
      <div key={subcat.id} className={`mb-4 p-4 bg-white border rounded-lg shadow-sm catalog-card ${isReference ? 'border-purple-200 bg-purple-50' : 'border-gray-200'}`}>
        <div 
          className="cursor-pointer flex justify-between items-center"
          onClick={() => toggleSubcategory(subcat.id)}
        >
          <div className="flex items-center space-x-3">
            <div>
              <h3 className="text-lg font-semibold text-gray-800">{subcat.name}</h3>
              {subcat.shortDescription && (
                <p className="text-sm text-gray-600 mt-1">{subcat.shortDescription}</p>
              )}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <span className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full">
              {totalItems} {totalItems === 1 ? 'item' : 'itens'}
            </span>
            <span className="text-gray-400">
              {isExpanded ? '▼' : '▶'}
            </span>
          </div>
        </div>

        {subcat.description && (
          <p className="text-gray-600 mt-3 text-sm">{subcat.description}</p>
        )}

        {isExpanded && (
          <div className="mt-4 space-y-3">
            {/* Renderizar itens da subcategoria */}
            {hasItems && (
              <div className="space-y-2">
                {subcat.items.map((item: any) => (
                  <div key={item.id} className="p-3 bg-gray-50 rounded border">
                    <div className="flex justify-between items-start">
                      <div>
                        <h4 className="font-medium text-gray-800">{item.name}</h4>
                        {item.description && (
                          <p className="text-sm text-gray-600 mt-1 description-text">{item.description}</p>
                        )}
                      </div>
                      {item.category && (
                        <span className="bg-green-100 text-green-800 text-xs px-2 py-1 rounded">
                          {item.category}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Renderizar subcategorias aninhadas */}
            {hasSubcategories && (
              <div className="ml-4 space-y-2">
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

  const filteredCategories = categories.filter(category => {
    if (!searchValue) return true;
    
    const searchLower = searchValue.toLowerCase();
    return category.name.toLowerCase().includes(searchLower) ||
           category.description?.toLowerCase().includes(searchLower) ||
           category.subcategories.some((subcat: any) => 
             subcat.name.toLowerCase().includes(searchLower) ||
             subcat.description?.toLowerCase().includes(searchLower) ||
             (subcat.items && subcat.items.some((item: any) => 
               item.name.toLowerCase().includes(searchLower) ||
               item.description?.toLowerCase().includes(searchLower)
             ))
           );
  });

  console.log('Categorias filtradas:', filteredCategories.length);

  if (selectedCategory) {
    const category = categories.find(cat => cat.id === selectedCategory);
    if (!category) return null;

    return (
      <div className="space-y-6">
          <div className="flex items-center space-x-4 mb-6">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="bg-gray-100 hover:bg-gray-200 px-4 py-2 rounded-lg text-gray-700 font-medium transition-colors"
            >
              ← Voltar
            </button>
            <div>
              <h1 className="text-2xl font-bold text-gray-800">{category.name}</h1>
              <p className="text-gray-600">{category.description}</p>
            </div>
          </div>        <div className="space-y-4">
          {category.subcategories.map((subcat: any) => renderSubcategory(subcat))}
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Catálogo de Infraestrutura</h1>
        <p className="text-gray-600">Explore nossos serviços e soluções organizados por categoria</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCategories.map((category) => {
          const totalItems = countAllItems(category.subcategories);
          
          return (
            <div 
              key={category.id}
              className="bg-white border border-gray-200 rounded-lg p-6 cursor-pointer catalog-card"
              onClick={() => setSelectedCategory(category.id)}
            >
              <div className="flex items-center space-x-3 mb-4">
                <h2 className="text-xl font-semibold text-gray-800">{category.name}</h2>
              </div>
              
              <p className="text-gray-600 text-sm mb-4 description-text">{category.description}</p>
              
              <div className="flex justify-between items-center">
                <span className="bg-blue-100 text-blue-800 text-sm px-3 py-1 rounded-full">
                  {totalItems} {totalItems === 1 ? 'item' : 'itens'}
                </span>
                <span className="text-blue-600 font-medium">Ver detalhes →</span>
              </div>
            </div>
          );
        })}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg">
            Nenhuma categoria encontrada para "{searchValue}"
          </p>
        </div>
      )}
    </div>
  );
};

export default SimpleCatalogView;
