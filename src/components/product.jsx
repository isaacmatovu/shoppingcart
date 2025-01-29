import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { CartContext } from "./context";
import { Plus, Minus, ShoppingCart } from "lucide-react";

export default function Product({ product }) {
  const { title, image, price } = product;
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useContext(CartContext);

  function handleSubtract() {
    if (quantity > 0) {
      setQuantity(quantity - 1);
    }
  }

  function handleAdd() {
    setQuantity(quantity + 1);
  }

  function handleChange(e) {
    const value = parseInt(e.target.value) || 0;
    setQuantity(Math.max(0, value));
  }

  function handleAddToCart() {
    if (quantity > 0) {
      addToCart(product, quantity);
    }
  }

  return (
    <div className="group relative">
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden transition-transform duration-300 hover:shadow-xl">
        {/* Image Container */}
        <div className="relative aspect-square overflow-hidden bg-gray-100">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-contain object-center transform transition-transform duration-500 group-hover:scale-105"
            loading="lazy"
            sizes="(max-width: 400px) 100vw, (max-width: 800px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
        </div>

        {/* Content Container */}
        <div className="p-6">
          {/* Title */}
          <h2 className="text-lg font-semibold text-gray-900 mb-2 line-clamp-2 min-h-[3.5rem]">
            {title}
          </h2>

          {/* Price */}
          <div className="flex items-center justify-between mb-4">
            <p className="text-2xl font-bold text-blue-600">
              UGX {(price * quantity).toLocaleString()}
            </p>
          </div>

          {/* Quantity Controls */}
          <div className="flex items-center justify-between gap-4 mb-6">
            <span className="text-sm font-medium text-gray-600">Quantity:</span>
            <div className="flex items-center border border-gray-200 rounded-lg">
              <button
                onClick={handleSubtract}
                disabled={quantity === 0}
                className="p-2 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
              >
                <Minus className="h-4 w-4" />
              </button>
              <input
                type="number"
                onChange={handleChange}
                value={quantity}
                min="0"
                className="w-16 text-center border-x border-gray-200 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              />
              <button
                onClick={handleAdd}
                className="p-2 hover:bg-gray-50 transition-colors duration-200"
              >
                <Plus className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            onClick={handleAddToCart}
            disabled={quantity === 0}
            className="w-full py-3 px-4 bg-blue-600 text-white font-medium rounded-lg 
                     hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50
                     disabled:opacity-50 disabled:cursor-not-allowed
                     transition-colors duration-200
                     flex items-center justify-center gap-2"
          >
            <ShoppingCart className="h-5 w-5" />
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
