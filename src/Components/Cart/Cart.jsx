import React, { useState } from 'react';
import './Cart.css';

const Cart = ({ cartItems = [], setCartItems }) => {
  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [discountCode, setDiscountCode] = useState('');
  const [discountValue, setDiscountValue] = useState(0);

  const updateQuantity = (id, amount) => {
    console.log("Cart.jsx cartItems:", cartItems);
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

  const applyDiscount = () => {
    if (discountCode === 'SALE10') {
      setDiscountValue(10);
      alert('Áp dụng giảm giá 10% thành công!');
    } else {
      setDiscountValue(0);
      alert('Mã giảm giá không hợp lệ!');
    }
  };

  const subtotal = cartItems.reduce((acc, item) => {
  const numericPrice = Number(item.price.replace(/[^\d.-]/g, ''));
  return acc + numericPrice * item.quantity;
}, 0);
  

  const total = subtotal - subtotal * (discountValue / 100);

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
            <div>
              <input
                type="text"
                placeholder="Mã giảm giá"
                value={discountCode}
                onChange={e => setDiscountCode(e.target.value)}
              />
              <button onClick={applyDiscount}>Áp dụng</button>
            </div>

            <div>
              <label>Hình thức thanh toán:</label>
              <select
                value={paymentMethod}
                onChange={e => setPaymentMethod(e.target.value)}
              >
                <option value="COD">COD</option>
                <option value="Transfer">Chuyển khoản</option>
                <option value="Card">Thẻ tín dụng</option>
              </select>
            </div>

            <h3>Tạm tính: {subtotal.toLocaleString()}₫</h3>
            <h3>Giảm giá: {discountValue}%</h3>
            <h2>Tổng cộng: {total.toLocaleString()}₫</h2>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
