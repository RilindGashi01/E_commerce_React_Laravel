import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-light py-2">
      <div className="container">
        <div className="row align-items-center">
          
          <div className="col-md-4">
            <p className="mb-0 small fw-bold">🛍️ ShopEasy</p>
          </div>

          <div className="col-md-4 text-center">
            <p className="mb-0 small">
              &copy; 2024 ShopEasy. All rights reserved.
            </p>
          </div>

          <div className="col-md-4 text-end">
            <p className="mb-0 small">support@shopeasy.com</p>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;