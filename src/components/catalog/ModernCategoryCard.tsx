import { Category } from "@/types/catalog";
import { TechIcon } from "@/components/ui/tech-icons";
import { ArrowRight, Sparkles } from "lucide-react";

interface ModernCategoryCardProps {
  category: Category;
  onCategoryClick: (categoryId: string) => void;
  index: number;
}

export const ModernCategoryCard = ({ 
  category, 
  onCategoryClick, 
  index 
}: ModernCategoryCardProps) => {
  const itemCount = category.subcategories.reduce((total, subcat) => {
    const subcatItems = subcat.items.length;
    const nestedItems = subcat.subcategories ? 
      subcat.subcategories.reduce((nestedTotal, nested) => nestedTotal + nested.items.length, 0) : 0;
    return total + subcatItems + nestedItems;
  }, 0);

  return (
    <div 
      className="group cursor-pointer animate-slide-up"
      style={{ animationDelay: `${index * 150}ms` }}
      onClick={() => onCategoryClick(category.id)}
    >
      <div className="relative h-full bg-gradient-card border border-white/60 rounded-3xl p-8 hover:shadow-float hover:border-primary/20 transition-all duration-500 hover:-translate-y-2 overflow-hidden">
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-tech opacity-0 group-hover:opacity-100 transition-all duration-500 rounded-3xl"></div>
        
        {/* Floating particles effect */}
        <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-all duration-500">
          <Sparkles className="w-5 h-5 text-primary animate-pulse" />
        </div>

        <div className="relative z-10">
          {/* Modern Icon */}
          <div className="mb-6 relative">
            <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-glow">
              <TechIcon 
                name={category.id} 
                className="w-8 h-8 text-white drop-shadow-sm"
              />
            </div>
            
            {/* Tech indicator */}
            <div className="absolute -top-2 -right-2 w-6 h-6 bg-secondary rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
            </div>
          </div>
          
          {/* Content */}
          <div className="space-y-4">
            <div>
              <h3 className="text-xl font-semibold text-slate-800 mb-2 group-hover:text-primary transition-colors duration-300">
                {category.name}
              </h3>
              <p className="text-sm text-slate-600 leading-relaxed line-clamp-3">
                {category.description}
              </p>
            </div>
            
            {/* Stats */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  {itemCount} produtos
                </div>
                
                <div className="px-3 py-1 bg-secondary/10 text-secondary rounded-full text-xs font-medium">
                  {category.subcategories.length} categorias
                </div>
              </div>
              
              <ArrowRight className="w-5 h-5 text-slate-500 group-hover:text-primary group-hover:translate-x-1 transition-all duration-300" />
            </div>
          </div>
          
          {/* Bottom tech pattern */}
          <div className="absolute bottom-0 right-0 w-24 h-24 opacity-5 group-hover:opacity-10 transition-opacity duration-500">
            <div className="w-full h-full bg-gradient-primary rounded-full blur-xl"></div>
          </div>
        </div>
      </div>
    </div>
  );
};
