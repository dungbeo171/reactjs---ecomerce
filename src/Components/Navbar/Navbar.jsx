import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import logo from '../Assets/logo.jpg';
import cartIcon from '../Assets/cart.svg';

const Navbar = ({ cartItems = [] }) => {
  const location = useLocation();

  // Tính tổng số lượng sản phẩm trong giỏ
  const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);

  // Lấy path hiện tại
  const currentPath = location.pathname;

  return (
    <div className="navbar">
      <div className="nav-logo">
        <img src={logo} alt="Logo" />
      </div>

      <ul className="nav-menu">
        <li className={currentPath === '/' ? 'active' : ''}>
          <Link to="/">Home</Link>
          {currentPath === '/' && <hr />}
        </li>
        <li className={currentPath === '/aboutus' ? 'active' : ''}>
          <Link to="/aboutus">About Us</Link>
          {currentPath === '/aboutus' && <hr />}
        </li>
        <li className={currentPath.startsWith('/product') ? 'active' : ''}>
          <Link to="/product">Product</Link>
          {currentPath.startsWith('/product') && <hr />}
        </li>
        <li className={currentPath === '/news' ? 'active' : ''}>
          <Link to="/news">News</Link>
          {currentPath === '/news' && <hr />}
        </li>
        <li className={currentPath === '/feature' ? 'active' : ''}>
          <Link to="/utilities">Utilities</Link>
          {currentPath === '/feature' && <hr />}
        </li>
        <li className={currentPath === '/contact' ? 'active' : ''}>
          <Link to="/contact">Contact</Link>
          {currentPath === '/contact' && <hr />}
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
