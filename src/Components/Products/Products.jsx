import React, { useState, useEffect } from 'react';
import Fuse from 'fuse.js';
import { productsData } from '../Assets/productData';
import './Products.css';

const Products = ({ cartItems, setCartItems }) => {
  const [selectedCategory, setSelectedCategory] = useState('Tất cả');
  const [searchTerm, setSearchTerm] = useState('');
  const [quantities, setQuantities] = useState({});

  const categories = ['Tất cả', 'Cát', 'Xi măng', 'Gạch', 'Ngói', 'Thép'];
  const fuse = new Fuse(productsData, { keys: ['name'], threshold: 0.3 });

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

    // Reset số lượng về 1
    setQuantities(prev => ({ ...prev, [product.id]: 1 }));
  };

  // Debug log
  useEffect(() => {
    console.log("CartItems hiện tại:", cartItems);
  }, [cartItems]);

  return (
    <div className="products">
      <aside className="products-sidebar">
        <h3>Danh mục</h3>
        <ul>
          {categories.map(cat => (
            <li
              key={cat}
              className={selectedCategory === cat ? 'active' : ''}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat}
            </li>
          ))}
        </ul>
      </aside>

      <div className="products-main">
        <div className="search-bar">
          <input
            type="text"
            placeholder="Tìm kiếm..."
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="products-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} />
              <h4>{product.name}</h4>
              <p>{product.description}</p>
              <span>{product.price}</span>

              <div className="quantity">
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

              <button onClick={() => handleAddToCart(product)}>
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
