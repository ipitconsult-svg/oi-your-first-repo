import { Category } from "@/types/catalog";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ChevronRight, Server, HardDrive } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CategoryCardProps {
  category: Category;
  onCategoryClick: (categoryId: string) => void;
}

const categoryIcons = {
  "1": Server, // COMPUTE
  "2": HardDrive, // STORAGE (para futuras categorias)
};

export const CategoryCard = ({ category, onCategoryClick }: CategoryCardProps) => {
  const IconComponent = categoryIcons[category.id as keyof typeof categoryIcons] || Server;
  
  return (
    <Card 
      className="group hover:shadow-elegant transition-all duration-300 hover:-translate-y-1 cursor-pointer animate-fade-in"
      onClick={() => onCategoryClick(category.id)}
    >
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-gradient-primary flex items-center justify-center">
              <IconComponent className="h-5 w-5 text-foreground" />
            </div>
            <div>
              <CardTitle className="text-lg">{category.name}</CardTitle>
              <CardDescription className="text-sm">
                ID: {category.id}
              </CardDescription>
            </div>
          </div>
          <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-sm text-muted-foreground mb-4">
          {category.description}
        </p>
        
        <div className="flex items-center justify-between">
          <span className="text-sm text-muted-foreground">
            {category.subcategories.length} subcategoria(s)
          </span>
          <Button variant="ghost" size="sm" className="text-primary hover:bg-primary-subtle">
            Explorar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};