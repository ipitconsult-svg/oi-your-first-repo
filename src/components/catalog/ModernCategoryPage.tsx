import { Category } from "@/types/catalog";
import { ChevronRight, Server, Package, Sparkles } from "lucide-react";

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
  
  // Função recursiva para contar todos os itens (incluindo subcategorias profundamente aninhadas)
  const countAllItems = (subcategories: any[]): number => {
    return subcategories.reduce((total, subcat) => {
      let itemCount = subcat.items ? subcat.items.length : 0;
      if (subcat.subcategories && subcat.subcategories.length > 0) {
        itemCount += countAllItems(subcat.subcategories);
      }
      return total + itemCount;
    }, 0);
  };

  const totalItems = countAllItems(category.subcategories);

  return (
    <div 
      className="group cursor-pointer"
      onClick={() => onCategoryClick(category.id)}
    >
      <div className="relative bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-4 hover:shadow-xl hover:scale-[1.01] transition-all duration-300 hover:border-primary/40 overflow-hidden">
        {/* Background sutil */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-gray-50/30 rounded-2xl"></div>
        
        {/* Header compacto */}
        <div className="relative z-10 flex items-center justify-between mb-3">
          <div className="flex items-center gap-3 flex-1">
            <div className="w-10 h-10 bg-primary/10 rounded-xl flex items-center justify-center border border-primary/20 group-hover:bg-primary/15 transition-colors">
              <IconComponent className="w-5 h-5 text-primary" />
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="text-base font-semibold text-gray-900 truncate group-hover:text-primary transition-colors">
                {category.name}
              </h3>
              <p className="text-xs text-gray-500 font-medium">{category.subcategories.length} subcategorias</p>
            </div>
          </div>
          
          <div className="bg-primary/10 text-primary px-2.5 py-1 rounded-full">
            <span className="text-xs font-medium">{totalItems}</span>
          </div>
        </div>

        {/* Descrição expandida para hardware */}
        <div className="relative z-10 mb-3">
          <p className="text-sm text-gray-600 line-clamp-3 leading-relaxed" title={category.description}>
            {category.description}
          </p>
        </div>

        {/* Subcategorias como pills - mostrando até 6 para melhor visualização */}
        <div className="relative z-10 mb-3">
          <div className="flex flex-wrap gap-1.5">
            {category.subcategories.slice(0, 6).map((subcat, index) => (
              <div key={subcat.id} className="inline-flex items-center gap-1.5 bg-gray-100/80 hover:bg-gray-200/80 px-2.5 py-1 rounded-full transition-colors">
                <div className="w-1 h-1 bg-primary rounded-full"></div>
                <span className="text-xs font-medium text-gray-700 truncate max-w-[120px]" title={subcat.name}>{subcat.name}</span>
              </div>
            ))}
            {category.subcategories.length > 6 && (
              <div className="inline-flex items-center gap-1.5 bg-primary/10 px-2.5 py-1 rounded-full" title={`${category.subcategories.length - 6} subcategorias adicionais`}>
                <span className="text-xs font-medium text-primary">+{category.subcategories.length - 6}</span>
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="relative z-10 flex items-center justify-between pt-2 border-t border-gray-100">
          <div className="flex items-center gap-2 text-xs text-gray-500">
            <div className="w-1.5 h-1.5 bg-green-500 rounded-full"></div>
            <span>Ativo</span>
          </div>
          
          <div className="flex items-center text-primary group-hover:text-primary/80 transition-colors">
            <span className="text-xs font-medium mr-1">Ver mais</span>
            <ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </div>
        </div>

        {/* Efeito hover sutil */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
      </div>
    </div>
  );
};
