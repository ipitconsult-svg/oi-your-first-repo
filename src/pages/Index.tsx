import { useState } from "react";
import { Header } from "@/components/layout/Header";
import SimpleCatalogView from "@/components/catalog/SimpleCatalogView";
import { type FilterOptions } from "@/components/layout/FilterPanel";

const Index = () => {
  console.log('Index renderizando');
  
  const [searchValue, setSearchValue] = useState("");
  const [showHome, setShowHome] = useState(true);
  const [totalResults, setTotalResults] = useState<number | undefined>(undefined);
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
      
      <main className="container mx-auto px-4 py-8">
        <SimpleCatalogView searchValue={searchValue} />
      </main>
    </div>
  );
};

export default Index;