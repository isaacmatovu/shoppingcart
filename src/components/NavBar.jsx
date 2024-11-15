

import { Link } from 'react-router-dom';
import '../styles/NavBar.css';
import { ShoppingCart } from 'lucide-react';


import { useContext, useState } from 'react';
import { CartContext } from './context';



export default function NavBar(){
  
    const[showLinks,setShowLinks] = useState(false)

    const { itemCount} = useContext(CartContext);


   



    return(
        <>
        <div className="navbar" >
            <div className="leftside">
              <div className="links" id={showLinks ? "hidden" : ""}>
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
                </div>
                <button onClick={()=>setShowLinks(!showLinks)}>Menu</button>
            </div>
            <div className="rightside">
             <Link to="/cart"><ShoppingCart size={32} color='white' />{itemCount} </Link>
            </div>
        </div>
        
        
        
        </>
    )
}

