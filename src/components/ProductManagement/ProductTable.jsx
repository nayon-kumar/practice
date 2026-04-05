import React from "react";

const ProductTable = ({ products }) => {
  return (
    <div className="overflow-x-auto p-4">
      <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden shadow-md">
        <thead className="bg-gray-800 text-white">
          <tr>
            <th className="py-3 px-4">ID</th>
            <th className="py-3 px-4">Name</th>
            <th className="py-3 px-4">Price</th>
            <th className="py-3 px-4">Quantity</th>
            <th className="py-3 px-4">Action</th>
          </tr>
        </thead>

        <tbody className="text-center">
          {products.map((product, index) => (
            <tr
              key={index}
              className="border-t hover:bg-gray-100 transition duration-200"
            >
              <td className="py-2 px-4">{index + 1}</td>
              <td className="py-2 px-4">{product.name}</td>
              <td className="py-2 px-4">${product.price}</td>
              <td className="py-2 px-4">{product.quantity}</td>

              {/* Action Button */}
              <td className="py-2 px-4">
                <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-lg text-sm">
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProductTable;
