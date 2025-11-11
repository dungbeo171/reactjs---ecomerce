import React, { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Checkout.css';

const Checkout = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const cartItems = location.state?.cartItems || [];

  const [paymentMethod, setPaymentMethod] = useState('COD');
  const [discountCode, setDiscountCode] = useState('');
  const [discountValue, setDiscountValue] = useState(0);
  const [total, setTotal] = useState(0);

  const subtotal = cartItems.reduce((acc, item) => {
    const numericPrice = Number(item.price.replace(/[^\d.-]/g, ''));
    return acc + numericPrice * item.quantity;
  }, 0);

  useEffect(() => {
    setTotal(subtotal - subtotal * (discountValue / 100));
  }, [subtotal, discountValue]);

  const applyDiscount = () => {
    if (discountCode === 'SALE10') {
      setDiscountValue(10);
      alert('Áp dụng giảm giá 10% thành công!');
    } else {
      setDiscountValue(0);
      alert('Mã giảm giá không hợp lệ!');
    }
  };

  const confirmPayment = () => {
    alert(`Thanh toán thành công bằng ${paymentMethod}! Tổng: ${total.toLocaleString()}₫`);
    navigate('/'); // sau khi thanh toán, về Home
  };

  if (cartItems.length === 0) {
    return <p>Chưa có sản phẩm trong giỏ hàng.</p>;
  }

  return (
    <div className="checkout-container">
      <h2>Thanh toán</h2>

      <table className="checkout-table">
        <thead>
          <tr>
            <th>Sản phẩm</th>
            <th>Giá</th>
            <th>Số lượng</th>
            <th>Tổng</th>
          </tr>
        </thead>
        <tbody>
          {cartItems.map(item => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.price}</td>
              <td>{item.quantity}</td>
              <td>{(Number(item.price.replace(/[^\d.-]/g, '')) * item.quantity).toLocaleString()}₫</td>
            </tr>
          ))}
        </tbody>
      </table>

      <div className="checkout-summary">
        <div className="discount-section">
          <input
            type="text"
            placeholder="Mã giảm giá"
            value={discountCode}
            onChange={e => setDiscountCode(e.target.value)}
          />
          <button onClick={applyDiscount}>Áp dụng</button>
        </div>

        <div className="payment-section">
          <label>Chọn phương thức thanh toán:</label>
          <select value={paymentMethod} onChange={e => setPaymentMethod(e.target.value)}>
            <option value="COD">COD</option>
            <option value="Transfer">Chuyển khoản</option>
            <option value="Card">Thẻ tín dụng</option>
          </select>
        </div>

        <h3>Tạm tính: {subtotal.toLocaleString()}₫</h3>
        <h3>Giảm giá: {discountValue}%</h3>
        <h2>Tổng cộng: {total.toLocaleString()}₫</h2>

        <button className="confirm-button" onClick={confirmPayment}>
          Xác nhận thanh toán
        </button>
      </div>
    </div>
  );
};

export default Checkout;
