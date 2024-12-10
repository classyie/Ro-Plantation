import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-[#433644] text-white py-6">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Branding & Description */}
        <div className="text-center mb-4">
          <h2 className="text-lg md:text-2xl font-bold">RO Plantation</h2>
          <p className="text-sm md:text-base mt-2">
            Committed to providing clean, purified water through advanced RO technologies.
          </p>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 text-center mb-4">
          {/* Navigation Links */}
          <div>
            <h3 className="font-semibold mb-2">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:underline">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/catalogue" className="hover:underline">
                  Catalogue
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold mb-2">Contact</h3>
            <p>Email: info@roplantation.com</p>
            <p>Phone: +91-123-456-7890</p>
          </div>

          {/* Social Media Links */}
          <div>
            <h3 className="font-semibold mb-2">Follow Us</h3>
            <div className="flex justify-center space-x-4 mt-2">
              {/* Example Social Media Links */}
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-200"
              >
                Facebook
              </a>
              <a
                href="https://www.twitter.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-200"
              >
                Twitter
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noreferrer"
                className="hover:text-gray-200"
              >
                Instagram
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="text-center text-sm border-t border-gray-300 pt-4 mt-2">
          <p>&copy; {new Date().getFullYear()} RO Plantation | All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
