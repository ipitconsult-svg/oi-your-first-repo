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
    
    const bgColor = level === 0 ? 'bg-gray-50' : level === 1 ? 'bg-blue-50' : 'bg-green-50';
    const borderColor = level === 0 ? 'border-gray-200' : level === 1 ? 'border-blue-200' : 'border-green-200';
    
    return (
      <div key={subcat.id} className={`${bgColor} border ${borderColor} rounded-lg`}>
        <div 
          className={`p-4 cursor-pointer hover:${level === 0 ? 'bg-gray-100' : level === 1 ? 'bg-blue-100' : 'bg-green-100'}`}
          onClick={() => toggleSubcategory(subcat.id)}
        >
          <div className="flex justify-between items-center">
            <div>
              <h3 className={`font-semibold text-gray-900 ${level === 0 ? 'text-base' : 'text-sm'}`}>
                {'  '.repeat(level)}
                {subcat.name}
              </h3>
              <p className={`text-gray-600 ${level === 0 ? 'text-sm' : 'text-xs'}`}>
                {subcat.description}
              </p>
              <div className="text-xs text-gray-500 mt-2">
                {totalItems} itens totais | Clique para expandir
              </div>
            </div>
            <span className="text-gray-400">
              {isExpanded ? '▼' : '▶'}
            </span>
          </div>
        </div>
        
        {isExpanded && (
          <div className="border-t bg-white p-4">
            {/* Renderizar itens diretos se existirem */}
            {hasItems && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                {subcat.items.map((item: any) => (
                  <div key={item.id} className="border rounded-lg p-4 bg-gray-50">
                    <h4 className="font-medium text-gray-900 mb-2">{item.name}</h4>
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
                          <span key={idx} className="text-xs bg-blue-100 text-blue-800 px-2 py-1 rounded">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}
            
            {/* Renderizar subcategorias aninhadas se existirem */}
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

  // Se uma categoria está selecionada, mostrar detalhes
  if (selectedCategory) {
    const category = categories.find(c => c.id === selectedCategory);
    if (category) {
      return (
        <div className="space-y-6">
          <div className="bg-white p-6 rounded-lg shadow-md border">
            <button 
              onClick={() => setSelectedCategory(null)}
              className="mb-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              ← Voltar
            </button>
            <h1 className="text-3xl font-bold text-gray-900 mb-4">{category.name}</h1>
            <p className="text-gray-600 mb-6">{category.description}</p>
            <div className="text-sm text-gray-500 mb-6">
              ID: {category.id} | {category.subcategories.length} subcategorias
            </div>
            
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900">Subcategorias:</h2>
              {category.subcategories.map((subcat) => renderSubcategory(subcat, 0))}
            </div>
          </div>
        </div>
      );
    }
  }

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Catálogo de Produtos</h2>
        <p className="text-gray-600">Explore nossas {categories.length} categorias de produtos</p>
        {searchValue && <p className="text-blue-600">Buscando por: "{searchValue}"</p>}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <div 
            key={category.id} 
            className="bg-white p-6 rounded-lg shadow-md border hover:shadow-lg transition-shadow cursor-pointer"
            onClick={() => setSelectedCategory(category.id)}
          >
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {category.name}
            </h3>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="text-sm text-gray-500">
              ID: {category.id} | {category.subcategories.length} subcategorias
            </div>
            <div className="mt-4 text-blue-600 text-sm font-medium">
              Clique para explorar →
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SimpleCatalogView;
