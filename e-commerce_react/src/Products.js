import axios from 'axios';
import React, {useState, useEffect} from 'react'

const Products = ()=>{
  const [data, setData]= useState([]);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
    .then(response=>{
      setData(response.data);
    })
    .catch(error =>{
      console.log(error);
    })
  },[]);
  return (
    <div className="container mt-4">
      <div className="row mb-4">
        <div className="col-12">
          <h1 className="text-center text-primary">Our Products</h1>
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-md-4">
          <select 
            className="form-select"
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
          </select>
        </div>
      </div>

      <div className="row">
        {data.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={`http://localhost:8000/storage/app/public${product.image}`}
                className="card-img-top"
                alt={product.name}
                style={{ height: '200px', objectFit: 'cover' }}
              />
              <div className="card-body">
                <h5 className="card-title">{product.name}</h5>
                <p className="card-text text-muted">{product.category}</p>
                <p className="card-text fw-bold text-primary">${product.price}</p>
                <button className="btn btn-primary btn-sm">
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Products;