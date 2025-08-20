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

  // Função para filtrar categorias
  const filterCategories = (categoriesList: any[]) => {
    let filteredItems = categoriesList;

    // Filtro por busca textual
    if (searchValue) {
      filteredItems = filteredItems.filter(category => 
        category.name.toLowerCase().includes(searchValue.toLowerCase()) ||
        category.description?.toLowerCase().includes(searchValue.toLowerCase()) ||
        category.subcategories?.some((subcat: any) => 
          subcat.name.toLowerCase().includes(searchValue.toLowerCase()) ||
          subcat.items?.some((item: any) => 
            item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
            item.description?.toLowerCase().includes(searchValue.toLowerCase())
          )
        )
      );
    }

    // Filtros por categoria (nome exato)
    if (filters.categories.length > 0) {
      filteredItems = filteredItems.filter(category => 
        filters.categories.includes(category.name)
      );
    }

    return filteredItems;
  };

  // Função para filtrar data centers
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

  // Aplicar filtros
  const filteredCategories = filterCategories(categories);
  const filteredDataCenters = filterDataCenters(dataCenters);

  // Calcular total de resultados
  useEffect(() => {
    if (searchValue || filters.categories.length > 0 || filters.types.length > 0 || filters.dataCenters.length > 0) {
      // Contar itens dentro das categorias filtradas
      const totalItems = filteredCategories.reduce((total, cat) => {
        const categoryItemCount = cat.subcategories?.reduce((subTotal: number, subcat: any) => {
          const itemCount = subcat.items?.length || 0;
          const nestedItemCount = subcat.subcategories?.reduce((nestedTotal: number, nestedSubcat: any) => 
            nestedTotal + (nestedSubcat.items?.length || 0), 0) || 0;
          return subTotal + itemCount + nestedItemCount;
        }, 0) || 0;
        return total + categoryItemCount;
      }, 0);
      
      const totalResults = totalItems + filteredDataCenters.length + filteredCategories.length;
      onResultsChange?.(totalResults);
    } else {
      onResultsChange?.(undefined);
    }
  }, [searchValue, filters, filteredCategories, filteredDataCenters, onResultsChange]);

  // Se uma categoria específica está selecionada, mostrar detalhes
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

  // Verificar se há busca ativa ou filtros ativos
  const hasActiveSearch = searchValue || filters.categories.length > 0 || filters.types.length > 0 || filters.dataCenters.length > 0;
  const hasResults = filteredCategories.length > 0 || filteredDataCenters.length > 0;

  return (
    <div className="space-y-16 min-h-screen bg-white">
      {/* Hero Section - só mostra se não há busca ativa */}
      {!hasActiveSearch && showHome && (
        <ModernHero 
          onExploreClick={() => {
            const categoriesSection = document.getElementById('categories-section');
            categoriesSection?.scrollIntoView({ behavior: 'smooth' });
          }}
          totalCategories={categories.length}
          totalDataCenters={dataCenters.length}
        />
      )}

      {/* Data Centers Section - só mostra se não há busca ativa */}
      {!hasActiveSearch && showHome && (
        <section className="py-12 px-4 relative" id="datacenters-section">
          <div className="absolute inset-0 bg-gradient-to-r from-slate-50/60 to-blue-50/40"></div>
          
          <div className="relative z-10 max-w-7xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="h-4 w-4" />
                <span>Infraestrutura Global HostDime</span>
                <Sparkles className="h-3 w-3 animate-pulse" />
              </div>
              
              <h2 className="text-3xl font-bold text-slate-900 mb-4">
                Rede Global de <span className="text-orange-600">Data Centers</span>
              </h2>
              <p className="text-slate-600 text-lg max-w-3xl mx-auto mb-8">
                Conecte-se à nossa infraestrutura de alto desempenho distribuída estrategicamente ao redor do mundo
              </p>
              
              <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-600 mb-8">
                <span className="flex items-center gap-1">
                  <MapPin className="h-4 w-4 text-orange-500" />
                  <span>Cobertura em {dataCenters.length} localidades estratégicas</span>
                </span>
                <span className="flex items-center gap-1">
                  <TrendingUp className="h-4 w-4 text-blue-500" />
                  <span>99.9% de uptime garantido</span>
                </span>
              </div>
            </div>

            <DataCenterNetwork />
            
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-12">
              {dataCenters.map((dc, index) => (
                <CompactDataCenterCard key={dc.id} dataCenter={dc} index={index} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories Section */}
      <section className="py-12" id="categories-section">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Package className="h-4 w-4" />
              <span>Catálogo Completo</span>
            </div>
            
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              {hasActiveSearch ? 'Resultados da Busca' : 'Explore Nossas Soluções'}
            </h2>
            <p className="text-slate-600 text-lg max-w-3xl mx-auto">
              {hasActiveSearch 
                ? `Encontramos ${filteredCategories.length + filteredDataCenters.length} resultado(s) para sua pesquisa`
                : 'Descubra a solução perfeita para suas necessidades de infraestrutura digital'
              }
            </p>
          </div>

          {/* Categories Grid */}
          {filteredCategories.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {filteredCategories.map(category => (
                <ModernCategoryPage 
                  key={category.id} 
                  category={category} 
                  onCategoryClick={() => handleCategoryClick(category.id)}
                />
              ))}
            </div>
          )}

          {/* Data Centers Results (quando há busca) */}
          {hasActiveSearch && filteredDataCenters.length > 0 && (
            <div className="mb-12">
              <h3 className="text-xl font-semibold text-slate-900 mb-6">Data Centers</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                {filteredDataCenters.map((dc, index) => (
                  <CompactDataCenterCard key={dc.id} dataCenter={dc} index={index} />
                ))}
              </div>
            </div>
          )}

          {/* No Results Message */}
          {hasActiveSearch && !hasResults && (
            <div className="text-center py-16">
              <Search className="h-16 w-16 text-slate-300 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-slate-900 mb-2">Nenhum resultado encontrado</h3>
              <p className="text-slate-600 mb-6 max-w-md mx-auto">
                Não encontramos resultados para "{searchValue}". Tente ajustar sua pesquisa ou filtros.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <Button 
                  onClick={() => onSearchChange?.("")}
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Limpar busca
                </Button>
                <Button 
                  onClick={() => onFiltersChange?.({ categories: [], types: [], dataCenters: [] })}
                  variant="outline"
                  className="border-slate-300 text-slate-700 hover:bg-slate-50"
                >
                  Limpar filtros
                </Button>
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};
