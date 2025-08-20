import { Search, Menu, Filter, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import hostdimeLogo from "@/assets/hostdime-logo.png";

interface HeaderProps {
  onSearchChange: (search: string) => void;
  searchValue: string;
  onMenuToggle: () => void;
  onHomeClick?: () => void;
}

export const Header = ({ onSearchChange, searchValue, onMenuToggle, onHomeClick }: HeaderProps) => {
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
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={onHomeClick}>
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-white flex items-center justify-center shadow-elegant group-hover:scale-110 transition-transform duration-300 p-1">
                <img 
                  src={hostdimeLogo} 
                  alt="HostDime Brasil" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-secondary rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
          
              </h1>
              <p className="text-xs text-muted-foreground">
                Catálogo de Infraestrutura
              </p>
            </div>
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
        
        <div className="flex items-center gap-2">
          {onHomeClick && (
            <Button variant="ghost" size="sm" onClick={onHomeClick} className="flex items-center gap-2">
              <Home className="h-4 w-4" />
              <span className="hidden md:inline">Home</span>
            </Button>
          )}
          <Button variant="outline" size="sm" className="hidden sm:flex">
            <Filter className="h-4 w-4 mr-2" />
            Filtros
          </Button>
        </div>
      </div>
    </header>
  );
};