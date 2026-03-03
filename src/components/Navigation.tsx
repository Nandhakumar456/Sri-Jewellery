import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`site-header ${scrolled ? 'scrolled' : ''}`}>
      {/* Slim top utility bar */}
      <div className="top-bar">
        <div className="top-bar-inner container">
          <div className="top-bar-left">
            <a href="tel:+919942417666" className="top-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" /></svg>
              +91 99424 17666
            </a>
            <span className="top-divider">|</span>
            <a href="#" className="top-link">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></svg>
              Store Locator
            </a>
          </div>
          <div className="top-bar-center">
            <span>🔥 New Arrivals: Bridal Collection 2026 — <Link to="/gold" className="shop-now-link">SHOP NOW</Link></span>
          </div>
          <div className="top-bar-right">
            <a href="#" className="top-link">Gold Savings Scheme</a>
            <span className="top-divider">|</span>
            <a href="#" className="top-link">Track Order</a>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="main-header">
        <div className="header-container container">
          <Link to="/" className="header-logo">
            <img src="/logo.png" alt="Sri Jewellery" className="logo-img" />
          </Link>

          <div className="header-search">
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" /></svg>
            <input type="text" placeholder="Search for gold, silver, diamonds..." className="search-input" />
          </div>

          <div className="header-actions">
            <div className="rate-box">
              <div className="rate-item">
                <span className="rate-label">Gold Rate</span>
                <span className="rate-value">₹14,810/g</span>
              </div>
              <div className="rate-separator"></div>
              <div className="rate-item">
                <span className="rate-label">Silver Rate</span>
                <span className="rate-value">₹108/g</span>
              </div>
            </div>

            <Link to="/login" className="action-icon" title="My Account">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
              <span className="action-label">Account</span>
            </Link>

            <button className="action-icon" title="Wishlist">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" /></svg>
              <span className="action-label">Wishlist</span>
            </button>

            <Link to="/booking" className="action-icon cart-icon" title="Cart">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" /><line x1="3" y1="6" x2="21" y2="6" /><path d="M16 10a4 4 0 0 1-8 0" /></svg>
              <span className="cart-badge">0</span>
              <span className="action-label">Cart</span>
            </Link>

            {/* Mobile hamburger */}
            <button className="mobile-toggle" onClick={() => setMobileOpen(!mobileOpen)} aria-label="Menu">
              <span className={`hamburger ${mobileOpen ? 'open' : ''}`}>
                <span></span><span></span><span></span>
              </span>
            </button>
          </div>
        </div>
      </div>

      {/* Category navigation */}
      <nav className={`category-nav ${mobileOpen ? 'mobile-open' : ''}`}>
        <div className="container">
          <ul className="cat-links">
            <li><Link to="/" className="cat-link">Home</Link></li>
            <li><Link to="/gold" className="cat-link">New Arrivals ✨</Link></li>
            <li><Link to="/gold" className="cat-link active-category">Gold Jewellery</Link></li>
            <li><Link to="/silver" className="cat-link">Silver Jewellery</Link></li>
            <li><Link to="/gold" className="cat-link">Diamond</Link></li>
            <li><Link to="/gold" className="cat-link">Wedding Collections</Link></li>
            <li><Link to="/gold" className="cat-link">Coins & Bars</Link></li>
            <li><Link to="/booking" className="cat-link highlight-link">Offers 🎁</Link></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
