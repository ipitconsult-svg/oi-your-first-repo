import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { CatalogView } from "@/components/catalog/CatalogView";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSearchChange = (search: string) => {
    setSearchValue(search);
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onMenuToggle={handleMenuToggle}
      />
      
      <main className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-2">
            Catálogo de Infraestrutura
          </h1>
          <p className="text-lg text-muted-foreground">
            Soluções completas de Data Center e Nuvem da HostDime Brasil
          </p>
        </div>
        
        <CatalogView searchValue={searchValue} />
      </main>
    </div>
  );
};

export default Index;