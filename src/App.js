import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Product from './Pages/Product';
import News from './Pages/News';
import Feature from './Pages/Feature';
import Contact from './Pages/Contact';
import Cart from './Pages/Cart';

function App() {
  const [menu, setMenu] = useState('home');
  const [cartItems, setCartItems] = useState([]);
  console.log("App.js cartItems:", cartItems); // state giỏ hàng duy nhất

  return (
    <BrowserRouter>
      <Navbar menu={menu} setMenu={setMenu} cartItems={cartItems} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/product"
          element={<Product cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/feature" element={<Feature />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/cart"
          element={<Cart cartItems={cartItems} setCartItems={setCartItems} />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
