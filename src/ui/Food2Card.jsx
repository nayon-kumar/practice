import React from "react";

const Food2Card = ({ food }) => {
  return (
    <div className="border p-5 m-5 rounded-2xl">
      <p>Name: {food.dish_name}</p>
      <p>Category: {food.category}</p>
      <p>Price: {food.price}</p>
      <p>Rating: {food.rating}</p>
    </div>
  );
};

export default Food2Card;
