import { Link } from "react-router-dom";
import { useCart } from "../services/CartContext";

function ProductCard({ product }) {
  const { id, name, price, description } = product; 
  const { addToCart } = useCart();

  const handleQuickAdd = (e) => {
    e.preventDefault(); 
    addToCart(product);
  };

  return (
    <Link 
      to={`/product/${id}`}
      className="group block border border-stone-200 p-6 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow text-left flex flex-col justify-between h-full"
    >
      <div>
        <div className="w-full h-40 bg-stone-100 rounded-lg mb-4 flex items-center justify-center text-stone-400 text-sm font-medium group-hover:bg-stone-200 transition-colors">
          ⚙️ Image Placeholder
        </div>
        <h3 className="font-semibold text-stone-800 text-lg mb-1 leading-snug group-hover:text-emerald-700 transition-colors">
          {name}
        </h3>
        <p className="text-stone-500 text-xs mb-3 line-clamp-2">{description}</p>
      </div>
      
      <div className="mt-4">
        <p className="text-stone-800 font-semibold text-xl mb-3">${price.toFixed(2)}</p>
        <button 
          onClick={handleQuickAdd}
          className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-medium py-2 px-4 rounded-lg transition-colors text-center text-sm shadow-sm relative z-10"
        >
          Add to Cart
        </button>
      </div>
    </Link>
  );
}

export default ProductCard;