function ProductDetailPage({ product, onBack }) {
  const { name, price, description } = product;

  return (
    <div className="max-w-4xl mx-auto px-6 py-10 text-left">
      {/* Back button */}
      <button 
        onClick={onBack}
        className="text-sm font-medium text-emerald-700 hover:text-emerald-800 transition-colors flex items-center gap-1 mb-6"
      >
        ← Back to Catalog
      </button>

      {/* Main product presentation matrix */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        {/* Left Side: Image Gallery Placeholder */}
        <div className="w-full aspect-square bg-stone-100 rounded-2xl flex items-center justify-center text-stone-400 border border-stone-200 shadow-inner">
          <span className="text-xl font-medium">⚙️ High-Res Image Showcase</span>
        </div>

        {/* Right Side: Product Checkout Details */}
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
            
            {/* Technical Specifications Matrix */}
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
            Add to Workspace Setup
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetailPage;