import React from "react";
import { X, Check, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

export interface FilterOptions {
  categories: string[];
  types: string[];
  dataCenters: string[];
}

interface FilterPanelProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  availableCategories: string[];
  availableTypes: string[];
  availableDataCenters: string[];
  totalResults?: number;
}

export const FilterPanel = ({
  filters,
  onFiltersChange,
  availableCategories,
  availableTypes,
  availableDataCenters,
  totalResults
}: FilterPanelProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const updateFilter = (filterType: keyof FilterOptions, value: string, checked: boolean) => {
    const currentValues = filters[filterType];
    const newValues = checked
      ? [...currentValues, value]
      : currentValues.filter(v => v !== value);
    
    onFiltersChange({
      ...filters,
      [filterType]: newValues
    });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      categories: [],
      types: [],
      dataCenters: []
    });
  };

  const activeFiltersCount = filters.categories.length + filters.types.length + filters.dataCenters.length;

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button 
          variant="outline" 
          size="sm" 
          className="relative bg-white border-2 border-slate-200 text-slate-700 
                   hover:bg-slate-50 hover:border-slate-300 hover:shadow-md 
                   transition-all duration-300 font-medium"
        >
          <Filter className="h-4 w-4 mr-2" />
          <span className="hidden sm:inline">Filtros</span>
          {activeFiltersCount > 0 && (
            <Badge 
              variant="secondary" 
              className="ml-2 h-5 w-5 p-0 text-xs bg-orange-500 text-white border-orange-600"
            >
              {activeFiltersCount}
            </Badge>
          )}
        </Button>
      </SheetTrigger>
      
      <SheetContent className="w-full sm:max-w-md">
        <SheetHeader>
          <SheetTitle className="flex items-center justify-between">
            <span className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtros
            </span>
            {activeFiltersCount > 0 && (
              <Button
                variant="ghost"
                size="sm"
                onClick={clearAllFilters}
                className="text-muted-foreground hover:text-foreground"
              >
                Limpar todos
              </Button>
            )}
          </SheetTitle>
          <SheetDescription>
            {totalResults !== undefined && (
              <span className="text-sm text-muted-foreground">
                {totalResults} resultado(s) encontrado(s)
              </span>
            )}
          </SheetDescription>
        </SheetHeader>

        <div className="mt-6 space-y-6">
          {/* Categorias */}
          {availableCategories.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-foreground">Categorias</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableCategories.map((category) => (
                  <div key={category} className="flex items-center space-x-2">
                    <Checkbox
                      id={`category-${category}`}
                      checked={filters.categories.includes(category)}
                      onCheckedChange={(checked) => 
                        updateFilter('categories', category, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`category-${category}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {category}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Tipos */}
          {availableTypes.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-foreground">Tipos</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableTypes.map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`type-${type}`}
                      checked={filters.types.includes(type)}
                      onCheckedChange={(checked) => 
                        updateFilter('types', type, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`type-${type}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {type}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Data Centers */}
          {availableDataCenters.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-sm font-medium text-foreground">Data Centers</h3>
              <div className="space-y-2 max-h-48 overflow-y-auto">
                {availableDataCenters.map((dataCenter) => (
                  <div key={dataCenter} className="flex items-center space-x-2">
                    <Checkbox
                      id={`dc-${dataCenter}`}
                      checked={filters.dataCenters.includes(dataCenter)}
                      onCheckedChange={(checked) => 
                        updateFilter('dataCenters', dataCenter, checked as boolean)
                      }
                    />
                    <label
                      htmlFor={`dc-${dataCenter}`}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer"
                    >
                      {dataCenter}
                    </label>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Filtros Ativos */}
        {activeFiltersCount > 0 && (
          <div className="mt-6 pt-6 border-t">
            <h3 className="text-sm font-medium text-foreground mb-3">Filtros Ativos</h3>
            <div className="flex flex-wrap gap-2">
              {filters.categories.map((category) => (
                <Badge
                  key={`active-category-${category}`}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {category}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-destructive"
                    onClick={() => updateFilter('categories', category, false)}
                  />
                </Badge>
              ))}
              {filters.types.map((type) => (
                <Badge
                  key={`active-type-${type}`}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {type}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-destructive"
                    onClick={() => updateFilter('types', type, false)}
                  />
                </Badge>
              ))}
              {filters.dataCenters.map((dataCenter) => (
                <Badge
                  key={`active-dc-${dataCenter}`}
                  variant="secondary"
                  className="flex items-center gap-1"
                >
                  {dataCenter}
                  <X
                    className="h-3 w-3 cursor-pointer hover:text-destructive"
                    onClick={() => updateFilter('dataCenters', dataCenter, false)}
                  />
                </Badge>
              ))}
            </div>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};
