import { useState } from "react";
import { Category } from "@/types/catalog";
import { categories, dataCenters } from "@/data/catalog";
import { CategoryCard } from "./CategoryCard";
import { DataCenterCard } from "./DataCenterCard";
import { ItemCard } from "./ItemCard";
import { ModernCategoryCard } from "./ModernCategoryCard";
import { ModernDataCenterCard } from "./ModernDataCenterCard";
import { CompactDataCenterCard } from "./CompactDataCenterCard";
import { DataCenterNetwork } from "./DataCenterNetwork";
import { ModernHero } from "../layout/ModernHero";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Eye, EyeOff, MapPin, Package, Sparkles, TrendingUp } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

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
      <div className="min-h-screen bg-background">
        <div className="space-y-6 py-8">
          <div className="flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              <Button variant="outline" onClick={handleBackClick}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              <div>
                <h2 className="text-2xl font-bold">{category.name}</h2>
                <p className="text-slate-600">{category.description}</p>
              </div>
            </div>
            <Button variant="outline" onClick={() => setShowPrices(!showPrices)} className="flex items-center gap-2">
              {showPrices ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showPrices ? 'Ocultar Preços' : 'Mostrar Preços'}
            </Button>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {category.subcategories.map(subcategory => {
              const renderSubcategoryContent = (subcat: any, level: number = 0) => {
                const filteredItems = filterItems(subcat.items);
                return (
                  <div className="space-y-4">
                    {filteredItems.length > 0 && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                          {filteredItems.map(item => (
                            <ItemCard key={item.id} item={item} showPrice={showPrices} />
                          ))}
                        </div>
                      </div>
                    )}
                    
                    {subcat.subcategories && subcat.subcategories.length > 0 && (
                      <Accordion type="single" collapsible className="space-y-2">
                        {subcat.subcategories.map((nestedSubcat: any) => {
                          const nestedFilteredItems = filterItems(nestedSubcat.items);
                          const hasContent = nestedFilteredItems.length > 0 || (nestedSubcat.subcategories && nestedSubcat.subcategories.length > 0);
                          if (searchValue && !hasContent) return null;
                          
                          return (
                            <AccordionItem key={nestedSubcat.id} value={nestedSubcat.id} className="border rounded-lg bg-white/80 backdrop-blur-sm">
                              <AccordionTrigger className="text-left hover:no-underline px-4 py-3">
                                <div className="text-left">
                                  <h4 className={`font-medium ${level > 0 ? 'text-sm' : 'text-base'}`}>
                                    {nestedSubcat.name}
                                    {nestedFilteredItems.length > 0 && (
                                      <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                        {nestedFilteredItems.length} itens
                                      </span>
                                    )}
                                  </h4>
                                  {nestedSubcat.description && (
                                    <p className="text-xs text-slate-500 mt-1 line-clamp-2">
                                      {nestedSubcat.description}
                                    </p>
                                  )}
                                </div>
                              </AccordionTrigger>
                              <AccordionContent className="px-4 pb-3">
                                {renderSubcategoryContent(nestedSubcat, level + 1)}
                              </AccordionContent>
                            </AccordionItem>
                          );
                        })}
                      </Accordion>
                    )}
                  </div>
                );
              };

              const filteredItems = filterItems(subcategory.items);
              const hasNestedSubcategories = subcategory.subcategories && subcategory.subcategories.length > 0;
              const hasContent = filteredItems.length > 0 || hasNestedSubcategories;
              if (searchValue && !hasContent) return null;

              return (
                <AccordionItem key={subcategory.id} value={subcategory.id} className="border rounded-lg bg-white/90 backdrop-blur-sm shadow-card">
                  <AccordionTrigger className="text-left hover:no-underline px-6 py-4">
                    <div className="text-left">
                      <h3 className="text-lg font-semibold">
                        {subcategory.name}
                        {filteredItems.length > 0 && (
                          <span className="ml-3 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                            {filteredItems.length} itens
                          </span>
                        )}
                      </h3>
                      {subcategory.description && (
                        <p className="text-sm text-slate-500 mt-1 line-clamp-2">
                          {subcategory.description}
                        </p>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="px-6 pb-4">
                    <div className="pt-2">
                      {renderSubcategoryContent(subcategory)}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
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
              <CategoryCard key={category.id} category={category} onCategoryClick={handleCategoryClick} />
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
                  {filteredDataCenters.map(dc => (
                    <DataCenterCard key={dc.id} dataCenter={dc} />
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
              <ModernCategoryCard 
                key={category.id}
                category={category}
                onCategoryClick={handleCategoryClick}
                index={index}
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
                {filteredDataCenters.map(dc => (
                  <DataCenterCard key={dc.id} dataCenter={dc} />
                ))}
              </div>
            </section>
          )}
        </>
      )}
    </div>
  );
};