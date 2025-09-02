import React, { useState, useEffect } from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Home from './Home';
import Products from './Products';
import Cart from './Cart';
import About from './About';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Router>
      <div className='App d-flex flex-column min-vh-100'>
        <main className="flex-grow-1">
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/products' element={<Products />}/>
          <Route path='/about' element={<About />}/>
          <Route path='/cart' element={<Cart />}/>
          <Route path='/login' element={<Login />}/>
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App;