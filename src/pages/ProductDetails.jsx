import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "../data/products";

const ProductDetails = () => {
  const { id } = useParams(); // Get product ID from URL
  const navigate = useNavigate();

  // Find the product by ID
  const product = products.find((p) => p.id === parseInt(id, 10));

  // Handle product not found
  if (!product) {
    return (
      <div className="text-center py-10">
        <h2 className="text-xl font-semibold text-red-600">
          Product not found!
        </h2>
        <button
          onClick={() => navigate("/catalogue")}
          className="mt-4 bg-green-700 text-white px-4 py-2 rounded-lg hover:bg-green-600 transition duration-200"
        >
          Back to Catalogue
        </button>
      </div>
    );
  }

  const handleInquiry = () => {
    // Pass data via query parameters
    navigate(
      `/contact?title=${encodeURIComponent(product.name)}&id=${
        product.id
      }&description=${encodeURIComponent(
        product.largeDescription
      )}&link=${encodeURIComponent(`/product/${product.id}`)}`
    );
  };

  return (
    <div className="container mx-auto px-6 py-8 bg-white">
      <div className="flex xl:flex-row md:flex-col sm:flex-col items-center">
        <div className="">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-80 object-cover rounded-lg shadow-md"
          />
        </div>
        <div className="mt-4 xl:mt-0 xl:ml-8 md:w-full sm:w-full w-full xl:w-1/2">
          <h2 className="text-3xl font-bold text-[#00796B] mb-4">
            {product.name}
          </h2>
          <p className="text-gray-700 text-lg mb-6">
            {product.largeDescription}
          </p>
          <button
            onClick={handleInquiry}
            className="bg-green-700 text-white px-6 py-3 rounded-lg hover:bg-green-600 transition duration-200"
          >
            Send Inquiry
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
