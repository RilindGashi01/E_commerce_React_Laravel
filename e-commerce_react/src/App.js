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
import Register from './Register';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import { AuthProvider } from './AuthContext';
import Profile from './Components/Profile';

function App() {
  return (
    <AuthProvider>
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
          <Route path='/register' element={<Register />}/>
          <Route path='/profile' element={<Profile />}/>
        </Routes>
        </main>
        <Footer />
      </div>
    </Router>
    </AuthProvider>
  )
}

export default App;