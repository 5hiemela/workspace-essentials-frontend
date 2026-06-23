import { useCart } from "../services/CartContext";
import { Link } from "react-router-dom";

function CartPage() {
  const { cart, updateQuantity, removeFromCart } = useCart();

  // Subtotal calculations
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal > 150 || subtotal === 0 ? 0 : 9.99;
  const estimatedTax = subtotal * 0.07;
  const total = subtotal + shipping + estimatedTax;

  if (cart.length === 0) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-20 text-center">
        <span className="text-4xl mb-4 block">🛒</span>
        <h1 className="text-2xl font-bold text-stone-950 mb-2">Your cart is empty</h1>
        <p className="text-stone-500 text-sm mb-6 max-w-sm mx-auto">
          Your shopping cart is currently empty.
        </p>
        <Link to="/" className="inline-flex bg-emerald-700 hover:bg-emerald-800 text-white text-sm font-semibold py-2.5 px-6 rounded-xl transition-colors shadow-sm">
          Return to Catalog
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-10 text-left flex-grow">
      <h1 className="text-3xl font-bold text-stone-950 tracking-tight mb-8">Shopping Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        {/* Cart items list side */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="bg-white border border-stone-200 rounded-xl p-4 flex gap-4 items-center justify-between shadow-sm">
              <div className="w-16 h-16 bg-stone-100 rounded-lg flex items-center justify-center text-xl text-stone-400 border border-stone-100 flex-shrink-0">
                ⚙️
              </div>

              <div className="flex-grow min-w-0">
                <h3 className="font-semibold text-stone-900 truncate text-sm sm:text-base">{item.name}</h3>
                <p className="text-emerald-700 font-medium text-xs sm:text-sm">${item.price.toFixed(2)}</p>
              </div>

              <div className="flex items-center gap-4 flex-shrink-0">
                <select
                  value={item.quantity}
                  onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  className="bg-stone-50 border border-stone-300 rounded-lg text-xs font-semibold py-1.5 px-2.5 focus:outline-none focus:ring-2 focus:ring-emerald-600"
                >
                  {[...Array(10).keys()].map((num) => (
                    <option key={num + 1} value={num + 1}>{num + 1}</option>
                  ))}
                </select>

                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-stone-400 hover:text-red-600 text-sm transition-colors p-1"
                  title="Remove item"
                >
                  ✕
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Checkout summary side */}
        <div className="bg-white border border-stone-200 rounded-xl p-6 shadow-sm">
          <h2 className="text-sm font-semibold text-stone-900 uppercase tracking-wide mb-4">Order Summary</h2>
          
          <div className="text-xs space-y-3 border-b border-stone-100 pb-4 mb-4 text-stone-600">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span className="font-semibold text-stone-900">${subtotal.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span className="font-semibold text-stone-900">
                {shipping === 0 ? "Free Shipping" : `$${shipping.toFixed(2)}`}
              </span>
            </div>
            <div className="flex justify-between">
              <span>Estimated Tax</span>
              <span className="font-semibold text-stone-900">${estimatedTax.toFixed(2)}</span>
            </div>
          </div>

          <div className="flex justify-between text-sm font-bold text-stone-950 mb-6">
            <span>Total</span>
            <span>${total.toFixed(2)}</span>
          </div>

          <button
            onClick={() => alert("Order processing feature arriving soon!")}
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-4 rounded-xl text-sm transition-colors text-center block shadow-sm"
          >
            Proceed to Checkout
          </button>
          
          <p className="text-[11px] text-stone-400 text-center mt-3 leading-relaxed">
            Free shipping applies to orders over $150.
          </p>
        </div>
      </div>
    </div>
  );
}

export default CartPage;