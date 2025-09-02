import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand fw-bold" to="/">
          ShopEasy
        </Link>
        
        <div className="navbar-nav ms-auto d-flex flex-row">
          <Link className="nav-link mx-2" to="/">Home</Link>
          <Link className="nav-link mx-2" to="/products">Products</Link>
          <Link className="nav-link mx-2" to="/cart">Cart</Link>
          <Link className="nav-link mx-2" to="/about">About</Link>
          <Link className="nav-link mx-2" to="/login">Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;