import React from 'react';
import { Facebook, Instagram, Linkedin } from 'lucide-react';
import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="savoy-footer">
      <div className="footer-container">
        
        {/* Left Side: Links & Copyright */}
        <div className="footer-left">
          <nav className="footer-links">
            <a href="/about">About Us</a>
            <a href="/blog">Blog</a>
            <a href="/faqs">FAQs</a>
            <a href="/order-tracking">Order Tracking</a>
            <a href="/contact">Contact</a>
          </nav>
          
          <div className="footer-copyright">
            <p>© 2026 NordicMade — Secure payments with Apple Pay, PayPal and Stripe</p>
          </div>
        </div>

        {/* Right Side: Social Icons */}
        <div className="footer-right">
          <div className="social-icons">
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <Facebook size={18} fill="currentColor" stroke="none" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <Instagram size={18} />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <Linkedin size={18} fill="currentColor" stroke="none" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;