import { useState } from 'react';
import { Search, Filter, X, Cpu, HardDrive, Server, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

interface HardwareFilterProps {
  searchValue: string;
  onSearchChange: (value: string) => void;
  onFilterChange?: (filters: string[]) => void;
}

const hardwareFilters = [
  { id: 'cpu', label: 'Processadores', icon: Cpu },
  { id: 'memory', label: 'Memória', icon: Zap },
  { id: 'storage', label: 'Armazenamento', icon: HardDrive },
  { id: 'server', label: 'Servidores', icon: Server },
];

export const HardwareFilter = ({ 
  searchValue, 
  onSearchChange, 
  onFilterChange 
}: HardwareFilterProps) => {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [showFilters, setShowFilters] = useState(false);

  const handleFilterToggle = (filterId: string) => {
    const newFilters = activeFilters.includes(filterId)
      ? activeFilters.filter(f => f !== filterId)
      : [...activeFilters, filterId];
    
    setActiveFilters(newFilters);
    onFilterChange?.(newFilters);
  };

  const clearFilters = () => {
    setActiveFilters([]);
    onFilterChange?.([]);
  };

  const clearSearch = () => {
    onSearchChange('');
  };

  return (
    <div className="bg-white/90 backdrop-blur-sm border border-gray-200/60 rounded-2xl p-4 mb-6">
      {/* Search Bar */}
      <div className="relative mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <input
            type="text"
            placeholder="Buscar hardware específico (ex: CPU Intel, RAM DDR4, SSD NVMe...)"
            value={searchValue}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full pl-10 pr-10 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
          />
          {searchValue && (
            <button
              onClick={clearSearch}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>

      {/* Filter Toggle */}
      <div className="flex items-center justify-between mb-2">
        <Button
          variant="outline"
          size="sm"
          onClick={() => setShowFilters(!showFilters)}
          className="text-xs"
        >
          <Filter className="h-3 w-3 mr-2" />
          Filtros de Hardware
          {activeFilters.length > 0 && (
            <span className="ml-2 bg-primary text-white text-xs px-2 py-0.5 rounded-full">
              {activeFilters.length}
            </span>
          )}
        </Button>
        
        {activeFilters.length > 0 && (
          <Button
            variant="ghost"
            size="sm"
            onClick={clearFilters}
            className="text-xs text-gray-500 hover:text-gray-700"
          >
            Limpar filtros
          </Button>
        )}
      </div>

      {/* Hardware Filters */}
      {showFilters && (
        <div className="border-t border-gray-100 pt-3">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {hardwareFilters.map((filter) => {
              const IconComponent = filter.icon;
              const isActive = activeFilters.includes(filter.id);
              
              return (
                <button
                  key={filter.id}
                  onClick={() => handleFilterToggle(filter.id)}
                  className={`flex items-center gap-2 p-2 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-primary text-white shadow-sm'
                      : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  {filter.label}
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Search Suggestions */}
      {searchValue.length > 0 && searchValue.length < 3 && (
        <div className="mt-3 p-3 bg-blue-50 border border-blue-100 rounded-lg">
          <p className="text-sm text-blue-800">
            💡 <strong>Dica:</strong> Digite pelo menos 3 caracteres para buscar. 
            Tente termos como "Intel", "DDR4", "SSD", "Xeon", etc.
          </p>
        </div>
      )}

      {/* Quick Search Suggestions */}
      {!searchValue && !showFilters && (
        <div className="mt-3">
          <p className="text-xs text-gray-500 mb-2">Buscas populares:</p>
          <div className="flex flex-wrap gap-1">
            {['Intel Xeon', 'DDR4', 'SSD NVMe', 'RTX 4090', 'AMD EPYC', 'Tesla V100'].map((suggestion) => (
              <button
                key={suggestion}
                onClick={() => onSearchChange(suggestion)}
                className="text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 px-2 py-1 rounded-full transition-colors"
              >
                {suggestion}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
