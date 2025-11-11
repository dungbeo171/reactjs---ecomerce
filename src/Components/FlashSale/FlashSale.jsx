import React from "react";
import { productsData } from "../Assets/productData"; // lấy sản phẩm từ product.js
import { Link } from "react-router-dom";
import "./FlashSale.css";

const FlashSale = ({ cartItems = [], setCartItems = () => {} }) => {

  // Thêm sản phẩm vào giỏ hàng
  const handleAddToCart = (product) => {
    if (!cartItems || !setCartItems) return;

    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }

    alert(`${product.name} đã được thêm vào giỏ hàng!`);
  };

  // Lấy 4 sản phẩm tiếp theo sau FeaturedProducts (index 4 -> 7)
  const flashSaleProducts = productsData.slice(4, 8);

  return (
    <div className="flashsale-container">
      <h2 className="flashsale-title">Flash Sale</h2>
      <div className="flashsale-grid">
        {flashSaleProducts.map((product) => (
          <div className="flashsale-card" key={product.id}>
            <Link to={`/product/${product.id}`} className="product-link">
              <img src={product.image} alt={product.name} />
              <h3>{product.name}</h3>
              <p className="price">{product.price}</p>
            </Link>
            <button
              className="add-to-cart"
              onClick={() => handleAddToCart(product)}
            >
              Thêm vào giỏ
            </button>
          </div>
        ))}
      </div>
      <div style={{ marginTop: "20px" }}>
        <Link to="/product">
          <button className="see-more">Xem thêm sản phẩm</button>
        </Link>
      </div>
    </div>
  );
};

export default FlashSale;
