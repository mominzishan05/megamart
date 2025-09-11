import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removecart } from "../Features/cartSlice";
import "../Css/CartPage.css";

const CartPage = () => {
  const cartItems = useSelector((state) => state.carts.items);
  const dispatch = useDispatch();

  return (
    <section className="cart-page">
      <div className="cart-container">
        <h1>Your Cart ({cartItems.length})</h1>

        {cartItems.length === 0 ? (
          <p className="empty-cart">There are no products in your cart.</p>
        ) : (
          <div className="cart-items">
            {cartItems.map((item) => (
              <div className="cart-card" key={item.id}>
                <div className="cart-img">
                  <img src={item.thumbnail} alt={item.title} />
                </div>
                <div className="cart-details">
                  <h2>{item.title}</h2>
                  <p className="price">₹{item.price}</p>
                  <button
                    className="remove-btn"
                    onClick={() => dispatch(removecart(item.id))}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default CartPage;
