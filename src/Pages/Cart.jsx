import React from 'react';
import Cart from '../Components/Cart/Cart'; // component nhỏ, không đổi
// import { useState } from 'react';  // không cần nếu state đã quản lý ở App.js

const CartPage = ({ cartItems, setCartItems }) => {
  return (
    <div>
      <Cart cartItems={cartItems} setCartItems={setCartItems} />
    </div>
  );
};

export default CartPage;
