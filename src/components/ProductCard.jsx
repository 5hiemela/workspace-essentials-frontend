function ProductCard() {
  const productName = "Mechanical Keyboard (Linear)";
  const price = 89.99;

  return (
    <div className="border border-stone-200 p-6 rounded-xl max-w-xs bg-white shadow-sm hover:shadow-md transition-shadow text-left">
      <h3 className="font-semibold text-stone-800 text-lg mb-1">{productName}</h3>
      <p className="text-stone-600 font-medium mb-4">${price}</p>
      <button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm">
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;