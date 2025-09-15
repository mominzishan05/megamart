import React from "react";
import "../Css/Contact.css";

const Contact = () => {
  return (
    <section className="contact-page">
      <div className="contact-container">
        <div className="contact-info">
          <h1>Contact Us</h1>
          <p>
            Have questions or need assistance? Reach out to us and our team will
            get back to you as soon as possible.
          </p>
          <div className="info-items">
            <div className="info-item">
              <h3>Email</h3>
              <p>support@megamart.com</p>
            </div>
            <div className="info-item">
              <h3>Phone</h3>
              <p>+91 9876543210</p>
            </div>
            <div className="info-item">
              <h3>Address</h3>
              <p>123 Mega Street, Shopping City, India</p>
            </div>
          </div>
        </div>

        <div className="contact-form">
          <h2>Send Us a Message</h2>
          <form>
            <input type="text" placeholder="Your Name"  />
            <input type="email" placeholder="Your Email"  />
            <textarea placeholder="Your Message" rows="5" ></textarea>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
