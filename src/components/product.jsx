import { useState, useContext } from "react";
import PropTypes from "prop-types";
import "../styles/product.css";
import { CartContext } from "./context";
import NavBar from "./NavBar";

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
    setQuantity(e.target.value);
  }

  function handleAddToCart() {
    if (quantity > 0) {
      addToCart(product, quantity);
    }
  }

  return (
    <>
      <NavBar />

      <div className="flex flex-col justify-center items-center bg-amber-700 rounded-4xl">
        <h1 className="max-w-[200px] text-2xl text-slate-600">{title}</h1>
        <img
          src={image}
          alt="item"
          className="w-1/2 h-1/2"
          srcSet={`${image} 400w, ${image} 800w, ${image} 1200w`}
          sizes="(max-width: 400px) 100vw, (max-width: 800px) 50vw, 33vw"
        />
        <p>UGX{price * quantity}</p>
        <div className="button">
          <button onClick={handleSubtract} disabled={quantity === 0}>
            -
          </button>
          <input
            type="number"
            onChange={handleChange}
            value={quantity}
            min="0"
            className="placeholder-red-100 text-2xl w-14 bg-amber-100"
          />
          <button onClick={handleAdd}>+</button>
        </div>

        <button onClick={handleAddToCart} disabled={quantity === 0}>
          Add to Cart
        </button>
      </div>
    </>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    //quantity: PropTypes.number.isRequired,
    id: PropTypes.number.isRequired,
  }).isRequired,
};
