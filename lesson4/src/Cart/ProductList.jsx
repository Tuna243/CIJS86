import React from "react";

const ProductList = (props) => {
  const addToCart = (product) => {
    props.setCart((prev) => {
      const newArr = [...prev, product];
      
      return newArr;
    }); 
  };
  return (
    <div className="products-list">
      {props.products.map((product) => (
        <div key={product.id} className="product-item">
          <span>{product.name}</span>
          <span>${product.price}</span>
          <button onClick={() => addToCart(product)}>Add to Cart</button>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
