import React from 'react';

const Ji = ({ product, color, category, price, status }) => {
  return (
    <tr className="text-center bg-white hover:bg-gray-50 transition-colors duration-300">
      <td className="py-3 px-6 border-b">{product}</td>
      <td className="py-3 px-6 border-b">{color}</td>
      <td className="py-3 px-6 border-b">{category}</td>
      <td className="py-3 px-6 border-b">{price}</td>
      <td className="py-3 px-6 border-b text-green-600">{status}</td>
    </tr>
  );
};

export default Ji;
