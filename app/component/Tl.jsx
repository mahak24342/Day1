import React from 'react';
import TableRow from './TableRow';
import Ji from "@/app/component/Ji"
const Table = () => {
  // Data for the table
  const tableData = [
    { product: 'Macbook Air', color: 'Silver', category: 'Laptop', price: '$2000', status: 'Soon' },
    { product: 'iPhone 13', color: 'Black', category: 'Phone', price: '$1200', status: 'Available' },
    { product: 'iPad Pro', color: 'Space Gray', category: 'Tablet', price: '$1500', status: 'In Stock' },
    { product: 'AirPods Pro', color: 'White', category: 'Earbuds', price: '$250', status: 'Out of Stock' }
  ];

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full w-full bg-white border border-gray-300 rounded-lg">
        <thead>
          <tr className="bg-gray-100 5">
            <th className="py-3 px-6  border-b ">Product</th>
            <th className="py-3 px-6 border-b ">Color</th>
            <th className="py-3 px-6 border-b ">Category</th>
            <th className="py-3 px-6 border-b ">Price</th>
            <th className="py-3 px-6 border-b ">Status</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((item, index) => (
            <Ji
              key={index}
              product={item.product}
              color={item.color}
              category={item.category}
              price={item.price}
              status={item.status}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
