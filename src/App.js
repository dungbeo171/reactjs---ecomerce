import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Product from './Pages/Product';
import News from './Pages/News';
import ProductDetail from './Components/ProductDetail/ProductDetail';
import Utilities from './Pages/Utilities';
import Contact from './Pages/Contact';
import CartPage from './Pages/Cart';
import Checkout from './Components/Checkout/Checkout'; // thêm route checkout
import NewsDetail from './Components/NewsDetail/NewsDetail';

function App() {
  const [menu, setMenu] = useState('home');
  const [cartItems, setCartItems] = useState([]); // state giỏ hàng duy nhất

  return (
    <BrowserRouter>
      <Navbar menu={menu} setMenu={setMenu} cartItems={cartItems} />

      <Routes>
        <Route
          path="/"
          element={<Home cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/product"
          element={<Product cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route path="/news/:id" element={<NewsDetail />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/news" element={<News />} />
        <Route path="/utilities" element={<Utilities />} />
        <Route path="/contact" element={<Contact />} />
        <Route
          path="/product/:id"
          element={<ProductDetail cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/cart"
          element={<CartPage cartItems={cartItems} setCartItems={setCartItems} />}
        />
        <Route
          path="/checkout"
          element={<Checkout />} // trang thanh toán
        />
      </Routes>

      <Footer menu={menu} setMenu={setMenu} />
    </BrowserRouter>
  );
}

export default App;
