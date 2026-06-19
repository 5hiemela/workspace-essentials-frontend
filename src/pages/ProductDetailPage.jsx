import { useParams, Link } from "react-router-dom";

function ProductDetailPage() {
  // Pulls the dynamic :id directly out of the browser URL bar
  const { id } = useParams();

  // Temporary lookup array mimicking a backend database query by ID
  const sampleProducts = [
    { id: 1, name: "Mechanical Keyboard (Linear)", price: 89.99, description: "Hot-swappable switches with dense, sound-dampening foam layers." },
    { id: 2, name: "Premium Felt Desk Mat", price: 34.50, description: "Eco-friendly merino wool felt protects your desk and upgrades your mouse glide." },
    { id: 3, name: "Ergonomic Vertical Mouse", price: 65.00, description: "Designed to sit at a natural handshake angle to reduce wrist fatigue during coding sessions." },
    { id: 4, name: "Walnut Monitor Riser", price: 79.99, description: "Solid hardwood construction with integrated slots for cable management." }
  ];

  // Find the product matching the ID from the URL
  const product = sampleProducts.find((p) => p.id === parseInt(id)) || sampleProducts[0];
  const { name, price, description } = product;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-left">
      {/* Link back home using real router configuration */}
      <Link 
        to="/"
        className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors inline-flex items-center gap-1 mb-6"
      >
        ← Back to Catalog
      </Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="w-full aspect-square bg-stone-100 rounded-2xl flex items-center justify-center text-stone-400 border border-stone-200 shadow-inner">
          <span className="text-xl font-medium">⚙️ High-Res Image Showcase</span>
        </div>

        <div className="flex flex-col justify-between h-full">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-md">
              Premium Setup Component
            </span>
            <h1 className="text-3xl font-bold text-stone-900 mt-3 mb-2 leading-tight">{name}</h1>
            <p className="text-2xl font-bold text-stone-800 mb-6">${price.toFixed(2)}</p>
            
            <hr className="border-stone-200 mb-6" />
            
            <h2 className="text-sm font-semibold text-stone-800 uppercase tracking-wide mb-2">Overview</h2>
            <p className="text-stone-600 text-sm leading-relaxed mb-6">{description}</p>
            
            <h2 className="text-sm font-semibold text-stone-800 uppercase tracking-wide mb-3">Specifications</h2>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-4 text-xs space-y-2 mb-6">
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-500 font-medium">Material</span>
                <span className="text-stone-800 font-semibold">Premium Finished Sourcing</span>
              </div>
              <div className="flex justify-between border-b border-stone-200 pb-2">
                <span className="text-stone-500 font-medium">Compatibility</span>
                <span className="text-stone-800 font-semibold">Windows / macOS / Linux</span>
              </div>
              <div className="flex justify-between">
                <span className="text-stone-500 font-medium">Warranty</span>
                <span className="text-stone-800 font-semibold">2-Year Limited Coverage</span>
              </div>
            </div>
          </div>

          <button className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-6 rounded-xl transition-colors text-center text-sm shadow-sm mt-4">
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;