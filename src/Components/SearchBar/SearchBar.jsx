import React, { useState } from "react";
import "./SearchBar.css";
import { Search } from "lucide-react"; // icon kính lúp

const SearchBar = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (onSearch) onSearch(query); // trả về từ khóa tìm kiếm cho parent
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
