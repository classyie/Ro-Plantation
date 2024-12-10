import React from 'react';
import { products } from '../data/products'; 
import Card from './Card'; 

const Catalogue = () => {
  return (
    <div className="container mx-auto px-4 py-8 bg-white">
      <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
        Product Catalogue
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <Card product={product} key={product.id} />
        ))}
      </div>
    </div>
  );
};

export default Catalogue;
