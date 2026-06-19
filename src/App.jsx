import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  // State to track which product is currently selected for deep inspection
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      <main className="flex-grow">
        {selectedProduct ? (
          <ProductDetailPage 
            product={selectedProduct} 
            onBack={() => setSelectedProduct(null)} 
          />
        ) : (
          <CatalogPage onSelectProduct={(product) => setSelectedProduct(product)} />
        )}
      </main>
      <Footer />
    </div>
  );
}

export default App;