import React from 'react';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cartIcon from '../Assets/cart.svg';
import { Link } from 'react-router-dom';

const Navbar = ({ menu, setMenu, cartItems = [] }) => {
  // Tính tổng số lượng sản phẩm
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-menu">
        <li onClick={() => setMenu('home')}>
          <Link to="/">Home</Link>
          {menu === 'home' && <hr />}
        </li>
        <li onClick={() => setMenu('aboutus')}>
          <Link to="/aboutus">About Us</Link>
          {menu === 'aboutus' && <hr />}
        </li>
        <li onClick={() => setMenu('product')}>
          <Link to="/product">Product</Link>
          {menu === 'product' && <hr />}
        </li>
        <li onClick={() => setMenu('news')}>
          <Link to="/news">News</Link>
          {menu === 'news' && <hr />}
        </li>
        <li onClick={() => setMenu('feature')}>
          <Link to="/feature">Feature</Link>
          {menu === 'feature' && <hr />}
        </li>
        <li onClick={() => setMenu('contact')}>
          <Link to="/contact">Contact</Link>
          {menu === 'contact' && <hr />}
        </li>
      </ul>
      <div className="cart">
        <Link to="/cart">
          <img src={cartIcon} alt="Cart" />
          {totalQuantity > 0 && <span className="cart-count">{totalQuantity}</span>}
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
