import React from 'react';

const About = () => {
  return (
    <div className="container mt-4">
      <div className="row text-center mb-5">
        <div className="col-12">
          <h1 className="display-4 fw-bold text-primary">About ShopEasy</h1>
          <p className="lead">Your Trusted Shopping Destination</p>
        </div>
      </div>

      <div className="row">
        <div className="col-lg-6 mb-4">
          <h2 className="fw-bold mb-3">Our Story</h2>
          <p className="text-muted">
            Founded in 2024, ShopEasy was born from a simple idea: make online shopping 
            effortless, reliable, and enjoyable for everyone. We believe that finding 
            quality products shouldn't be complicated or time-consuming.
          </p>
          <p className="text-muted">
            What started as a small project has grown into a trusted platform where 
            thousands of customers find exactly what they're looking for at prices 
            that won't break the bank.
          </p>
        </div>

        <div className="col-lg-6 mb-4" >
          <h2 className="fw-bold mb-3 ms-2">Why Choose Us?</h2>
          <div className="d-flex align-items-center mb-3 ms-2">
            <div className="bg-primary rounded-circle p-2 me-3" style={{minWidth: '40px', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span className="text-white fw-bold">✓</span>
            </div>
            <div>
              <h6 className="fw-bold mb-0">Quality Products</h6>
              <small className="text-muted">Carefully curated selection</small>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3 ms-2">
            <div className="bg-primary rounded-circle p-2 me-3" style={{minWidth: '40px', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span className="text-white fw-bold">✓</span>
            </div>
            <div>
              <h6 className="fw-bold mb-0">Fast Shipping</h6>
              <small className="text-muted">Quick and reliable delivery</small>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3 ms-2">
            <div className="bg-primary rounded-circle p-2 me-3" style={{minWidth: '40px', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span className="text-white fw-bold">✓</span>
            </div>
            <div>
              <h6 className="fw-bold mb-0">Secure Payments</h6>
              <small className="text-muted">Your data is always protected</small>
            </div>
          </div>
          <div className="d-flex align-items-center mb-3 ms-2">
            <div className="bg-primary rounded-circle p-2 me-3" style={{minWidth: '40px', minHeight: '40px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
              <span className="text-white fw-bold">✓</span>
            </div>
            <div>
              <h6 className="fw-bold mb-0">24/7 Support</h6>
              <small className="text-muted">We're here to help</small>
            </div>
          </div>
        </div>
      </div>

      <div className="row bg-light rounded-3 p-4 mt-4 mx-1">
        <div className="col-md-3 text-center">
          <h3 className="fw-bold text-primary">10,000+</h3>
          <p className="text-muted mb-0">Happy Customers</p>
        </div>
        <div className="col-md-3 text-center">
          <h3 className="fw-bold text-primary">500+</h3>
          <p className="text-muted mb-0">Quality Products</p>
        </div>
        <div className="col-md-3 text-center">
          <h3 className="fw-bold text-primary">24/7</h3>
          <p className="text-muted mb-0">Customer Support</p>
        </div>
        <div className="col-md-3 text-center">
          <h3 className="fw-bold text-primary">100%</h3>
          <p className="text-muted mb-0">Satisfaction Guaranteed</p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-12 text-center">
          <h2 className="fw-bold mb-3">Our Mission</h2>
          <p className="text-muted fs-5">
            "To provide a seamless shopping experience with quality products, 
            competitive prices, and exceptional customer service that you can trust."
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;