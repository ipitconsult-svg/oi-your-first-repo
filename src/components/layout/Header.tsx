import { Search, Menu, Filter, Home, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FilterPanel, type FilterOptions } from "./FilterPanel";
import hostdimeLogo from "@/assets/hostdime-logo.png";

interface HeaderProps {
  onSearchChange: (search: string) => void;
  searchValue: string;
  onMenuToggle: () => void;
  onHomeClick?: () => void;
  filters?: FilterOptions;
  onFiltersChange?: (filters: FilterOptions) => void;
  availableCategories?: string[];
  availableTypes?: string[];
  availableDataCenters?: string[];
  totalResults?: number;
}

export const Header = ({ 
  onSearchChange, 
  searchValue, 
  onMenuToggle, 
  onHomeClick,
  filters = { categories: [], types: [], dataCenters: [] },
  onFiltersChange,
  availableCategories = [],
  availableTypes = [],
  availableDataCenters = [],
  totalResults
}: HeaderProps) => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-slate-200 bg-white shadow-sm">
      <div className="container mx-auto flex h-16 items-center px-4">
        <Button
          variant="ghost"
          size="icon"
          className="mr-4 md:hidden text-slate-600 hover:text-slate-900"
          onClick={onMenuToggle}
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-3 cursor-pointer group" onClick={onHomeClick}>
            <div className="relative">
              <div className="h-10 w-10 rounded-xl bg-white border-2 border-orange-200 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-300 p-1">
                <img 
                  src={hostdimeLogo} 
                  alt="HostDime Brasil" 
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-orange-500 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-full h-full bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
            
            <div className="hidden sm:block">
              <h1 className="text-lg font-semibold text-slate-900 group-hover:text-orange-600 transition-colors duration-300">
                HostDime Brasil
              </h1>
              <p className="text-xs text-slate-600">
                Catálogo de Infraestrutura
              </p>
            </div>
          </div>
        </div>
        
        <div className="flex-1 max-w-md mx-4">
          <div className="relative group">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-500 
                             group-focus-within:text-orange-500 group-focus-within:scale-110 
                             transition-all duration-300 z-10" />
            <Input
              placeholder="Buscar por nome, ID ou palavra-chave..."
              value={searchValue}
              onChange={(e) => onSearchChange(e.target.value)}
              className="pl-10 h-11 bg-white border-2 border-slate-200 text-slate-900 
                       placeholder:text-slate-500 shadow-sm
                       hover:border-slate-300 hover:shadow-md
                       focus:border-orange-500 focus:shadow-lg focus:shadow-orange-500/20
                       focus-visible:outline-none focus-visible:ring-0
                       transition-all duration-300 rounded-lg font-medium"
            />
            {searchValue && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-orange-500/10 to-blue-500/10 rounded-lg -z-10"></div>
                <button
                  onClick={() => onSearchChange("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors z-10"
                >
                  <X className="h-4 w-4" />
                </button>
              </>
            )}
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          {onHomeClick && (
            <Button 
              variant="ghost" 
              size="sm" 
              onClick={onHomeClick} 
              className="flex items-center gap-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100"
            >
              <Home className="h-4 w-4" />
              <span className="hidden md:inline">Home</span>
            </Button>
          )}
          {onFiltersChange && (
            <FilterPanel
              filters={filters}
              onFiltersChange={onFiltersChange}
              availableCategories={availableCategories}
              availableTypes={availableTypes}
              availableDataCenters={availableDataCenters}
              totalResults={totalResults}
            />
          )}
        </div>
      </div>
      
      {/* Active filters indicator */}
      {(searchValue || (filters.categories.length > 0 || filters.types.length > 0 || filters.dataCenters.length > 0)) && (
        <div className="border-t border-slate-200 bg-slate-50 px-4 py-2">
          <div className="container mx-auto flex items-center gap-2 text-sm">
            <span className="text-slate-700 font-medium">Filtros ativos:</span>
            {searchValue && (
              <span className="inline-flex items-center gap-1 px-2 py-1 bg-orange-100 text-orange-800 rounded-md text-xs font-medium border border-orange-200">
                Busca: "{searchValue}"
              </span>
            )}
            {totalResults !== undefined && (
              <span className="ml-auto text-xs text-slate-600 font-medium">
                {totalResults} resultado(s) encontrado(s)
              </span>
            )}
          </div>
        </div>
      )}
    </header>
  );
};