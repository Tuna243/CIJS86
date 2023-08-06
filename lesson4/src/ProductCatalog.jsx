// ProductCatalog.js
import React, { useState } from "react";
import "./ProductCatalog.css";
import ProductList from "./Cart/ProductList";
import CartTotal from "./Cart/CartTotal";
import CartAmount from "./Cart/CartAmount";

const ProductCatalog = (props) => {
  const initialProducts = [
    { id: 1, name: "Product A", price: 10 },
    { id: 2, name: "Product B", price: 15 },
    { id: 3, name: "Product C", price: 20 },
  ];
  // 
  const [cart, setCart] = useState([]);

  return (
    <div className="product-catalog">
      {/* Title */}
      <h2>{props.title}</h2>
      {/* List */}
      <ProductList products={initialProducts} setCart={setCart}/>
      {/* Cart total */}
      <CartTotal cart={cart} setCart={setCart}/>
      {/* Amount */}
      <CartAmount cart={cart}/>
    </div>
  );
};

export default ProductCatalog;
