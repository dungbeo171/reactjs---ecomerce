import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { productsData } from "../Assets/productData";
import "./ProductDetail.css";

const ProductDetail = ({ cartItems, setCartItems }) => {
  const { id } = useParams(); // lấy id từ URL
  const product = productsData.find((p) => p.id === parseInt(id));

  const [quantity, setQuantity] = useState(1);

  if (!product) return <p>Sản phẩm không tồn tại</p>;

  const handleAddToCart = () => {
    const exist = cartItems.find((item) => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    alert(`${product.name} x${quantity} đã được thêm vào giỏ hàng!`);
    setQuantity(1); // reset về 1 sau khi thêm
  };

  return (
    <div className="product-detail-container">
      <div className="product-detail-image">
        <img src={product.image} alt={product.name} />
      </div>
      <div className="product-detail-info">
        <h2>{product.name}</h2>
        <p className="description">{product.description}</p>
        <p className="price">{product.price}</p>

        <div className="quantity-container">
          <label>Số lượng:</label>
          <input
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(parseInt(e.target.value) || 1)}
          />
        </div>

        <button className="add-to-cart" onClick={handleAddToCart}>
          Thêm vào giỏ hàng
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
