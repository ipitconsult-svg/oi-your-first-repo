import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { CatalogView } from "@/components/catalog/CatalogView";
import { type FilterOptions } from "@/components/layout/FilterPanel";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHome, setShowHome] = useState(true);
  const [totalResults, setTotalResults] = useState<number | undefined>(undefined);
  const [filters, setFilters] = useState<FilterOptions>({
    categories: [],
    types: [],
    dataCenters: []
  });

  const handleSearchChange = (search: string) => {
    setSearchValue(search);
    // Se há uma busca, sair da tela home
    if (search && search.trim()) {
      setShowHome(false);
    }
    // Se a busca foi limpa e não há filtros ativos, voltar para home
    else if (!search && filters.categories.length === 0 && filters.types.length === 0 && filters.dataCenters.length === 0) {
      setShowHome(true);
    }
  };

  const handleFiltersChange = (newFilters: FilterOptions) => {
    setFilters(newFilters);
    // Se há filtros ativos, sair da tela home
    if (newFilters.categories.length > 0 || newFilters.types.length > 0 || newFilters.dataCenters.length > 0) {
      setShowHome(false);
    }
    // Se não há filtros e não há busca, voltar para home
    else if (!searchValue || !searchValue.trim()) {
      setShowHome(true);
    }
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
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
      
      <main className="container mx-auto px-4 py-8">
        <CatalogView 
          searchValue={searchValue} 
          filters={filters}
          showHome={showHome}
          onCategoryEnter={() => setShowHome(false)}
          onBackToHome={() => setShowHome(true)}
          onResultsChange={setTotalResults}
          onSearchChange={handleSearchChange}
          onFiltersChange={handleFiltersChange}
        />
      </main>
    </div>
  );
};

export default Index;