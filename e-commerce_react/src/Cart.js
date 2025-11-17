import React from 'react'
import { useCartContext } from './CartContext'
import { useAuth } from "./AuthContext";
import { OrderAPI } from './api/api';

function Cart() {
  const {user} = useAuth();
  const {getAll,increaseQunatity,decreaseQuantity,deleteProduct} =useCartContext();
  const total = getAll().reduce((totalSum, product)=>{
    return totalSum + (product.price * product.quantity);
  },0)

  const proceedToCheckOut = async ()=> {
    try{
      const orderData = {
        items: getAll(),
        Total : total,
      }
      console.log(orderData)
      const response = await OrderAPI.createOrder(orderData)
      const order =response.data
    }catch(error){
      console.log("Order Failed: ",error)
      alert("Order Failed")
    }
  };

  return(
    <div className="container mt-4">
    <div className="row justify-content-center">
    <div className="col-lg-10">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="text-primary">
          <i className="bi bi-cart3 me-2"></i>
          Cart
        </h2>
        <span className="badge bg-primary fs-6">{getAll().length} Items</span>
      </div>

      <div className="card-body p-0">
          <div className="row bg-light fw-bold py-3 mx-0 border-bottom text-center">
            <div className="col-4">Product Name</div>
            <div className="col-2">Quantity</div>
            <div className="col-2">Price</div>
            <div className="col-2">Total</div>
            <div className="col-2">Action</div>
          </div>
      </div>
    <div className="card shadow">
        {getAll().map(product => (
          <div className="row align-items-center py-4 mx-0 border-bottom text-center">
            <div className="col-4">
              <h6 className="mb-1">{product.name}</h6>
            </div>

            <div className="col-2">
              <div className="d-flex align-items-center justify-content-center">
                <button className="btn btn-outline-secondary btn-sm" >
                  <i className="bi bi-dash" onClick={()=>decreaseQuantity(product.id)}></i>
                </button>
                <span className="mx-3 fw-bold fs-6" id='quantity'>{product.quantity}</span>
                <button className="btn btn-outline-secondary btn-sm">
                  <i className="bi bi-plus" onClick={()=>increaseQunatity(product.id)}></i>
                </button>
              </div>
            </div>

            <div className="col-2">
              <span className="fw-bold text-dark">${product.price}</span>
            </div>

            <div className="col-2">
              <span className="fw-bold text-success fs-6">${(product.price * product.quantity).toFixed(2)}</span>
            </div>

            <div className="col-2">
              <button className="btn btn-outline-danger btn-sm" onClick={()=>deleteProduct(product.id)}>
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        ))}

        <div className="card-footer bg-white">
          <div className="row justify-content-end">
            <div className="col-md-4">
              <div className="d-flex justify-content-between align-items-center mb-3">
                <strong className="fs-5">Total:</strong>
                <strong className="fs-4 text-primary">${total.toFixed(2)}</strong>
              </div>
              <div className="d-grid">
                <button className="btn btn-primary btn-lg" onClick={proceedToCheckOut}>
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
};
    

export default Cart