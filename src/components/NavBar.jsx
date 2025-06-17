import { Link } from "react-router-dom";
import { useState } from "react";
import { Menu, X, ShoppingCart } from "lucide-react";
import useCartStore from "./context";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { items } = useCartStore();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Left Side with Links */}
          <div className="flex items-center">
            <div className="hidden md:flex items-center space-x-8">
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

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Right Side with Cart */}
          <div className="flex items-center">
            <Link to="/cart" className="flex items-center gap-2">
              <ShoppingCart size={32} color="black" />
              <span className="text-black">{items.length}</span>
            </Link>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                to="/"
                className="block hover:opacity-20 duration-300 flex items-center gap-4 group px-3 py-2"
              >
                <i className="fa-solid fa-house group-hover:rotate-45"></i>
                <p>Home</p>
              </Link>
              <Link
                to="/shop"
                className="block hover:opacity-20 duration-300 flex items-center gap-4 group px-3 py-2"
              >
                <i className="fa-brands fa-shopify group-hover:rotate-45"></i>
                <p>Shop</p>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
