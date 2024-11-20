import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from './context';
import '../styles/cart.css';

export default function Cart() {
  const { cartItems, removeFromCart, updateQuantity, cartTotal } = useContext(CartContext)

function handlesubmit(){
  if(cartTotal > 500000){
    alert("my niga you made it in life ")
  }
  alert("work harder this money is still little")
  return;
}


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
              <img src={item.image} alt={item.title} srcSet={`${item.image} 400w, ${item.image} 800w, ${item.image} 1200w`} 
              sizes = "(max-width: 400px) 100vw, (max-width: 800px) 50vw, 33vw"
              className="cart-item-image" />
              <div className="cart-item-details">
                <h3 className='titlecart'>{item.title}</h3>
                <p className='para-cart'>UGX :{item.price * item.quantity}</p>
                <p className='para-cart'>Quantity :{item.quantity}</p>
                <div className="quantity-controls"> 
                  <input
                    type="number"
                    className='inputitem'
                    value={item.quantity}
                    min="1"
                    onChange={(e) => updateQuantity(item.id, e.target.value)}
                  />
               
                  <button className='remove-btn' onClick={() => removeFromCart(item.id)}>Remove</button>
                </div>
                </div>
              </div>
            </div>
          
            
          ))}
          <div className="cart-total">
            <div>
            <h3 className='totaltext'>Total: UGX {cartTotal}</h3>
            <Link to="/" className="continue-shopping">
              Continue Shopping
            </Link>
            </div>
            <button className='check-btn' onClick={handlesubmit}>checkout</button>
          </div>
        </>
      )}
    </div>
  );
}


 
 

 