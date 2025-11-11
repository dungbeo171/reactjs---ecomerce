import React from "react";
import "./FeaturedProducts.css";

// Mảng demo sản phẩm
const products = [
  {
    id: 1,
    name: "Gạch men cao cấp",
    price: "$25",
    image: "https://images.unsplash.com/photo-1581090700227-0e8b5f38c8fc?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 2,
    name: "Xi măng chịu lực",
    price: "$15",
    image: "https://images.unsplash.com/photo-1601582589452-2f9e6b95dbd1?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 3,
    name: "Sơn trang trí",
    price: "$30",
    image: "https://images.unsplash.com/photo-1581091215366-1d8c2eafbc18?auto=format&fit=crop&w=500&q=60",
  },
  {
    id: 4,
    name: "Ống nước PVC",
    price: "$12",
    image: "https://images.unsplash.com/photo-1593451185094-5c99da1f90ef?auto=format&fit=crop&w=500&q=60",
  },
];

const FeaturedProducts = () => {
  return (
    <div className="featured-container">
      <h2 className="featured-title">Sản phẩm nổi bật</h2>
      <div className="featured-grid">
        {products.map((product) => (
          <div className="product-card" key={product.id}>
            <img src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <p className="price">{product.price}</p>
            <button className="add-to-cart">Thêm vào giỏ</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeaturedProducts;
