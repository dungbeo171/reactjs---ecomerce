import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { productsData } from '../Assets/productData';
import './Products.css';
import { useLocation, useNavigate } from 'react-router-dom';

const Products = ({ cartItems, setCartItems }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);

  const initialCategory = queryParams.get('category') || 'Tất cả';
  const initialSearch = queryParams.get('search') || '';

  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [searchTerm, setSearchTerm] = useState(initialSearch);
  const [searchInput, setSearchInput] = useState(initialSearch); // input tạm để submit
  const [quantities, setQuantities] = useState({});

  useEffect(() => {
    setSelectedCategory(queryParams.get('category') || 'Tất cả');
    setSearchTerm(queryParams.get('search') || '');
    setSearchInput(queryParams.get('search') || '');
  }, [location.search]);

  const categories = ['Tất cả', 'Cát', 'Xi măng', 'Gạch', 'Ngói', 'Thép'];
  const fuse = new Fuse(productsData, { keys: ['name'], threshold: 0.3 });

  // Lọc theo category và searchTerm
  const categoryFiltered =
    selectedCategory === 'Tất cả'
      ? productsData
      : productsData.filter(p => p.category === selectedCategory);

  const filteredProducts =
    searchTerm.trim() === ''
      ? categoryFiltered
      : fuse
          .search(searchTerm)
          .map(r => r.item)
          .filter(
            p => selectedCategory === 'Tất cả' || p.category === selectedCategory
          );

  // Thêm vào giỏ hàng
  const handleAddToCart = product => {
    const quantity = quantities[product.id] || 1;
    const exist = cartItems.find(item => item.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + quantity }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity }]);
    }
    alert(`${product.name} x${quantity} đã được thêm vào giỏ hàng!`);
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  // Click vào danh mục
  const handleCategoryClick = cat => {
    setSelectedCategory(cat);
    navigate(`/product?category=${encodeURIComponent(cat)}&search=${encodeURIComponent(searchTerm)}`);
  };

  // Submit search
  const handleSearchSubmit = e => {
    e.preventDefault();
    setSearchTerm(searchInput);
    navigate(`/product?category=${encodeURIComponent(selectedCategory)}&search=${encodeURIComponent(searchInput)}`);
  };

  // Click vào sản phẩm để đi tới ProductDetail
  const handleProductClick = productId => {
    navigate(`/product/${productId}`);
  };

  return (
    <div className="products">
      <aside className="products-sidebar">
        <h3>Danh mục</h3>
        <ul>
          {categories.map(cat => (
            <li
              key={cat}
              className={selectedCategory === cat ? 'active' : ''}
              onClick={() => handleCategoryClick(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <div className="products-main">
        <form className="search-bar" onSubmit={handleSearchSubmit}>
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={searchInput}
            onChange={e => setSearchInput(e.target.value)}
          />
          <button type="submit">Tìm</button>
        </form>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product.id)}
              style={{ cursor: 'pointer' }}
            >
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <span>{product.price}</span>

              <div className="quantity" onClick={e => e.stopPropagation()}>
                <label>Số lượng:</label>
                <input
                  type="number"
                  min="1"
                  value={quantities[product.id] || 1}
                  onChange={e =>
                    setQuantities({
                      ...quantities,
                      [product.id]: parseInt(e.target.value) || 1
                    })
                  }
                />
              </div>

              <button
                onClick={e => {
                  e.stopPropagation(); // ngăn click card
                  handleAddToCart(product);
                }}
              >
                Thêm vào giỏ hàng
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
