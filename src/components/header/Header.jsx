import React from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 text-white py-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center px-6">
        
        {/* Logo/Brand */}
        <Link to="/" className="text-2xl font-bold hover:text-gray-400">
          GUIDE
        </Link>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-orange-700 text-lg hover:text-gray-400" : "text-white text-lg hover:text-gray-400"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/experts"
            className={({ isActive }) =>
              isActive ? "text-orange-700 text-lg hover:text-gray-400" : "text-white text-lg hover:text-gray-400"
            }
          >
            Experts
          </NavLink>
          <NavLink
            to="/pricing"
            className={({ isActive }) =>
              isActive ? "text-orange-700 text-lg hover:text-gray-400" : "text-white text-lg hover:text-gray-400"
            }
          >
            Pricing
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? "text-orange-700 text-lg hover:text-gray-400" : "text-white text-lg hover:text-gray-400"
            }
          >
            About Us
          </NavLink>
          <NavLink
            to="/blog"
            className={({ isActive }) =>
              isActive ? "text-orange-700 text-lg hover:text-gray-400" : "text-white text-lg hover:text-gray-400"
            }
          >
            Blog
          </NavLink>
         
        
         
         
        </div>

        {/* Sign In Button */}
        <button
          onClick={() => navigate("/signup")}
          className="bg-blue-500 text-white py-2 px-6 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          Sign In
        </button>
      </div>
    </nav>
  );
};

export default Header;
