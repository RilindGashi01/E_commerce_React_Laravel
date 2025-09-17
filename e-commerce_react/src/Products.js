import axios from 'axios';
import React, {useState, useEffect} from 'react'
import { useSearchParams } from 'react-router-dom';

const Products = ()=>{
  const [data, setData]= useState([]);
  const [searchParams, setSearchParams] = useSearchParams([]);
  const category = searchParams.get('category') || '';

  useEffect(()=>{
    
    const getProducts = async()=>{
      try{
      let url = 'http://localhost:8000/api/products'

      if(category){
        url+=`?category=${category}`;
      }

      let response = await axios.get(url);
      setData(response.data);
    }catch(error){
      console.log('Error fetching products:', error);
    };
    }
    getProducts();
  },[category]);

  function handleSelectedCategory($selCategory){
    if($selCategory){
      setSearchParams({'category': $selCategory})
    }else{
      setSearchParams({})
    }
  }

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

            onChange={(e)=>handleSelectedCategory(e.target.value)}
          >
            <option value="">All Categories</option>
            <option value="Electronics">Electronics</option>
            <option value="Clothing">Clothing</option>
            <option value="Home & Kitchen">Home & Kitchen</option>
            <option value="Books">Books</option>
            <option value="Sports">Sports</option>
          </select>
        </div>
      </div>

      <div className="row">
        {data.map(product => (
          <div key={product.id} className="col-md-4 mb-4">
            <div className="card h-100">
              <img 
                src={`http://localhost:8000/storage/${product.image}`}
                className="card-img-top"
                alt={product.name}
                style={{ height: '350px', objectFit: 'cover' }}
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