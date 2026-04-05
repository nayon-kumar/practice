import React, { useState } from "react";

const ProductForm = ({ addProduct }) => {
  const [error, setError] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    if (name.length === 0) {
      setError("Please provide a product name!");
      return;
    } else if (price.length === 0) {
      setError("Please provide a price!");
      return;
    } else if (price < 0) {
      setError("Price can not be negative!");
      return;
    } else if (quantity < 0) {
      setError("Quantity can not be negative!");
      return;
    } else {
      setError("");
    }
    const newProduct = {
      name,
      price,
      quantity,
    };
    addProduct(newProduct);
  };
  return (
    <div>
      <h3 className="text-xl">Add a product: </h3>
      <form onSubmit={handleSubmit}>
        <input
          className="input mt-4"
          type="text"
          name="name"
          placeholder="Product Name"
        />
        <br />
        <input
          className="input mt-4"
          type="number"
          name="price"
          placeholder="Product Price"
        />
        <br />
        <input
          className="input mt-4"
          type="number"
          name="quantity"
          placeholder="Product Quantity"
        />
        <br />
        <input className="btn btn-primary mt-4" type="submit" value="Submit" />
      </form>
      <p className="mt-4 text-red-500">{error}</p>
    </div>
  );
};

export default ProductForm;
