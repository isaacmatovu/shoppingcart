import { Link } from "react-router-dom";

import { Trash2, Plus, Minus, ArrowLeft, ShoppingBag } from "lucide-react";
import useCartStore from "./context";

export default function Cart() {
  const { items, removeFromCart, updateQuantity, getTotalPrice, clearCart } =
    useCartStore();

  const cartTotal = getTotalPrice();
  function handleSubmit() {
    if (cartTotal > 500000) {
      alert("Congratulations on your premium purchase!");
    } else {
      alert("Keep exploring our premium collection!");
    }
  }

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-500 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center gap-4">
              <ShoppingBag className="w-16 h-16 text-gray-300" />
              <h2 className="text-2xl font-bold text-gray-900">
                Your cart is empty
              </h2>
              <p className="text-gray-600">
                Looks like you havenot added anything to your cart yet.
              </p>
              <Link
                to="/"
                className="mt-4 inline-flex items-center px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                <ArrowLeft className="mr-2 h-5 w-5" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Shopping Cart</h2>
        <button onClick={clearCart} className="text-white bg-black px-6 py-4">
          Clear Cart
        </button>
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="divide-y divide-gray-200">
            {items.map((item) => (
              <div key={item.id} className="p-6">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-24 h-24 sm:w-32 sm:h-32">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover rounded-lg"
                      loading="lazy"
                      sizes="(max-width: 400px) 100vw, (max-width: 800px) 50vw, 33vw"
                    />
                  </div>

                  <div className="flex-1">
                    <div className="flex justify-between">
                      <h3 className="text-lg font-medium text-gray-900">
                        {item.title}
                      </h3>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-400 hover:text-red-500 transition-colors"
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>

                    <p className="mt-1 text-gray-600">
                      UGX {(item.price * item.quantity).toLocaleString()}
                    </p>

                    <div className="mt-4 flex items-center gap-4">
                      <div className="flex items-center border border-gray-200 rounded-lg">
                        <button
                          onClick={() =>
                            updateQuantity(
                              item.id,
                              Math.max(1, item.quantity - 1)
                            )
                          }
                          className="p-2 hover:bg-gray-50"
                        >
                          <Minus className="h-4 w-4" />
                        </button>
                        <input
                          type="number"
                          value={item.quantity}
                          onChange={(e) =>
                            updateQuantity(item.id, e.target.value)
                          }
                          className="w-16 text-center border-x border-gray-200 py-2"
                          min="1"
                        />
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="p-2 hover:bg-gray-50"
                        >
                          <Plus className="h-4 w-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-gray-50 px-6 py-8">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="text-lg font-medium text-gray-900">
                  Total: UGX {cartTotal.toLocaleString()}
                </p>
                <Link
                  to="/"
                  className="mt-2 inline-flex items-center text-blue-600 hover:text-blue-700"
                >
                  <ArrowLeft className="mr-1 h-4 w-4" />
                  Continue Shopping
                </Link>
              </div>

              <button
                onClick={handleSubmit}
                className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition duration-300"
              >
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
