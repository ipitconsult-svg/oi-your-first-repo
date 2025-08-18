import { Search, Menu, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onSearchChange: (search: string) => void;
  searchValue: string;
  onMenuToggle: () => void;
}

export const Header = ({ onSearchChange, searchValue, onMenuToggle }: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-card/95 backdrop-blur supports-[backdrop-filter]:bg-card/60">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          className="mr-4 md:hidden"
          onClick={onMenuToggle}
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="h-8 w-8 rounded-lg bg-gradient-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">HD</span>
            </div>
            <h1 className="text-lg font-semibold text-foreground hidden sm:block">
              Catálogo de Infraestrutura
            </h1>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              placeholder="Buscar por nome, ID ou palavra-chave..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 transition-smooth focus:shadow-elegant"
            />
          </div>
        </div>
        
        <Button variant="outline" size="sm" className="hidden sm:flex">
          <Filter className="h-4 w-4 mr-2" />
          Filtros
        </Button>
      </div>
    </header>
  );
};