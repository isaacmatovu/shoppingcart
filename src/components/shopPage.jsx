import { useState, useEffect } from "react";

import "../styles/shopPage.css";
import Product from "./product";

export default function Shop() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function getproducts() {
      try {
        const response = await fetch("https://fakestoreapi.com/products");

        if (!response.ok) {
          throw new Error(`HTTP error:Status ${response.status}`);
        }
        const data = await response.json();

        setProducts(data);
        setError(null);
      } catch (err) {
        setError(err.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    }
    getproducts();
  }, []);

  return (
    <>
      {loading && (
        <div className="loader">
          <div className="loading-text">
            Loading<span className="dot">.</span>
            <span className="dot">.</span>
            <span className="dot">.</span>
          </div>
          <div className="loading-bar-background">
            <div className="loading-bar">
              <div className="white-bars-container">
                <div className="white-bar"></div>
                <div className="white-bar"></div>
                <div className="white-bar"></div>
                <div className="white-bar"></div>
                <div className="white-bar"></div>
                <div className="white-bar"></div>
                <div className="white-bar"></div>
                <div className="white-bar"></div>
                <div className="white-bar"></div>
                <div className="white-bar"></div>
              </div>
            </div>
          </div>
        </div>
      )}
      {error && <p>{error}</p>}
      {products && !error & !loading && (
        <div className="grid grid-cols-3 mt-20 gap-16">
          {products.map((product) => (
            <>
              <Product key={product.id} product={product} />
            </>
          ))}
        </div>
      )}
    </>
  );
}
