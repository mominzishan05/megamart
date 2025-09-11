import React, { useEffect, useState } from "react";
import "../Css/HomePage.css";
import { useDispatch } from "react-redux";
import { addtocart } from "../Features/cartSlice";

const HomePage = () => {
  const [products, setProducts] = useState([]);
  const dispatch = useDispatch();

  const fetchData = async () => {
    const response = await fetch("https://dummyjson.com/products");
    const data = await response.json();
    setProducts(data.products);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <section className="home-page">
      <div className="home-container">
        <h1>Our Products</h1>
        <div className="products-grid">
          {products.map((item) => (
            <div className="product-card" key={item.id}>
              <div className="product-img">
                <img src={item.thumbnail} alt={item.title} />
              </div>
              <div className="product-details">
                <h2>{item.title}</h2>
                <p className="price">₹{item.price}</p>
                <button onClick={() => dispatch(addtocart(item))}>
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomePage;
