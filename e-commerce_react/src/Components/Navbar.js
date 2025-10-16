import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../AuthContext';


const Navbar = () => {
  const {user, loading} =useAuth();
  console.log(user);
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
      {user?( <div className="nav-item dropdown">
              <button 
                className="btn nav-link mx-2 text-light dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                style={{ background: 'none', border: 'none' }}
              >
                {user.name}
              </button>
              <ul className="dropdown-menu dropdown-menu-end">
                <li>
                  <Link className="dropdown-item" to="/profile">
                    <i className="bi bi-person me-2"></i>
                    Profile
                  </Link>
                </li>
                <li><hr className="dropdown-divider" /></li>
                <li>
                  <button 
                    className="dropdown-item text-danger" 
                    onClick={() => {
                      localStorage.removeItem('auth_token');
                      window.location.href = '/login';
                    }}
                  >
                    <i className="bi bi-box-arrow-right me-2"></i>
                    Sign Out
                  </button>
                </li>
              </ul>
            </div>
             ) :(
            <Link className="nav-link mx-2" to="/login">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;