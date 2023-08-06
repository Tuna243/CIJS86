import React, { useState } from "react";

const CartAmount = (props) => {
  const totalPrice = props.cart.reduce((prev, current) => {
    const total = prev + current.price;
    return total;
  }, 0);
//   
  const totalCategory = props.cart.reduce((prev, current) => {
    const oldArr = prev;
    if (oldArr.findIndex((v) => v === current.id)!==-1) {
      return oldArr;
    } else {
        return [...oldArr, current.id];
    }
  }, []);

  return (
    <div>
      <h1>CartAmount</h1>
      <h2>Quantity: {props.cart.length}</h2>
      <h2>Category: {totalCategory.length}</h2>

      <h2>Price: {totalPrice}</h2>
    </div>
  );
};

export default CartAmount;
