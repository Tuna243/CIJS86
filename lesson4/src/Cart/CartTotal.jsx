import React from "react";

const CartTotal = (props) => {
  const removeFromCart = (index) => {
    props.setCart((prev) => {
        const newArr = [...prev]
        newArr.splice(index,1)
    //   const newArr = prev.filter((v) => v.id === id);
      return newArr;
    });
  };
  return (
    <div className="cart">
      <h3>Shopping Cart</h3>
      {props.cart.length === 0 ? (
        <p>Cart is empty.</p>
      ) : (
        <ul>
          {props.cart.map((item,index) => (
            <li key={index}>
              <span>index:{index}</span>

              <span>{item.name}</span>
              <span>${item.price}</span>
              <button onClick={() => removeFromCart(index)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartTotal;
