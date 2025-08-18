import { useState } from "react";
import { Category } from "@/types/catalog";
import { categories, dataCenters } from "@/data/catalog";
import { CategoryCard } from "./CategoryCard";
import { DataCenterCard } from "./DataCenterCard";
import { ItemCard } from "./ItemCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Building2, Eye, EyeOff } from "lucide-react";
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
      {/* Hero Section */}
      {!searchValue && (
        <section className="relative overflow-hidden -mx-4 px-4">
          <div className="absolute inset-0 bg-gradient-hero"></div>
          
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full animate-float"></div>
            <div className="absolute top-40 right-20 w-2 h-2 bg-white/30 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
            <div className="absolute bottom-20 left-1/3 w-3 h-3 bg-white/15 rounded-full animate-float" style={{animationDelay: '2s'}}></div>
            <div className="absolute top-1/2 right-10 w-1 h-1 bg-white/40 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
          </div>
          
          <div className="relative z-10 text-center py-20 px-4">
            <div className="max-w-5xl mx-auto">
              <div className="animate-slide-up">
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tight">
                  Infraestrutura de{" "}
                  <span className="relative">
                    <span className="bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                      Classe Mundial
                    </span>
                    <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-white/0 via-white/60 to-white/0 rounded-full"></div>
                  </span>
                </h1>
              </div>
              
              <div className="animate-slide-up" style={{animationDelay: '0.2s'}}>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                  Soluções completas de hosting e data center com tecnologia de ponta,{" "}
                  <span className="font-medium">suporte 24/7</span> e infraestrutura robusta para o seu negócio crescer.
                </p>
              </div>
              
              <div className="animate-scale-in" style={{animationDelay: '0.4s'}}>
                <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                  <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-8 py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                      <span className="text-white font-semibold text-lg">99.9% Uptime</span>
                    </div>
                  </div>
                  <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-8 py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-blue-400 rounded-full animate-pulse" style={{animationDelay: '0.5s'}}></div>
                      <span className="text-white font-semibold text-lg">Suporte 24/7</span>
                    </div>
                  </div>
                  <div className="group bg-white/10 backdrop-blur-lg border border-white/20 rounded-xl px-8 py-4 hover:bg-white/20 transition-all duration-300 hover:scale-105">
                    <div className="flex items-center gap-3">
                      <div className="w-3 h-3 bg-orange-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
                      <span className="text-white font-semibold text-lg">Global</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Stats - Enhanced */}
      {!searchValue && (
        <section className="relative -mt-12 z-20">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              { value: filteredDataCenters.length, label: "Data Centers", delay: "0ms" },
              { value: filteredCategories.length, label: "Categorias", delay: "100ms" },
              { value: "50+", label: "Serviços", delay: "200ms" },
              { value: "24/7", label: "Suporte", delay: "300ms" }
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="group bg-white/95 backdrop-blur-lg border border-white/20 rounded-2xl p-6 text-center hover:shadow-float transition-all duration-500 hover:-translate-y-2 hover:scale-105 animate-slide-up"
                style={{ animationDelay: stat.delay }}
              >
                <div className="relative">
                  <div className="text-3xl md:text-4xl font-bold text-primary mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground uppercase tracking-wide">
                    {stat.label}
                  </div>
                  
                  {/* Floating animation elements */}
                  <div className="absolute -top-2 -right-2 w-2 h-2 bg-primary/30 rounded-full animate-float opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <div className="absolute -bottom-1 -left-1 w-1 h-1 bg-primary/40 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity" style={{animationDelay: '0.5s'}}></div>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Data Centers Section - More Prominent */}
      {!searchValue && (
        <section className="relative py-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16 animate-slide-up">
              <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-6 py-3 rounded-full text-sm font-medium mb-6 hover:bg-primary/20 transition-colors">
                <Building2 className="h-5 w-5 animate-float" />
                <span className="font-semibold">Infraestrutura Global</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                Nossos Data Centers
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Infraestrutura de ponta em localidades estratégicas ao redor do mundo,{" "}
                <span className="font-medium text-foreground">garantindo baixa latência</span> e{" "}
                <span className="font-medium text-foreground">alta disponibilidade</span> para seus projetos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {filteredDataCenters.map((dc, index) => (
                <div 
                  key={dc.id} 
                  className="animate-slide-up"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <DataCenterCard dataCenter={dc} />
                </div>
              ))}
            </div>

            <div className="text-center animate-slide-up" style={{animationDelay: '0.6s'}}>
              <div className="inline-flex items-center gap-3 text-sm text-muted-foreground bg-muted/30 px-6 py-3 rounded-full border border-green-200/50">
                <div className="relative">
                  <span className="w-3 h-3 bg-green-500 rounded-full block animate-ping absolute"></span>
                  <span className="w-3 h-3 bg-green-500 rounded-full block relative"></span>
                </div>
                <span className="font-medium">Todos os data centers operando normalmente</span>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Section - Enhanced */}
      <section className="relative py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Categorias Principais
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore nossa gama completa de produtos e serviços especializados,{" "}
              <span className="font-medium text-foreground">desenvolvidos para atender</span> às necessidades específicas do seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <div 
                key={category.id} 
                className="animate-slide-up" 
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <CategoryCard category={category} onCategoryClick={handleCategoryClick} />
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