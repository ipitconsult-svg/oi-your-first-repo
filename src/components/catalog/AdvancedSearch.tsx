import React from 'react';
import { Search, Filter, X, TrendingUp, Tag, DollarSign } from 'lucide-react';
import { useAdvancedSearch, SearchFilters } from '@/hooks/use-advanced-search';

interface AdvancedSearchProps {
  categories: any[];
  onResultSelect?: (result: any) => void;
  className?: string;
}

export const AdvancedSearch: React.FC<AdvancedSearchProps> = ({
  categories,
  onResultSelect,
  className = ""
}) => {
  const {
    filters,
    searchResults,
    searchStats,
    availableCategories,
    availableTags,
    updateQuery,
    updatePriceRange,
    toggleCategory,
    toggleTag,
    updateSort,
    clearFilters
  } = useAdvancedSearch(categories);

  const [showFilters, setShowFilters] = React.useState(false);

  return (
    <div className={`space-y-4 ${className}`}>
      {/* Barra de Busca Principal */}
      <div className="relative">
        <div className="flex gap-2">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
            <input
              type="text"
              placeholder="Buscar produtos, serviços, categorias..."
              value={filters.query}
              onChange={(e) => updateQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
          </div>
          <button
            onClick={() => setShowFilters(!showFilters)}
            className={`px-4 py-2 border rounded-lg flex items-center gap-2 transition-colors ${
              showFilters ? 'bg-blue-500 text-white' : 'bg-white text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Filter className="w-4 h-4" />
            Filtros
            {(filters.categories.length > 0 || filters.tags.length > 0) && (
              <span className="bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
                {filters.categories.length + filters.tags.length}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Estatísticas de Busca */}
      {filters.query && (
        <div className="flex items-center gap-4 text-sm text-gray-600 bg-blue-50 p-3 rounded-lg">
          <span>
            <strong>{searchStats.filteredItems}</strong> de <strong>{searchStats.totalItems}</strong> resultados
          </span>
          {searchStats.priceRange && (
            <span className="flex items-center gap-1">
              <DollarSign className="w-3 h-3" />
              R$ {searchStats.priceRange.min.toFixed(0)} - R$ {searchStats.priceRange.max.toFixed(0)}
            </span>
          )}
          <span className="flex items-center gap-1">
            <Tag className="w-3 h-3" />
            {searchStats.categoriesInResults.length} categorias
          </span>
        </div>
      )}

      {/* Painel de Filtros */}
      {showFilters && (
        <div className="bg-gray-50 border rounded-lg p-4 space-y-4">
          <div className="flex justify-between items-center">
            <h3 className="font-semibold text-gray-900">Filtros Avançados</h3>
            <button
              onClick={clearFilters}
              className="text-sm text-blue-600 hover:text-blue-800 flex items-center gap-1"
            >
              <X className="w-3 h-3" />
              Limpar Filtros
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* Faixa de Preço */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Faixa de Preço (R$/mês)
              </label>
              <div className="space-y-2">
                <div className="flex gap-2">
                  <input
                    type="number"
                    placeholder="Min"
                    value={filters.priceRange.min || ''}
                    onChange={(e) => updatePriceRange({
                      ...filters.priceRange,
                      min: Number(e.target.value) || 0
                    })}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                  <input
                    type="number"
                    placeholder="Max"
                    value={filters.priceRange.max || ''}
                    onChange={(e) => updatePriceRange({
                      ...filters.priceRange,
                      max: Number(e.target.value) || 10000
                    })}
                    className="w-full p-2 border border-gray-300 rounded text-sm"
                  />
                </div>
              </div>
            </div>

            {/* Categorias */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Categorias
              </label>
              <div className="max-h-32 overflow-y-auto space-y-1">
                {availableCategories.map(category => (
                  <label key={category} className="flex items-center gap-2 text-sm">
                    <input
                      type="checkbox"
                      checked={filters.categories.includes(category)}
                      onChange={() => toggleCategory(category)}
                      className="rounded"
                    />
                    <span className="truncate">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            {/* Tags Populares */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Tags Populares
              </label>
              <div className="max-h-32 overflow-y-auto">
                <div className="flex flex-wrap gap-1">
                  {searchStats.popularTags.slice(0, 10).map(({ tag, count }) => (
                    <button
                      key={tag}
                      onClick={() => toggleTag(tag)}
                      className={`text-xs px-2 py-1 rounded-full border transition-colors ${
                        filters.tags.includes(tag)
                          ? 'bg-blue-500 text-white border-blue-500'
                          : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
                      }`}
                    >
                      {tag} ({count})
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Ordenação */}
          <div className="border-t pt-4">
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Ordenar por
            </label>
            <div className="flex gap-2">
              <select
                value={filters.sortBy}
                onChange={(e) => updateSort(e.target.value as SearchFilters['sortBy'], filters.sortOrder)}
                className="p-2 border border-gray-300 rounded text-sm"
              >
                <option value="relevance">Relevância</option>
                <option value="name">Nome</option>
                <option value="price">Preço</option>
              </select>
              <select
                value={filters.sortOrder}
                onChange={(e) => updateSort(filters.sortBy, e.target.value as SearchFilters['sortOrder'])}
                className="p-2 border border-gray-300 rounded text-sm"
              >
                <option value="asc">Crescente</option>
                <option value="desc">Decrescente</option>
              </select>
            </div>
          </div>
        </div>
      )}

      {/* Resultados da Busca */}
      {filters.query && searchResults.length > 0 && (
        <div className="space-y-3">
          <h3 className="font-semibold text-gray-900">Resultados da Busca</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-h-96 overflow-y-auto">
            {searchResults.slice(0, 20).map(result => (
              <div
                key={result.id}
                className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                onClick={() => onResultSelect?.(result)}
              >
                <div className="flex justify-between items-start mb-2">
                  <h4 className="font-medium text-gray-900 truncate">{result.name}</h4>
                  {result.price && (
                    <span className="text-sm font-semibold text-green-600 ml-2">
                      R$ {result.price.toFixed(2)}
                    </span>
                  )}
                </div>
                
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">
                  {result.description}
                </p>
                
                <div className="flex justify-between items-end">
                  <div className="text-xs text-gray-500">
                    <span className="font-medium">{result.category}</span>
                    {result.subcategory && (
                      <span> → {result.subcategory}</span>
                    )}
                  </div>
                  
                  {filters.query && result.relevanceScore > 0 && (
                    <div className="flex items-center gap-1 text-xs text-blue-600">
                      <TrendingUp className="w-3 h-3" />
                      {result.relevanceScore}
                    </div>
                  )}
                </div>
                
                {result.tags.length > 0 && (
                  <div className="mt-2 flex flex-wrap gap-1">
                    {result.tags.slice(0, 3).map(tag => (
                      <span
                        key={tag}
                        className="text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                    {result.tags.length > 3 && (
                      <span className="text-xs text-gray-500">
                        +{result.tags.length - 3} mais
                      </span>
                    )}
                  </div>
                )}
              </div>
            ))}
          </div>
          
          {searchResults.length > 20 && (
            <div className="text-center text-sm text-gray-500">
              Mostrando 20 de {searchResults.length} resultados. Refine sua busca para ver mais.
            </div>
          )}
        </div>
      )}

      {/* Sem resultados */}
      {filters.query && searchResults.length === 0 && (
        <div className="text-center py-8 text-gray-500">
          <Search className="w-12 h-12 mx-auto mb-4 text-gray-300" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Nenhum resultado encontrado
          </h3>
          <p className="text-sm">
            Tente usar termos diferentes ou remover alguns filtros.
          </p>
        </div>
      )}
    </div>
  );
};
