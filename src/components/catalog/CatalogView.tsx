import { useState } from "react";
import { Category } from "@/types/catalog";
import { categories, dataCenters } from "@/data/catalog";
import { CompactDataCenterCard } from "./CompactDataCenterCard";
import { DataCenterNetwork } from "./DataCenterNetwork";
import { ModernCategoryPage } from "./ModernCategoryPage";
import { ModernCategoryDetail } from "./ModernCategoryDetail";
import { ModernHero } from "../layout/ModernHero";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, MapPin, Package, Sparkles, TrendingUp } from "lucide-react";

interface CatalogViewProps {
  searchValue: string;
  showHome?: boolean;
  onCategoryEnter?: () => void;
  onBackToHome?: () => void;
}

export const CatalogView = ({
  searchValue,
  showHome = true,
  onCategoryEnter,
  onBackToHome
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
    if (!searchValue) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.id.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.tags?.some((tag: string) => tag.toLowerCase().includes(searchValue.toLowerCase()))
    );
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
  const filteredDataCenters = filterItems(dataCenters);

  // Don't show home section if showHome is false (i.e., user is in a category)
  if (!showHome) {
    return (
      <div className="space-y-12 min-h-screen bg-background">
        <section className="py-8">
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Categorias Principais</h2>
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
  }

  return (
    <div className="space-y-16 min-h-screen bg-background">
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