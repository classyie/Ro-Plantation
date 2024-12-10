import React from "react";
import { Link } from "react-router-dom";
import Catalogue from "./Catalogue";

const HomePage = () => {
  return (
    <>
      <div className="container mx-auto px-6 py-16 bg-blue-50">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-[#433644] mb-4">
            Welcome to RO Plantation
          </h1>
          <p className="text-lg md:text-xl text-gray-700 mb-6">
            Your trusted partner for innovative water purification solutions. We
            specialize in providing advanced RO (Reverse Osmosis) devices to
            ensure clean and safe drinking water for all.
          </p>
          <Link
            to="/catalogue"
            className="bg-[#433644] text-white px-6 py-3 rounded-lg hover:bg-[#004D40] transition duration-200"
          >
            Explore Our Catalogue
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-lg font-semibold text-[#433644] mb-2">
              Clean Drinking Water
            </h3>
            <p className="text-gray-600">
              We ensure safe and clean drinking water with the latest RO
              technology.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-lg font-semibold text-[#00796B] mb-2">
              Eco-Friendly Solutions
            </h3>
            <p className="text-gray-600">
              Our devices are designed with sustainability and efficiency in
              mind.
            </p>
          </div>

          <div className="bg-white p-6 shadow-md rounded-lg text-center">
            <h3 className="text-lg font-semibold text-[#00796B] mb-2">
              Innovative Technology
            </h3>
            <p className="text-gray-600">
              We use cutting-edge Reverse Osmosis technology to purify water
              safely.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <h2 className="text-2xl md:text-4xl font-bold text-[#00796B] mb-4">
            Let’s Purify Your Water Today!
          </h2>
          <Link
            to="/contact" 
            className="bg-[#433644] text-white px-6 py-3 rounded-lg hover:bg-[#004D40] transition duration-200"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
