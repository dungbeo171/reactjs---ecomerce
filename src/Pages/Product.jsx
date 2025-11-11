import React from 'react';
import Products from '../Components/Products/Products';

const Product = ({ cartItems, setCartItems }) => {
  console.log("CartItems hiện tại:", cartItems);
  return <Products cartItems={cartItems} setCartItems={setCartItems} />;
  
};

export default Product;
