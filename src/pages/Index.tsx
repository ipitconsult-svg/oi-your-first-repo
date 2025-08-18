import { useState } from "react";
import { Header } from "@/components/layout/Header";
import { CatalogView } from "@/components/catalog/CatalogView";

const Index = () => {
  const [searchValue, setSearchValue] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [showHome, setShowHome] = useState(true);

  const handleSearchChange = (search: string) => {
    setSearchValue(search);
  };

  const handleMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleHomeClick = () => {
    setShowHome(true);
    setSearchValue("");
  };

  return (
    <div className="min-h-screen bg-gradient-background">
      <Header
        searchValue={searchValue}
        onSearchChange={handleSearchChange}
        onMenuToggle={handleMenuToggle}
        onHomeClick={!showHome ? handleHomeClick : undefined}
      />
      
      <main className="container mx-auto px-4 py-8">
        <CatalogView 
          searchValue={searchValue} 
          showHome={showHome}
          onCategoryEnter={() => setShowHome(false)}
          onBackToHome={() => setShowHome(true)}
        />
      </main>
    </div>
  );
};

export default Index;