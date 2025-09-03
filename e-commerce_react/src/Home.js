import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-page">
      <section className="hero-section bg-primary text-white py-5">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6">
              <h1 className="display-4 fw-bold mb-3">Welcome to ShopEasy</h1>
              <p className="lead mb-4">Discover amazing products at unbeatable prices. Your one-stop shop for all your needs.</p>
              <Link to="/products" className="btn btn-light btn-lg rounded-pill px-4 py-2 fw-bold">
                Shop Now →
              </Link>
            </div>
            <div className="col-lg-6 text-center">
              <div className="hero-image-placeholder rounded-3 bg-white p-4 shadow">
                <span className="text-primary fs-1">🛍️</span>
                <p className="text-muted mt-2">Online Shopping</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row text-center mb-5">
            <div className="col-12">
              <h2 className="fw-bold">Why Shop With Us?</h2>
              <p className="text-muted">Experience the difference</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-3 text-center mb-4">
              <div className="feature-icon bg-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                <span className="text-white fs-3">🚚</span>
              </div>
              <h5 className="fw-bold">Fast Delivery</h5>
              <p className="text-muted">Quick and reliable shipping to your doorstep</p>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="feature-icon bg-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                <span className="text-white fs-3">💳</span>
              </div>
              <h5 className="fw-bold">Secure Payment</h5>
              <p className="text-muted">Your transactions are safe and protected</p>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="feature-icon bg-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                <span className="text-white fs-3">⭐</span>
              </div>
              <h5 className="fw-bold">Quality Products</h5>
              <p className="text-muted">Curated selection of premium items</p>
            </div>
            <div className="col-md-3 text-center mb-4">
              <div className="feature-icon bg-primary rounded-circle mx-auto mb-3 d-flex align-items-center justify-content-center" style={{width: '80px', height: '80px'}}>
                <span className="text-white fs-3">🔄</span>
              </div>
              <h5 className="fw-bold">Easy Returns</h5>
              <p className="text-muted">30-day money-back guarantee</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-light py-5">
        <div className="container">
          <div className="row text-center mb-4">
            <div className="col-12">
              <h2 className="fw-bold">Shop by Category</h2>
              <p className="text-muted">Explore our diverse collection</p>
            </div>
          </div>
          <div className="row">
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <span className="text-primary fs-1 mb-3">📱</span>
                  <h5 className="fw-bold">Electronics</h5>
                  <p className="text-muted">Latest gadgets and devices</p>
                  <Link to="/products?category=electronics" className="btn btn-outline-primary rounded-pill">
                    Browse
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <span className="text-primary fs-1 mb-3">👕</span>
                  <h5 className="fw-bold">Clothing</h5>
                  <p className="text-muted">Fashion for everyone</p>
                  <Link to="/products?category=clothing" className="btn btn-outline-primary rounded-pill">
                    Browse
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-md-4 mb-4">
              <div className="card border-0 shadow-sm h-100">
                <div className="card-body text-center p-4">
                  <span className="text-primary fs-1 mb-3">🏠</span>
                  <h5 className="fw-bold">Home & Kitchen</h5>
                  <p className="text-muted">Everything for your home</p>
                  <Link to="/products?category=home" className="btn btn-outline-primary rounded-pill">
                    Browse
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="container">
          <div className="row text-center">
            <div className="col-lg-8 mx-auto">
              <h2 className="fw-bold mb-3">Ready to Start Shopping?</h2>
              <p className="lead text-muted mb-4">Join thousands of satisfied customers who trust ShopEasy for their shopping needs.</p>
              <Link to="/products" className="btn btn-primary btn-lg rounded-pill px-5 py-3 fw-bold">
                Explore All Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;