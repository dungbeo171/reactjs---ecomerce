import React from "react";
import "./ProductIntroduction.css";
import productImage from "../Assets/product.jpg"; // ảnh sản phẩm của bạn

const ProductIntroduction = () => {
  return (
    <div className="product-intro-container">
      <div className="product-intro-content">
        <div className="product-intro-image">
          <img src={productImage} alt="Sản phẩm" />
        </div>
        <div className="product-intro-text">
          <h2>Giới Thiệu Sản Phẩm</h2>
          <p>
            Sản phẩm của chúng tôi được sản xuất từ những nguyên liệu chất lượng cao,
            đảm bảo độ bền và hiệu quả sử dụng tối ưu trong mọi công trình xây dựng.
          </p>
          <p>
            Chúng tôi cung cấp đa dạng các loại sản phẩm: gạch, xi măng, ngói, sỏi, cát… 
            đáp ứng mọi nhu cầu của khách hàng từ dự án nhỏ đến dự án lớn.
          </p>
          <button className="learn-more-btn">Tìm hiểu thêm</button>
        </div>
      </div>
    </div>
  );
};

export default ProductIntroduction;
