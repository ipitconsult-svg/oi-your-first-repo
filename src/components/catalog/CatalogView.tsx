import { useState } from "react";
import { Category } from "@/types/catalog";
import { categories, dataCenters } from "@/data/catalog";
import { CategoryCard } from "./CategoryCard";
import { DataCenterCard } from "./DataCenterCard";
import { ItemCard } from "./ItemCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Eye, EyeOff, MapPin, Package } from "lucide-react";
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
      <div className="space-y-6">
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <Button variant="outline" onClick={handleBackClick}>
              <ArrowLeft className="h-4 w-4 mr-2" />
              Voltar
            </Button>
            <div>
              <h2 className="text-2xl font-bold">{category.name}</h2>
              <p className="text-muted-foreground">{category.description}</p>
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
                          <AccordionItem key={nestedSubcat.id} value={nestedSubcat.id} className="border rounded-lg">
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
                                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
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
              <AccordionItem key={subcategory.id} value={subcategory.id} className="border rounded-lg">
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
                      <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
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
    );
  }

  const filteredCategories = filterItems(categories);
  const filteredDataCenters = filterItems(dataCenters);

  // Don't show home section if showHome is false (i.e., user is in a category)
  if (!showHome) {
    return (
      <div className="space-y-12">
        <section>
          <div className="mb-8 text-center">
            <h2 className="text-2xl font-bold mb-3">Categorias Principais</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
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
                  <p className="text-muted-foreground text-sm">
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
    <div className="space-y-16">
      {/* Hero Section - Modern with subtle background */}
      {!searchValue && (
        <section className="relative py-20 px-4 overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0">
            <div className="absolute inset-0 bg-gradient-hero opacity-60"></div>
            <div className="absolute top-20 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/3 rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 max-w-4xl mx-auto text-center">
            <div className="animate-slide-up">
              <h1 className="text-5xl md:text-7xl font-light text-foreground mb-8 tracking-tight leading-tight">
                Infraestrutura
                <br />
                <span className="font-medium text-primary">Simplificada</span>
              </h1>
            </div>
            
            <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
              <p className="text-lg md:text-xl text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed font-light">
                Soluções completas de data center e cloud com tecnologia de ponta
              </p>
            </div>
          </div>
        </section>
      )}

      {/* Stats - Enhanced Visual Hierarchy */}
      {!searchValue && (
        <section className="relative px-4 mb-20 -mt-8">
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { value: filteredDataCenters.length, label: "Data Centers", gradient: "from-blue-500/20 to-blue-600/10" },
                { value: filteredCategories.length, label: "Categorias", gradient: "from-green-500/20 to-green-600/10" },
                { value: "50+", label: "Serviços", gradient: "from-purple-500/20 to-purple-600/10" },
                { value: "24/7", label: "Suporte", gradient: "from-orange-500/20 to-orange-600/10" }
              ].map((stat, index) => (
                <div 
                  key={stat.label}
                  className={`relative bg-white/95 backdrop-blur-xl border border-white/60 rounded-2xl p-6 text-center hover:bg-white hover:shadow-float hover:border-white/80 transition-all duration-500 hover:-translate-y-3 animate-slide-up bg-gradient-to-br ${stat.gradient}`}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-3xl md:text-4xl font-light text-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Data Centers - Enhanced Visual Design */}
      {!searchValue && (
        <section className="py-20 px-4 relative">
          {/* Enhanced section background */}
          <div className="absolute inset-0 bg-gradient-to-r from-slate-100/80 to-white/60"></div>
          
          <div className="relative z-10 max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Building2 className="h-4 w-4" />
                <span>Infraestrutura Global</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
                Nossos Data Centers
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
                Infraestrutura global de alta performance
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {filteredDataCenters.map((dc, index) => (
                <div 
                  key={dc.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="group relative bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 hover:bg-white hover:shadow-float hover:border-white/80 transition-all duration-500 hover:-translate-y-3">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/8 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-start justify-between mb-6">
                        <div>
                          <h3 className="text-xl font-medium text-foreground mb-2">{dc.name}</h3>
                          <div className="flex items-center gap-2 text-muted-foreground">
                            <MapPin className="h-4 w-4 text-primary" />
                            <span className="text-sm">{dc.location}</span>
                          </div>
                        </div>
                        <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      </div>
                      
                      <p className="text-sm text-muted-foreground mb-8 leading-relaxed">
                        {dc.description}
                      </p>
                      
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center p-4 bg-gradient-to-br from-blue-100/80 to-blue-200/40 rounded-2xl border border-blue-200/30">
                          <div className="text-lg font-medium text-primary">99.9%</div>
                          <div className="text-xs text-muted-foreground font-medium">Uptime</div>
                        </div>
                        <div className="text-center p-4 bg-gradient-to-br from-green-100/80 to-green-200/40 rounded-2xl border border-green-200/30">
                          <div className="text-lg font-medium text-primary">&lt;2ms</div>
                          <div className="text-xs text-muted-foreground font-medium">Latência</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Categories - Enhanced Grid with Visual Interest */}
      <section className="py-20 px-4 relative">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-10 w-80 h-80 bg-blue-500/3 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-light text-foreground mb-6 tracking-tight">
              Explore por Categoria
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto font-light">
              Encontre a solução ideal para seu projeto
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <div 
                key={category.id} 
                className="animate-slide-up cursor-pointer group" 
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => handleCategoryClick(category.id)}
              >
                <div className="relative h-full bg-white/95 backdrop-blur-xl border border-white/60 rounded-3xl p-8 hover:bg-white hover:shadow-float hover:border-white/80 transition-all duration-500 hover:-translate-y-3">
                  {/* Enhanced gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/12 via-transparent to-blue-500/8 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  
                  <div className="relative z-10 text-center">
                    <div className="w-16 h-16 bg-gradient-to-br from-primary/25 to-primary/15 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary/20">
                      <Package className="h-8 w-8 text-primary" />
                    </div>
                    
                    <h3 className="text-xl font-medium text-foreground mb-4 group-hover:text-primary transition-colors duration-300">
                      {category.name}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-6 leading-relaxed line-clamp-3">
                      {category.description}
                    </p>
                    
                    <div className="flex justify-center gap-4">
                      <div className="text-center px-4 py-2 bg-gradient-to-r from-primary/15 to-primary/10 rounded-xl border border-primary/20">
                        <div className="text-lg font-medium text-primary">
                          {category.subcategories.reduce((total, subcat) => {
                            const subcatItems = subcat.items.length;
                            const nestedItems = subcat.subcategories ? 
                              subcat.subcategories.reduce((nestedTotal, nested) => nestedTotal + nested.items.length, 0) : 0;
                            return total + subcatItems + nestedItems;
                          }, 0)}
                        </div>
                        <div className="text-xs text-muted-foreground font-medium">itens disponíveis</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                <p className="text-muted-foreground text-sm">
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