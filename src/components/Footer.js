import React from 'react';

import gallery1 from '../assets/images/gallery1.jpg';
import gallery2 from '../assets/images/gallery2.jpg';
import gallery3 from '../assets/images/gallery3.jpg';
import gallery4 from '../assets/images/gallery4.jpg';
import gallery5 from '../assets/images/gallery5.jpg';
import gallery6 from '../assets/images/gallery6.jpg';

const Footer = () => {
  return (
    <footer className="footer-section">
      <div className="footer-newsletter container">
        <div className="newsletter-text">
          <h3>Weekly Newsletter</h3>
          <p>There are many variations of passages of lorem ipsum available.</p>
        </div>
        <form className="newsletter-form" onSubmit={e => e.preventDefault()}>
          <input
            type="email"
            placeholder="Enter Your Mail"
            required
            className="newsletter-input"
          />
          <button type="submit" className="btn-subscribe">SUBSCRIBE</button>
        </form>
      </div>

      <div className="footer-content container">
        <div className="footer-column about-us">
          <h4>About Us</h4>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p><span role="img" aria-label="phone">📞</span> (+94) 11 434 7575</p>
          <p><span role="img" aria-label="location">📍</span> 42 Lily Ave, Colombo 00600</p>
        </div>

        <div className="footer-column latest-news">
          <h4>Latest News</h4>
          <ul>
            <li>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.<br />
              <small>5 Minutes Ago</small>
            </li>
            <li>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem.<br />
              <small>5 Minutes Ago</small>
            </li>
          </ul>
        </div>

        <div className="footer-column customer-service">
          <h4>Customer Service</h4>
          <ul>
            <li>Support Forums</li>
            <li>Communication</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Rules & Condition</li>
            <li>Contact Us</li>
          </ul>
        </div>

        <div className="footer-column gallery">
          <h4>Customer Service</h4>
          <div className="gallery-images">
            {[gallery1, gallery2, gallery3, gallery4, gallery5, gallery6].map((img, idx) => (
              <img
                key={idx}
                src={img}
                alt={`Gallery ${idx + 1}`}
                className="gallery-img"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="footer-bottom container">
        <p>Copyright © 2021 All Rights Reserved. Site By Xiteb®</p>
        <div className="social-icons">
          <a href="#facebook" aria-label="Facebook">🔵</a>
          <a href="#vimeo" aria-label="Vimeo">🎥</a>
          <a href="#twitter" aria-label="Twitter">🐦</a>
          <a href="#behance" aria-label="Behance">🅱️</a>
          <a href="#rss" aria-label="RSS">📡</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
