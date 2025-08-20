import { useState, useEffect } from "react";
import { Category } from "@/types/catalog";
import { categories, dataCenters } from "@/data/catalog";
import { CompactDataCenterCard } from "./CompactDataCenterCard";
import { DataCenterNetwork } from "./DataCenterNetwork";
import { ModernCategoryPage } from "./ModernCategoryPage";
import { ModernCategoryDetail } from "./ModernCategoryDetail";
import { ModernHero } from "../layout/ModernHero";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, MapPin, Package, Sparkles, TrendingUp, Search } from "lucide-react";
import { type FilterOptions } from "../layout/FilterPanel";

interface CatalogViewProps {
  searchValue: string;
  filters?: FilterOptions;
  showHome?: boolean;
  onCategoryEnter?: () => void;
  onBackToHome?: () => void;
  onResultsChange?: (count: number | undefined) => void;
  onSearchChange?: (search: string) => void;
  onFiltersChange?: (filters: FilterOptions) => void;
}

export const CatalogView = ({
  searchValue,
  filters = { categories: [], types: [], dataCenters: [] },
  showHome = true,
  onCategoryEnter,
  onBackToHome,
  onResultsChange,
  onSearchChange,
  onFiltersChange
}: CatalogViewProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [breadcrumb, setBreadcrumb] = useState<{
    id: string;
    name: string;
  }[]>([]);
  const [showPrices, setShowPrices] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      setSelectedCategory(categoryId);
      setBreadcrumb([{
        id: categoryId,
        name: category.name
      }]);
      onCategoryEnter?.();
    }
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    setBreadcrumb([]);
    onBackToHome?.();
  };

  const filterItems = (items: any[]) => {
    let filteredItems = items;

    // Filtro por busca textual
    if (searchValue) {
      filteredItems = filteredItems.filter(item => 
        item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.id.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.description?.toLowerCase().includes(searchValue.toLowerCase()) ||
        item.tags?.some((tag: string) => tag.toLowerCase().includes(searchValue.toLowerCase()))
      );
    }

    // Filtros por categoria
    if (filters.categories.length > 0) {
      filteredItems = filteredItems.filter(item => 
        filters.categories.includes(item.category) || 
        filters.categories.includes(item.name)
      );
    }

    // Filtros por tipo
    if (filters.types.length > 0) {
      filteredItems = filteredItems.filter(item => 
        filters.types.some(type => 
          item.type?.toLowerCase().includes(type.toLowerCase()) ||
          item.tags?.some((tag: string) => tag.toLowerCase().includes(type.toLowerCase()))
        )
      );
    }

    // Filtros por data center
    if (filters.dataCenters.length > 0) {
      filteredItems = filteredItems.filter(item => 
        filters.dataCenters.some(dc => 
          item.location?.toLowerCase().includes(dc.toLowerCase()) ||
          item.dataCenter?.toLowerCase().includes(dc.toLowerCase())
        )
      );
    }

    return filteredItems;
  };

  const filterDataCenters = (datacenters: any[]) => {
    let filteredItems = datacenters;

    // Filtro por busca textual
    if (searchValue) {
      filteredItems = filteredItems.filter(dc => 
        dc.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        dc.city.toLowerCase().includes(searchValue.toLowerCase()) ||
        dc.country.toLowerCase().includes(searchValue.toLowerCase()) ||
        dc.region?.toLowerCase().includes(searchValue.toLowerCase())
      );
    }

    // Filtros por data center
    if (filters.dataCenters.length > 0) {
      filteredItems = filteredItems.filter(dc => 
        filters.dataCenters.some(filterDc => 
          dc.name.toLowerCase().includes(filterDc.toLowerCase()) ||
          dc.city.toLowerCase().includes(filterDc.toLowerCase())
        )
      );
    }

    return filteredItems;
  };

  if (selectedCategory) {
    const category = categories.find(c => c.id === selectedCategory);
    if (!category) return null;

    return (
      <ModernCategoryDetail
        category={category}
        searchValue={searchValue}
        showPrices={showPrices}
        onBackClick={handleBackClick}
        onTogglePrices={() => setShowPrices(!showPrices)}
      />
    );
  }

  const filteredCategories = filterItems(categories);
  const filteredDataCenters = filterDataCenters(dataCenters);

  // Calculate and report total results
  useEffect(() => {
    if (searchValue || filters.categories.length > 0 || filters.types.length > 0 || filters.dataCenters.length > 0) {
      const totalItems = filteredCategories.reduce((total, cat) => {
        const categoryItemCount = cat.subcategories.reduce((subTotal, subcat) => {
          return subTotal + filterItems(subcat.items).length + (subcat.subcategories?.reduce((nestedTotal, nestedSubcat) => 
            nestedTotal + filterItems(nestedSubcat.items).length, 0) || 0);
        }, 0);
        return total + categoryItemCount;
      }, 0);
      
      const totalResults = totalItems + filteredDataCenters.length;
      onResultsChange?.(totalResults);
    } else {
      onResultsChange?.(undefined);
    }
  }, [searchValue, filters, filteredCategories, filteredDataCenters, onResultsChange]);

  // Don't show home section if showHome is false (i.e., user is in a category)
  if (!showHome) {
    return (
      <div className="space-y-12 min-h-screen bg-white">
        <section className="py-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-3 text-slate-900">Categorias Principais</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              Selecione uma categoria para explorar nossos produtos e serviços especializados
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredCategories.map(category => (
              <ModernCategoryPage 
                key={category.id} 
                category={category} 
                onCategoryClick={() => handleCategoryClick(category.id)}
              />
            ))}
          </div>
        </section>

        {/* Always show search results when there's a search value */}
        {(searchValue || filters.categories.length > 0 || filters.types.length > 0 || filters.dataCenters.length > 0) && (
          <>
            {filteredDataCenters.length > 0 && (
              <section className="py-8">
                <div className="mb-6">
                  <h2 className="text-xl font-semibold mb-2 text-slate-900">Data Centers</h2>
                  <p className="text-slate-600 text-sm">
                    {filteredDataCenters.length} resultado(s) encontrado(s)
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                  {filteredDataCenters.map((dc, index) => (
                    <CompactDataCenterCard key={dc.id} dataCenter={dc} index={index} />
                  ))}
                </div>
              </section>
            )}
            
            {/* Show message when no results found */}
            {filteredCategories.length === 0 && filteredDataCenters.length === 0 && (
              <section className="py-16 text-center">
                <div className="max-w-md mx-auto">
                  <Search className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                  <h3 className="text-lg font-semibold text-slate-900 mb-2">Nenhum resultado encontrado</h3>
                  <p className="text-slate-600 mb-4">
                    Tente ajustar sua pesquisa ou filtros para encontrar o que procura.
                  </p>
                  <Button 
                    onClick={() => {
                      onSearchChange("");
                      onFiltersChange?.({ categories: [], types: [], dataCenters: [] });
                    }}
                    variant="outline"
                    className="border-slate-300 text-slate-700 hover:bg-slate-50"
                  >
                    Limpar busca
                  </Button>
                </div>
              </section>
            )}
          </>
        )}
      </div>
    );
  }

  return (
    <div className="space-y-16 min-h-screen bg-white">
      {/* Modern Hero Section */}
      {!searchValue && (
        <ModernHero 
          onExploreClick={() => {
            // Scroll to categories section
            const categoriesSection = document.getElementById('categories-section');
            categoriesSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          totalCategories={filteredCategories.length}
          totalDataCenters={filteredDataCenters.length}
        />
      )}

      {/* Modern Data Centers Section - Compact Version */}
      {!searchValue && (
        <section className="py-12 px-4 relative" id="datacenters-section">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/60 to-blue-50/40"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6 shadow-elegant">
                <Building2 className="h-4 w-4" />
                <span>Infraestrutura Global HostDime</span>
                <Sparkles className="h-3 w-3 animate-pulse" />
              </div>
              
              <h2 className="text-3xl md:text-4xl font-light text-slate-800 mb-4 tracking-tight">
                Nossos <span className="font-medium text-primary">Data Centers</span>
              </h2>
              
              <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light mb-6">
                Presença global com infraestrutura de classe mundial
              </p>
              
              <div className="flex items-center justify-center gap-6 text-sm text-slate-600 mb-8">
                <div className="flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-primary" />
                  <span>99.9% SLA</span>
                </div>
                <div className="flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-primary" />
                  <span>Tier IV</span>
                </div>
                <div className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-primary" />
                  <span>ISO 27001/20000/27701/9001</span>
                </div>
              </div>
            </div>
            
            {/* Interactive network visualization */}
            <DataCenterNetwork />
            
            {/* Responsive grid - properly spaced with fixed heights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
              {filteredDataCenters.map((dc, index) => (
                <div key={dc.id} className="h-full">
                  <CompactDataCenterCard dataCenter={dc} index={index} />
                </div>
              ))}
            </div>
            
            {/* Global reach indicator */}
            <div className="mt-8 text-center">
              <div className="inline-flex items-center gap-2 text-sm text-slate-600 bg-white/60 backdrop-blur-sm px-4 py-2 rounded-full border border-white/40">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Cobertura em {filteredDataCenters.length} localidades estratégicas</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Modern Categories Section */}
      <section className="py-20 px-4 relative" id="categories-section">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/8 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-secondary/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-secondary/10 text-secondary px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-elegant">
              <Package className="h-5 w-5" />
              <span>Soluções Especializadas</span>
            </div>
            
            <h2 className="text-4xl md:text-6xl font-light text-slate-800 mb-6 tracking-tight">
              Explore por <span className="font-medium text-primary">Categoria</span>
            </h2>
            
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-light">
              Descubra a solução perfeita para sua necessidade específica de infraestrutura
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <ModernCategoryPage 
                key={category.id}
                category={category}
                onCategoryClick={handleCategoryClick}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Show all when searching */}
      {searchValue && (
        <>
          {filteredDataCenters.length > 0 && (
            <section>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Data Centers</h2>
                <p className="text-slate-500 text-sm">
                  {filteredDataCenters.length} resultado(s) encontrado(s)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredDataCenters.map((dc, index) => (
                  <CompactDataCenterCard key={dc.id} dataCenter={dc} index={index} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};