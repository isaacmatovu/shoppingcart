import { Link } from "react-router-dom";
import "../styles/NavBar.css";
import { ShoppingCart } from "lucide-react";

import { useContext, useState } from "react";
import { CartContext } from "./context";

export default function NavBar() {
  const [showLinks, setShowLinks] = useState(false);

  const { itemCount } = useContext(CartContext);

  return (
    <>
      <div className="navbar">
        <div className="leftside">
          <div className="links flex" id={showLinks ? "hidden" : ""}>
            <Link
              to="/"
              className="hover:opacity-20 duration-300 flex items-center gap-4 group"
            >
              <i className="fa-solid fa-house group-hover:rotate-45"></i>
              <p>Home</p>
            </Link>
            <Link
              to="/shop"
              className="hover:opacity-20 duration-300 flex items-center gap-4 group"
            >
              <i className="fa-brands fa-shopify group-hover:rotate-45"></i>
              <p>Shop</p>
            </Link>
          </div>
          <button onClick={() => setShowLinks(!showLinks)}>Menu</button>
        </div>
        <div className="rightside">
          <Link to="/cart">
            <ShoppingCart size={32} color="white" />
            {itemCount}{" "}
          </Link>
        </div>
      </div>
    </>
  );
}
