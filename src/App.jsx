import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CatalogPage from "./pages/CatalogPage";
import ProductDetailPage from "./pages/ProductDetailPage";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            {/* Base route shows the full workspace catalog */}
            <Route path="/" element={<CatalogPage />} />
            
            {/* Dynamic route using :id for individual tech parts */}
            <Route path="/product/:id" element={<ProductDetailPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;