import React, { useState } from "react";
import "./SearchBar.css";
import { Search } from "lucide-react"; // icon kính lúp
import { useNavigate } from "react-router-dom"; // dùng để navigate sang /product

const SearchBar = () => {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim() === "") return; // nếu rỗng thì không làm gì

    // Chuyển sang trang /product và truyền query qua URL
    navigate(`/product?search=${encodeURIComponent(query.trim())}`);
  };

  return (
    <div className="search-container">
      <form className="search-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tìm sản phẩm, danh mục..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button type="submit">
          <Search size={20} />
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
