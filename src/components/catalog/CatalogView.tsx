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
export const CatalogView = ({
  searchValue
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
    }
  };
  const handleBackClick = () => {
    setSelectedCategory(null);
    setBreadcrumb([]);
  };
  const filterItems = (items: any[]) => {
    if (!searchValue) return items;
    return items.filter(item => item.name.toLowerCase().includes(searchValue.toLowerCase()) || item.id.toLowerCase().includes(searchValue.toLowerCase()) || item.description?.toLowerCase().includes(searchValue.toLowerCase()) || item.tags?.some((tag: string) => tag.toLowerCase().includes(searchValue.toLowerCase())));
  };
  if (selectedCategory) {
    const category = categories.find(c => c.id === selectedCategory);
    if (!category) return null;
    return <div className="space-y-6">
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
            return <div className="space-y-4">
                  {/* Render items if they exist - use compact cards for better space usage */}
                  {filteredItems.length > 0 && <div className="space-y-3">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                        {filteredItems.map(item => <ItemCard key={item.id} item={item} showPrice={showPrices} />)}
                      </div>
                    </div>}
                  
                  {/* Render nested subcategories with accordion for space efficiency */}
                  {subcat.subcategories && subcat.subcategories.length > 0 && <Accordion type="single" collapsible className="space-y-2">
                      {subcat.subcategories.map((nestedSubcat: any) => {
                  const nestedFilteredItems = filterItems(nestedSubcat.items);
                  const hasContent = nestedFilteredItems.length > 0 || nestedSubcat.subcategories && nestedSubcat.subcategories.length > 0;
                  if (searchValue && !hasContent) return null;
                  return <AccordionItem key={nestedSubcat.id} value={nestedSubcat.id} className="border rounded-lg">
                            <AccordionTrigger className="text-left hover:no-underline px-4 py-3">
                              <div className="text-left">
                                <h4 className={`font-medium ${level > 0 ? 'text-sm' : 'text-base'}`}>
                                  {nestedSubcat.name}
                                  {nestedFilteredItems.length > 0 && <span className="ml-2 text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">
                                      {nestedFilteredItems.length} itens
                                    </span>}
                                </h4>
                                {nestedSubcat.description && <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                                    {nestedSubcat.description}
                                  </p>}
                              </div>
                            </AccordionTrigger>
                            <AccordionContent className="px-4 pb-3">
                              {renderSubcategoryContent(nestedSubcat, level + 1)}
                            </AccordionContent>
                          </AccordionItem>;
                })}
                    </Accordion>}
                </div>;
          };
          const filteredItems = filterItems(subcategory.items);
          const hasNestedSubcategories = subcategory.subcategories && subcategory.subcategories.length > 0;
          const hasContent = filteredItems.length > 0 || hasNestedSubcategories;
          if (searchValue && !hasContent) return null;
          return <AccordionItem key={subcategory.id} value={subcategory.id} className="border rounded-lg">
                <AccordionTrigger className="text-left hover:no-underline px-6 py-4">
                  <div className="text-left">
                    <h3 className="text-lg font-semibold">
                      {subcategory.name}
                      {filteredItems.length > 0 && <span className="ml-3 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full">
                          {filteredItems.length} itens
                        </span>}
                    </h3>
                    {subcategory.description && <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                        {subcategory.description}
                      </p>}
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4">
                  <div className="pt-2">
                    {renderSubcategoryContent(subcategory)}
                  </div>
                </AccordionContent>
              </AccordionItem>;
        })}
        </Accordion>
      </div>;
  }
  const filteredCategories = filterItems(categories);
  const filteredDataCenters = filterItems(dataCenters);
  return <div className="space-y-12">
      {/* Quick Stats */}
      {!searchValue && <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{filteredDataCenters.length}</div>
            <div className="text-sm text-muted-foreground">Data Centers</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">{filteredCategories.length}</div>
            <div className="text-sm text-muted-foreground">Categorias</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">50+</div>
            <div className="text-sm text-muted-foreground">Serviços</div>
          </div>
          <div className="bg-card border rounded-lg p-4 text-center">
            <div className="text-2xl font-bold text-primary">24/7</div>
            <div className="text-sm text-muted-foreground">Suporte</div>
          </div>
        </div>}

      {/* Categories Section - Simplified Grid */}
      <section>
        <div className="mb-8 text-center">
          <h2 className="text-2xl font-bold mb-3">Categorias Principais</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selecione uma categoria para explorar nossos produtos e serviços especializados
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredCategories.map(category => <CategoryCard key={category.id} category={category} onCategoryClick={handleCategoryClick} />)}
        </div>
      </section>

      {/* Data Centers Section - Collapsible */}
      {!searchValue && <section>
          <Accordion type="single" collapsible className="w-full max-w-4xl mx-auto">
            <AccordionItem value="data-centers" className="border rounded-lg">
              
              <AccordionContent className="px-6 pb-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                  {filteredDataCenters.map(dc => <DataCenterCard key={dc.id} dataCenter={dc} />)}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>}

      {/* Show all when searching */}
      {searchValue && <>
          {filteredDataCenters.length > 0 && <section>
              <div className="mb-6">
                <h2 className="text-xl font-semibold mb-2">Data Centers</h2>
                <p className="text-muted-foreground text-sm">
                  {filteredDataCenters.length} resultado(s) encontrado(s)
                </p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-4">
                {filteredDataCenters.map(dc => <DataCenterCard key={dc.id} dataCenter={dc} />)}
              </div>
            </section>}
        </>}
    </div>;
};