import React, { useState, useEffect } from "react";
import "../Css/About.css";

const About = () => {
  const [products, setProducts] = useState(0);
  const [customers, setCustomers] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const targetProducts = 500;
    const targetCustomers = 400;
    const targetYears = 111;

    const interval = setInterval(() => {
      setProducts((prev) =>
        prev + 5 > targetProducts ? targetProducts : prev + 5
      );
      setCustomers((prev) =>
        prev + 2 > targetCustomers ? targetCustomers : prev + 2
      );
      setYears((prev) => (prev + 1 > targetYears ? targetYears : prev + 1));
    }, 50);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-page">
      <div className="about-container">
        <div className="about-image">
          <img
            src="https://www.svgrepo.com/show/530393/shopping-cart.svg"
            alt="MegaMart Store"
          />
        </div>

        <div className="about-content">
          <h1>About MegaMart</h1>
          <p>
            Welcome to <strong>MegaMart</strong> – your ultimate shopping
            destination! We offer a wide range of products from groceries,
            electronics, fashion, to home essentials.
          </p>
          <p>
            Our mission is to provide top-quality products at affordable prices
            with a seamless online shopping experience. From daily necessities to
            luxury items, we have everything to make your life easier and more
            enjoyable.
          </p>

          <div className="about-stats">
            <div className="stat">
              <h2>{products}+</h2>
              <p>Products</p>
            </div>
            <div className="stat">
              <h2>{customers}+</h2>
              <p>Happy Customers</p>
            </div>
            <div className="stat">
              <h2>{years}+</h2>
              <p>Years in Business</p>
            </div>
          </div>

          <div className="about-additional">
            <h2>Why Choose MegaMart?</h2>
            <ul>
              <li>Fast & reliable delivery</li>
              <li>Secure online payments</li>
              <li>Best prices and discounts</li>
              <li>24/7 customer support</li>
              <li>Wide variety of products</li>
            </ul>

            <p>
              Join thousands of satisfied customers who trust MegaMart for their
              everyday shopping. We make online shopping easy, safe, and fun!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
