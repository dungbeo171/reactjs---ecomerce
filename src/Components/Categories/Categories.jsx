import React from "react";
import { useNavigate } from "react-router-dom";
import "./Categories.css";
import cat from "../Assets/cat.jpg";
import ngoi from "../Assets/ngoi.jpg";
import ximang from "../Assets/ximang.jpg";
import soi from "../Assets/soi.jpg";
import gach from "../Assets/gach.jpg";

// Danh sách danh mục
const categories = [
  { id: 1, name: "Cát", image: cat },
  { id: 2, name: "Gạch", image: gach },
  { id: 3, name: "Ngói", image: ngoi },
  { id: 4, name: "Xi măng", image: ximang },
  { id: 5, name: "Sỏi", image: soi },
];

const Categories = () => {
  const navigate = useNavigate();

  const handleClick = (categoryName) => {
    // Chuyển sang trang product và truyền tên danh mục qua query hoặc state
    navigate(`/product?category=${encodeURIComponent(categoryName)}`);
  };

  return (
    <div className="categories-container">
      <h2 className="categories-title">Danh mục sản phẩm</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            className="category-card"
            key={category.id}
            onClick={() => handleClick(category.name)}
            style={{ cursor: "pointer" }}
          >
            <img src={category.image} alt={category.name} />
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
