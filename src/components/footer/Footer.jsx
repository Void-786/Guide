import React from 'react';
import { FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'; // Install react-icons if you haven't

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-12">
      <div className="max-w-screen-xl mx-auto px-6">
      
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div>
            <h3 className="text-xl font-semibold mb-4">About Us</h3>
            <p className="text-gray-400 text-sm">
              Guide connects you with industry experts, helping you grow in your career through personalized guidance.
            </p>
          </div>

       
          <div>
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">Home</a>
              </li>
              <li>
                <a href="/" className="text-gray-400 hover:text-white">Experts</a>
              </li>
              <li>
                <a href="/pricing" className="text-gray-400 hover:text-white">Pricing</a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white">Contact</a>
              </li>
            </ul>
          </div>

          
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-gray-400 hover:text-blue-600">
                <FaFacebook size={24} />
              </a>
              <a href="https://twitter.com" className="text-gray-400 hover:text-blue-400">
                <FaTwitter size={24} />
              </a>
              <a href="https://linkedin.com" className="text-gray-400 hover:text-blue-700">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        
        <div className="border-t border-gray-600 mt-8 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} Guide. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
