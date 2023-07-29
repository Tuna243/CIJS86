// ProductCatalog.js
import React, { useState } from 'react';
import './ProductCatalog.css';

const ProductCatalog = () => {
  const initialProducts = [
    { id: 1, name: 'Product A', price: 10 },
    { id: 2, name: 'Product B', price: 15 },
    { id: 3, name: 'Product C', price: 20 },
  ];

  const [products, setProducts] = useState(initialProducts);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  return (
    <div className="product-catalog">
      <h2>Product Catalog</h2>
      <div className="products-list">
        {products.map((product) => (
          <div key={product.id} className="product-item">
            <span>{product.name}</span>
            <span>${product.price}</span>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
          </div>
        ))}
      </div>
      <div className="cart">
        <h3>Shopping Cart</h3>
        {cart.length === 0 ? (
          <p>Cart is empty.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <li key={item.id}>
                <span>{item.name}</span>
                <span>${item.price}</span>
                <button onClick={() => removeFromCart(item.id)}>Remove</button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default ProductCatalog;
