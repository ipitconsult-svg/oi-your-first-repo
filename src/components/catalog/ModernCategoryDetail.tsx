import { Category } from "@/types/catalog";
import { Button } from "@/components/ui/button";
import { ArrowLeft, Eye, EyeOff, Package, Sparkles, TrendingUp, ChevronDown, Search } from "lucide-react";
import { ItemCard } from "./ItemCard";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ModernCategoryDetailProps {
  category: Category;
  searchValue: string;
  showPrices: boolean;
  onBackClick: () => void;
  onTogglePrices: () => void;
}

export const ModernCategoryDetail = ({ 
  category, 
  searchValue, 
  showPrices, 
  onBackClick, 
  onTogglePrices 
}: ModernCategoryDetailProps) => {
  const [expandedSubcategories, setExpandedSubcategories] = useState<string[]>([]);

  const filterItems = (items: any[]) => {
    if (!searchValue) return items;
    return items.filter(item => 
      item.name.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.id.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.description?.toLowerCase().includes(searchValue.toLowerCase()) ||
      item.tags?.some((tag: string) => tag.toLowerCase().includes(searchValue.toLowerCase()))
    );
  };

  const toggleSubcategory = (subcategoryId: string) => {
    setExpandedSubcategories(prev => 
      prev.includes(subcategoryId) 
        ? prev.filter(id => id !== subcategoryId)
        : [...prev, subcategoryId]
    );
  };

  const totalItems = category.subcategories.reduce((total, subcat) => {
    return total + subcat.items.length + (subcat.subcategories?.reduce((subTotal, nestedSubcat) => 
      subTotal + nestedSubcat.items.length, 0) || 0);
  }, 0);

  const filteredTotalItems = category.subcategories.reduce((total, subcat) => {
    return total + filterItems(subcat.items).length + (subcat.subcategories?.reduce((subTotal, nestedSubcat) => 
      subTotal + filterItems(nestedSubcat.items).length, 0) || 0);
  }, 0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50/50 to-white">
      {/* Modern Header */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full translate-y-32 -translate-x-32"></div>
        
        <div className="relative z-10 container mx-auto px-6 py-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="flex items-start gap-6">
              <Button 
                variant="outline" 
                onClick={onBackClick}
                className="bg-white/80 border-white/40 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Voltar
              </Button>
              
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-3 bg-primary/10 rounded-xl border border-primary/20">
                    <Package className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h1 className="text-4xl font-light text-slate-800 tracking-tight">
                      {category.name}
                    </h1>
                    <p className="text-slate-500 font-medium">ID: {category.id}</p>
                  </div>
                </div>
                
                <p className="text-lg text-slate-600 leading-relaxed max-w-3xl">
                  {category.description}
                </p>
                
                <div className="flex items-center gap-6 mt-4 text-sm">
                  <div className="flex items-center gap-2 text-slate-600">
                    <TrendingUp className="w-4 h-4 text-primary" />
                    <span>{totalItems} itens totais</span>
                  </div>
                  {searchValue && (
                    <div className="flex items-center gap-2 text-slate-600">
                      <Search className="w-4 h-4 text-secondary" />
                      <span>{filteredTotalItems} resultados</span>
                    </div>
                  )}
                  <div className="flex items-center gap-2 text-slate-600">
                    <Sparkles className="w-4 h-4 text-primary" />
                    <span>{category.subcategories.length} subcategorias</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Button 
                variant="outline" 
                onClick={onTogglePrices} 
                className="bg-white/80 border-white/40 hover:bg-white hover:scale-105 transition-all duration-300 shadow-lg"
              >
                {showPrices ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                {showPrices ? 'Ocultar Preços' : 'Mostrar Preços'}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Modern Content */}
      <div className="container mx-auto px-6 py-8">
        <div className="space-y-6">
          {category.subcategories.map((subcategory, index) => {
            const filteredItems = filterItems(subcategory.items);
            const hasNestedSubcategories = subcategory.subcategories && subcategory.subcategories.length > 0;
            const hasContent = filteredItems.length > 0 || hasNestedSubcategories;
            
            if (searchValue && !hasContent) return null;

            const isExpanded = expandedSubcategories.includes(subcategory.id);

            return (
              <div 
                key={subcategory.id}
                className="animate-slide-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <Collapsible open={isExpanded} onOpenChange={() => toggleSubcategory(subcategory.id)}>
                  <div className="bg-white/80 backdrop-blur-sm border border-white/60 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                    <CollapsibleTrigger className="w-full">
                      <div className="p-6 hover:bg-gradient-to-r hover:from-primary/5 hover:to-secondary/5 transition-all duration-300">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-4 text-left">
                            <div className="p-2 bg-primary/10 rounded-lg border border-primary/20">
                              <Package className="w-5 h-5 text-primary" />
                            </div>
                            <div>
                              <h3 className="text-xl font-semibold text-slate-800 mb-1">
                                {subcategory.name}
                                {filteredItems.length > 0 && (
                                  <span className="ml-3 text-sm bg-primary/10 text-primary px-3 py-1 rounded-full border border-primary/20">
                                    {filteredItems.length} itens
                                  </span>
                                )}
                              </h3>
                              {subcategory.description && (
                                <p className="text-slate-600 text-sm leading-relaxed">
                                  {subcategory.description}
                                </p>
                              )}
                            </div>
                          </div>
                          <ChevronDown className={`w-5 h-5 text-slate-400 transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`} />
                        </div>
                      </div>
                    </CollapsibleTrigger>
                    
                    <CollapsibleContent>
                      <div className="px-6 pb-6">
                        {filteredItems.length > 0 && (
                          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mb-6">
                            {filteredItems.map(item => (
                              <ItemCard key={item.id} item={item} showPrice={showPrices} />
                            ))}
                          </div>
                        )}
                        
                        {hasNestedSubcategories && (
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-slate-700 flex items-center gap-2">
                              <Sparkles className="w-4 h-4 text-primary" />
                              Subcategorias Aninhadas
                            </h4>
                            {subcategory.subcategories?.map((nestedSubcat) => {
                              const nestedFilteredItems = filterItems(nestedSubcat.items);
                              if (searchValue && nestedFilteredItems.length === 0) return null;
                              
                              return (
                                <div key={nestedSubcat.id} className="bg-slate-50/60 border border-slate-200/40 rounded-xl p-4">
                                  <div className="flex items-center gap-3 mb-4">
                                    <div className="p-1.5 bg-secondary/10 rounded-lg">
                                      <Package className="w-4 h-4 text-secondary" />
                                    </div>
                                    <div>
                                      <h5 className="font-medium text-slate-800">
                                        {nestedSubcat.name}
                                        {nestedFilteredItems.length > 0 && (
                                          <span className="ml-2 text-xs bg-secondary/10 text-secondary px-2 py-1 rounded-full">
                                            {nestedFilteredItems.length} itens
                                          </span>
                                        )}
                                      </h5>
                                      {nestedSubcat.description && (
                                        <p className="text-sm text-slate-600">{nestedSubcat.description}</p>
                                      )}
                                    </div>
                                  </div>
                                  
                                  {nestedFilteredItems.length > 0 && (
                                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-3">
                                      {nestedFilteredItems.map(item => (
                                        <ItemCard key={item.id} item={item} showPrice={showPrices} />
                                      ))}
                                    </div>
                                  )}
                                </div>
                              );
                            })}
                          </div>
                        )}
                      </div>
                    </CollapsibleContent>
                  </div>
                </Collapsible>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
