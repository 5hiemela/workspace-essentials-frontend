import { useState, useEffect } from "react";
import { fetchProducts } from "../services/api";
import ProductCard from "../components/ProductCard";

function CatalogPage() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchProducts()
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setError("Failed to load workspace items from the server.");
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="flex-grow flex items-center justify-center py-20">
        <p className="text-stone-500 animate-pulse font-medium">Loading premium inventory...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex-grow flex items-center justify-center py-20">
        <p className="text-red-600 bg-red-50 border border-red-200 px-4 py-2 rounded-xl text-sm font-medium">
          {error}
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-10 flex-grow">
      <div className="text-left mb-10">
        <h1 className="text-3xl font-bold text-stone-950 tracking-tight mb-2">Workspace Catalog</h1>
        <p className="text-stone-500 text-sm max-w-xl leading-relaxed">
          High-quality workspace essentials built for your daily routine.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;