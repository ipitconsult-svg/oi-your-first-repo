import { Category } from "@/types/catalog";
import { ChevronRight, Server, Package, Sparkles, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ModernCategoryPageProps {
  category: Category;
  onCategoryClick: (categoryId: string) => void;
}

const categoryIcons = {
  "1": Server,
  "2": Package,
  default: Sparkles
};

export const ModernCategoryPage = ({ category, onCategoryClick }: ModernCategoryPageProps) => {
  const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons] || categoryIcons.default;
  
  const totalItems = category.subcategories.reduce((total, subcat) => {
    return total + subcat.items.length + (subcat.subcategories?.reduce((subTotal, nestedSubcat) => 
      subTotal + nestedSubcat.items.length, 0) || 0);
  }, 0);

  return (
    <div 
      className="group animate-slide-up cursor-pointer"
      onClick={() => onCategoryClick(category.id)}
    >
      <div className="relative bg-gradient-to-br from-white/80 to-slate-50/60 backdrop-blur-sm border border-white/60 rounded-2xl p-6 hover:shadow-2xl hover:scale-[1.02] transition-all duration-500 hover:border-primary/30 overflow-hidden h-full">
        {/* Background decoration */}
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full -translate-y-6 translate-x-6 group-hover:scale-150 transition-transform duration-700"></div>
        <div className="absolute bottom-0 left-0 w-20 h-20 bg-secondary/5 rounded-full translate-y-4 -translate-x-4 group-hover:scale-125 transition-transform duration-700"></div>
        
        {/* Header */}
        <div className="relative z-10 mb-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <div className="p-2.5 bg-primary/10 rounded-lg border border-primary/20 group-hover:bg-primary/20 transition-colors duration-300 flex-shrink-0">
                <IconComponent className="w-5 h-5 text-primary group-hover:scale-110 transition-transform duration-300" />
              </div>
              <div className="flex-1 min-w-0">
                <h2 className="text-lg font-bold text-slate-800 group-hover:text-primary transition-colors duration-300 leading-tight">
                  {category.name}
                </h2>
                <p className="text-xs text-slate-500 font-medium">ID: {category.id}</p>
              </div>
            </div>
            
            <div className="flex items-center gap-1.5 text-primary bg-primary/10 px-2.5 py-1 rounded-full border border-primary/20 group-hover:bg-primary/20 transition-colors flex-shrink-0 ml-2">
              <TrendingUp className="w-3 h-3" />
              <span className="text-xs font-medium whitespace-nowrap">{totalItems}</span>
            </div>
          </div>
        </div>

        {/* Description */}
        <div className="relative z-10 mb-4">
          <p className="text-slate-600 leading-relaxed text-sm line-clamp-2">
            {category.description}
          </p>
        </div>

        {/* Subcategories preview */}
        <div className="relative z-10 mb-4">
          <h3 className="text-xs font-semibold text-slate-700 mb-2 flex items-center gap-2">
            <Package className="w-3.5 h-3.5 text-primary" />
            Subcategorias ({category.subcategories.length})
          </h3>
          <div className="space-y-2">
            {category.subcategories.slice(0, 3).map((subcat, index) => (
              <div key={subcat.id} className="flex items-center gap-3 p-2.5 bg-white/60 border border-white/40 rounded-lg hover:bg-white/80 transition-colors">
                <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-medium text-slate-700 truncate">{subcat.name}</p>
                </div>
              </div>
            ))}
            {category.subcategories.length > 3 && (
              <div className="flex items-center gap-3 p-2.5 bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20 rounded-lg">
                <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse flex-shrink-0"></div>
                <p className="text-xs font-medium text-primary">
                  +{category.subcategories.length - 3} mais subcategorias
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Action button */}
        <div className="relative z-10 flex items-center justify-between">
          <div className="flex items-center gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
              <span>Disponível</span>
            </div>
            <span>•</span>
            <span className="truncate">Atualizado hoje</span>
          </div>
          
          <Button 
            variant="ghost" 
            size="sm"
            className="text-primary hover:bg-primary/10 hover:text-primary group-hover:bg-primary hover:text-white transition-all duration-300 flex-shrink-0"
          >
            <span className="mr-1 text-xs">Explorar</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
          </Button>
        </div>

        {/* Hover shimmer effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-shimmer"></div>
      </div>
    </div>
  );
};
