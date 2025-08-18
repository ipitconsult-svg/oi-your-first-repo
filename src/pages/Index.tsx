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
        <div className="text-center mb-12 max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-4">
            Catálogo de Infraestrutura
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Soluções completas de Data Center e Nuvem da HostDime Brasil
          </p>
          <div className="bg-card/50 backdrop-blur-sm border rounded-xl p-6 text-left">
            <h2 className="text-lg font-semibold mb-2">🚀 Explore nosso catálogo</h2>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Use a busca acima para encontrar soluções específicas ou navegue pelas categorias abaixo. 
              Cada categoria oferece produtos customizáveis para suas necessidades de infraestrutura.
            </p>
          </div>
        </div>
        
        <CatalogView searchValue={searchValue} />
      </main>
    </div>
  );
};

export default Index;