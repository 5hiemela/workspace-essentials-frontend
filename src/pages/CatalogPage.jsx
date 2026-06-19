import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

function CatalogPage() {
  const sampleProducts = [
    { id: 1, name: "Mechanical Keyboard (Linear)", price: 89.99, description: "Hot-swappable switches with dense, sound-dampening foam layers." },
    { id: 2, name: "Premium Felt Desk Mat", price: 34.50, description: "Eco-friendly merino wool felt protects your desk and upgrades your mouse glide." },
    { id: 3, name: "Ergonomic Vertical Mouse", price: 65.00, description: "Designed to sit at a natural handshake angle to reduce wrist fatigue during coding sessions." },
    { id: 4, name: "Walnut Monitor Riser", price: 79.99, description: "Solid hardwood construction with integrated slots for cable management." }
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-10">
      <div className="mb-10 text-left">
        <h1 className="text-3xl font-bold text-stone-800 tracking-tight mb-2">Workspace Catalog</h1>
        <p className="text-stone-600">Upgrade your daily setup with our curated essentials.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {sampleProducts.map((product) => (
          <Link 
            key={product.id} 
            to={`/product/${product.id}`}
            className="transform hover:-translate-y-1 transition-transform duration-200 block"
          >
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default CatalogPage;