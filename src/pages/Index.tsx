import { useState } from "react";
import { Settings, Eye, EyeOff } from "lucide-react";
import { Header } from "@/components/layout/Header";
import SimpleCatalogView from "@/components/catalog/SimpleCatalogView";
import EnhancedCatalogView from "@/components/catalog/EnhancedCatalogView";
import { type FilterOptions } from "@/components/layout/FilterPanel";

const Index = () => {
  console.log('Index renderizando');
  
  const [searchValue, setSearchValue] = useState("");
  const [showHome, setShowHome] = useState(true);
  const [totalResults, setTotalResults] = useState<number | undefined>(undefined);
  const [useEnhancedView, setUseEnhancedView] = useState(false);
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    types: [],
    dataCenters: []
  });

  const handleSearchChange = (search: string) => {
    setSearchValue(search);
  };

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
  };

  const handleMenuToggle = () => {
    console.log('Menu toggle clicked');
  };

  const handleHomeClick = () => {
    setShowHome(true);
    setSearchValue("");
    setTotalResults(undefined);
    setFilters({
      categories: [],
      types: [],
      dataCenters: []
    });
  };

  return (
    <div className="min-h-screen bg-white">
      <Header
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onMenuToggle={handleMenuToggle}
        onHomeClick={!showHome ? handleHomeClick : undefined}
        filters={filters}
        onFiltersChange={handleFiltersChange}
        availableCategories={["Servidores", "Redes", "Software", "Segurança", "Backup"]}
        availableTypes={["Físico", "Virtual", "Cloud", "Híbrido"]}
        availableDataCenters={["São Paulo", "Rio de Janeiro", "Orlando", "Amsterdam"]}
        totalResults={totalResults}
      />
      
      {/* Toggle de Visualização */}
      <div className="container mx-auto px-4 py-2">
        <div className="flex justify-end">
          <button
            onClick={() => setUseEnhancedView(!useEnhancedView)}
            className={`flex items-center gap-2 px-3 py-1 text-sm border rounded-lg transition-colors ${
              useEnhancedView 
                ? 'bg-blue-500 text-white border-blue-500' 
                : 'bg-white text-gray-700 border-gray-300 hover:bg-gray-50'
            }`}
            title={useEnhancedView ? "Usar visualização simples" : "Usar visualização aprimorada"}
          >
            {useEnhancedView ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {useEnhancedView ? "Visualização Simples" : "Visualização Aprimorada"}
          </button>
        </div>
      </div>
      
      <main className="container mx-auto px-4 py-8">
        {useEnhancedView ? (
          <EnhancedCatalogView searchValue={searchValue} />
        ) : (
          <SimpleCatalogView searchValue={searchValue} />
        )}
      </main>
    </div>
  );
};

export default Index;