import React, { useState } from "react";
import ProductForm from "./ProductForm";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);
  const addProduct = (newProduct) => {
    setProducts([...products, newProduct]);
  };

  return (
    <div>
      <ProductForm addProduct={addProduct} />
      <ProductTable products={products} />
    </div>
  );
};

export default ProductManagement;
