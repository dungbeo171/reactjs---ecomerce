import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Cart.css';

const Cart = ({ cartItems = [], setCartItems }) => {
  const navigate = useNavigate();

  const updateQuantity = (id, amount) => {
    setCartItems(prev =>
      prev.map(item =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + amount) }
          : item
      )
    );
  };

  const removeItem = id => {
    setCartItems(prev => prev.filter(item => item.id !== id));
  };

  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = Number(item.price.replace(/[^\d.-]/g, ''));
    return acc + numericPrice * item.quantity;
  }, 0);

  const handleCheckout = () => {
    // Chuyển sang trang thanh toán, có thể truyền cartItems qua state
    navigate('/checkout', { state: { cartItems } });
  };

  return (
    <div className="cart">
      <h2>Giỏ hàng</h2>

      {cartItems.length === 0 ? (
        <p>Chưa có sản phẩm trong giỏ hàng.</p>
      ) : (
        <>
          <table className="cart-table">
            <thead>
              <tr>
                <th>Sản phẩm</th>
                <th>Giá</th>
                <th>Số lượng</th>
                <th>Tổng</th>
                <th>Xóa</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <img src={item.image} alt={item.name} className="cart-img" />
                    {item.name}
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button onClick={() => updateQuantity(item.id, -1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, 1)}>+</button>
                  </td>
                  <td>{(Number(item.price.replace(/[^\d.-]/g, '')) * item.quantity).toLocaleString()}₫</td>
                  <td>
                    <button onClick={() => removeItem(item.id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="cart-summary">
            <h3>Tạm tính: {subtotal.toLocaleString()}₫</h3>
            <h2>Tổng cộng: {subtotal.toLocaleString()}₫</h2>

            <button className="checkout-button" onClick={handleCheckout}>
              Mua ngay
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
