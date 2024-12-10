import React from 'react';
import { Link } from 'react-router-dom';

function Card({ product }) {
  return (
    <div
      className="border shadow-md p-4 rounded-lg hover:shadow-lg transition-shadow duration-200"
      key={product.id}
    >
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover mb-4 rounded-md"
      />
      <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-4">{product.description}</p>
      <Link
        to={`/product/${product.id}`}
        className="bg-green-700 text-white px-3 py-2 rounded-lg hover:bg-green-600 transition duration-200"
      >
        View Details
      </Link>
    </div>
  );
}

export default Card;
