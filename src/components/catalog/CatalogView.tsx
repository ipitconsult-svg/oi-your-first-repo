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
}

export const CatalogView = ({ searchValue }: CatalogViewProps) => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [breadcrumb, setBreadcrumb] = useState<{ id: string; name: string }[]>([]);
  const [showPrices, setShowPrices] = useState(false);

  const handleCategoryClick = (categoryId: string) => {
    const category = categories.find(c => c.id === categoryId);
    if (category) {
      setSelectedCategory(categoryId);
      setBreadcrumb([{ id: categoryId, name: category.name }]);
    }
  };

  const handleBackClick = () => {
    setSelectedCategory(null);
    setBreadcrumb([]);
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
          <Button
            variant="outline"
            onClick={() => setShowPrices(!showPrices)}
            className="flex items-center gap-2"
          >
            {showPrices ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
            {showPrices ? 'Ocultar Preços' : 'Mostrar Preços'}
          </Button>
        </div>

        <Accordion type="single" collapsible className="space-y-4">
          {category.subcategories.map((subcategory) => {
            const renderSubcategoryContent = (subcat: any) => {
              const filteredItems = filterItems(subcat.items);
              
              return (
                <div className="space-y-6">
                  {/* Render items if they exist */}
                  {filteredItems.length > 0 && (
                    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                      {filteredItems.map((item) => (
                        <ItemCard key={item.id} item={item} showPrice={showPrices} />
                      ))}
                    </div>
                  )}
                  
                  {/* Render nested subcategories if they exist */}
                  {subcat.subcategories && subcat.subcategories.length > 0 && (
                    <Accordion type="single" collapsible className="space-y-3">
                      {subcat.subcategories.map((nestedSubcat: any) => {
                        const nestedFilteredItems = filterItems(nestedSubcat.items);
                        if (searchValue && nestedFilteredItems.length === 0 && (!nestedSubcat.subcategories || nestedSubcat.subcategories.length === 0)) return null;

                        return (
                          <AccordionItem key={nestedSubcat.id} value={nestedSubcat.id}>
                            <AccordionTrigger className="text-left hover:no-underline pl-4">
                              <div>
                                <h4 className="text-base font-medium">{nestedSubcat.name}</h4>
                                <p className="text-sm text-muted-foreground">{nestedSubcat.description}</p>
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="pl-4">
                              {renderSubcategoryContent(nestedSubcat)}
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
            
            if (searchValue && filteredItems.length === 0 && !hasNestedSubcategories) return null;

            return (
              <AccordionItem key={subcategory.id} value={subcategory.id}>
                <AccordionTrigger className="text-left hover:no-underline">
                  <div>
                    <h3 className="text-lg font-semibold">{subcategory.name}</h3>
                    <p className="text-sm text-muted-foreground">{subcategory.description}</p>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="pt-4">
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

  return (
    <div className="space-y-8">
      {/* Data Centers Section */}
      <section>
        <div className="flex items-center gap-3 mb-6">
          <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
            <Building2 className="h-4 w-4 text-primary-foreground" />
          </div>
          <div>
            <h2 className="text-2xl font-bold">Data Centers</h2>
            <p className="text-muted-foreground">Localizações estratégicas para sua infraestrutura</p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredDataCenters.map((dc) => (
            <DataCenterCard key={dc.id} dataCenter={dc} />
          ))}
        </div>
      </section>

      {/* Categories Section */}
      <section>
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-2">Categorias de Serviços</h2>
          <p className="text-muted-foreground">Explore nosso catálogo completo de soluções</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {filteredCategories.map((category) => (
            <CategoryCard
              key={category.id}
              category={category}
              onCategoryClick={handleCategoryClick}
            />
          ))}
        </div>
      </section>
    </div>
  );
};