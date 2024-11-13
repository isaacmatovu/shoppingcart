import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context';
import '../styles/cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext)




  return (
    <div className="cart">
      <h2 className='shopping-title'>Shopping Cart</h2>
      {cartItems.length === 0 ? (
        <div>
          <p>Your cart is empty</p>
          <Link to="/" className="continue-shopping">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} className="cart-item">
                <div className="itemcard">
              <img src={item.image} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <h3>{item.title}</h3>
                <p>UGX {item.price * item.quantity}</p>
                <p>Quantity :{item.quantity}</p>
                <div className="quantity-controls"> 
                  <input
                    type="number"
                    className='inputitem'
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                  />
              
                  <button onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
                </div>
              </div>
            </div>
            
          ))}
          <div className="cart-total">
            <h3>Total: UGX {cartTotal}</h3>
            <Link to="/" className="continue-shopping">
              Continue Shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
}


 
 

 