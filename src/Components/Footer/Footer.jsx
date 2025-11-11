import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = ({ menu, setMenu }) => {
  const handleSetMenu = (value) => {
    if (typeof setMenu === 'function') {
      setMenu(value);
    }
  };

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo / tên công ty */}
        <div className="footer-logo">
          <h2>Vật Liệu Xây Dựng ABC</h2>
          <p>Chất lượng – Uy tín – Bền vững</p>
        </div>

        {/* Liên kết nhanh */}
        <div className="footer-links">
          <h3>Liên kết nhanh</h3>
          <ul>
            <li onClick={() => handleSetMenu("home")}>
              <Link to="/">Trang chủ</Link>
            </li>
            <li onClick={() => handleSetMenu("product")}>
              <Link to="/product">Sản phẩm</Link>
            </li>
            <li onClick={() => handleSetMenu("aboutus")}>
              <Link to="/aboutus">Giới thiệu</Link>
            </li>
            <li onClick={() => handleSetMenu("contact")}>
              <Link to="/contact">Liên hệ</Link>
            </li>
            <li onClick={() => handleSetMenu("news")}>
              <Link to="/news">Tin tức</Link>
            </li>
          </ul>
        </div>

        {/* Thông tin liên hệ */}
        <div className="footer-contact">
          <h3>Liên hệ</h3>
          <p>Địa chỉ: 123 Đường Xây Dựng, TP. HCM</p>
          <p>Hotline: 0909 123 456</p>
          <p>Email: info@vlxdabc.com</p>
        </div>

        {/* Mạng xã hội */}
        <div className="footer-social">
          <h3>Mạng xã hội</h3>
          <div className="social-icons">
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/124/124010.png" alt="Facebook" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/733/733579.png" alt="Twitter" /></a>
            <a href="#"><img src="https://cdn-icons-png.flaticon.com/512/1384/1384014.png" alt="Instagram" /></a>
          </div>
        </div>
      </div>

      {/* Bản quyền */}
      <div className="footer-bottom">
        <p>© 2025 Vật Liệu Xây Dựng ABC. Bảo lưu mọi quyền.</p>
      </div>
    </footer>
  );
};

export default Footer;
