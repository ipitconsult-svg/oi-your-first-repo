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
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
          <div className="relative z-10 text-center py-16 px-4">
            <div className="max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
                Infraestrutura de <span className="text-primary-subtle">Classe Mundial</span>
              </h1>
              <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto animate-fade-in">
                Soluções completas de hosting e data center com tecnologia de ponta, 
                suporte 24/7 e infraestrutura robusta para o seu negócio crescer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-scale-in">
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                  <span className="text-white font-semibold">99.9% Uptime</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                  <span className="text-white font-semibold">Suporte 24/7</span>
                </div>
                <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-lg px-6 py-3">
                  <span className="text-white font-semibold">Múltiplas Localizações</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Quick Stats - Enhanced */}
      {!searchValue && (
        <section className="relative">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
            <div className="group bg-gradient-card border rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {filteredDataCenters.length}
              </div>
              <div className="text-sm text-muted-foreground font-medium">Data Centers</div>
            </div>
            <div className="group bg-gradient-card border rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                {filteredCategories.length}
              </div>
              <div className="text-sm text-muted-foreground font-medium">Categorias</div>
            </div>
            <div className="group bg-gradient-card border rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                50+
              </div>
              <div className="text-sm text-muted-foreground font-medium">Serviços</div>
            </div>
            <div className="group bg-gradient-card border rounded-xl p-6 text-center hover:shadow-elegant transition-all duration-300 hover:-translate-y-1">
              <div className="text-3xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">
                24/7
              </div>
              <div className="text-sm text-muted-foreground font-medium">Suporte</div>
            </div>
          </div>
        </section>
      )}

      {/* Data Centers Section - More Prominent */}
      {!searchValue && (
        <section className="relative">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center gap-3 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
                <Building2 className="h-4 w-4" />
                Infraestrutura Global
              </div>
              <h2 className="text-3xl md:text-4xl font-bold mb-4">Nossos Data Centers</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Infraestrutura de ponta em localidades estratégicas ao redor do mundo, 
                garantindo baixa latência e alta disponibilidade para seus projetos.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              {filteredDataCenters.map(dc => (
                <div key={dc.id} className="group animate-fade-in">
                  <DataCenterCard dataCenter={dc} />
                </div>
              ))}
            </div>

            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-sm text-muted-foreground bg-muted/50 px-4 py-2 rounded-full">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                Todos os data centers operando normalmente
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Categories Section - Enhanced */}
      <section className="relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Categorias Principais</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Explore nossa gama completa de produtos e serviços especializados, 
              desenvolvidos para atender às necessidades específicas do seu negócio.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredCategories.map((category, index) => (
              <div key={category.id} className="animate-fade-in" style={{ animationDelay: `${index * 100}ms` }}>
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