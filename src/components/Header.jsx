import React from 'react';
import { Menu, Search, Heart, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import './css/Header.css';

const Header = () => {
  return (
    <header className="savoy-header">
      <div className="header-container">
        
        {/* Left Section */}
        <div className="header-left">
          <button className="icon-btn menu-btn">
            <Menu size={20} strokeWidth={1.5} />
          </button>
          <nav className="nav-links"> 
            <a href="/">Shop</a>
            <a href="/">Categories</a>
            <Link to="/cart">Cart</Link>
            <a href="/">Elements</a>
          </nav>
        </div>

        {/* Center Section (Logo) */}
        <div className="header-center">
          <Link to="/"><h1 className="logo">S A V O Y</h1></Link>
        </div>

        {/* Right Section */}
        <div className="header-right">
          <button className="icon-btn">
            <Search size={20} strokeWidth={1.5} />
          </button>
          
          <a href="/login" className="sign-in">Sign In</a>

          <button className="icon-btn">
            <Heart size={20} strokeWidth={1.5} />
          </button>

          <button className="icon-btn cart-btn">
            <ShoppingCart size={20} strokeWidth={1.5} />
            <span className="cart-count">0</span>
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;