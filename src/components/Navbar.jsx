import React, { useState } from 'react';
import { FaSearch, FaDiscord, FaTwitter, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contextApi/ThemeContext';
import logo from "../assets/logo.jpg";

const Navbar = ({ onSearchClick }) => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  
  return (
    <nav className={`w-full transition-colors duration-300 ${
      isDarkMode 
        ? 'bg-black text-white border-gray-800' 
        : 'bg-white text-black border-gray-200'
    } border-b`}>
      <div className="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center">
            <div className="flex items-center gap-2 sm:gap-4">
              <img 
                src={logo} 
                alt="Logo" 
                className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-md transition-transform duration-300 hover:scale-110" 
                data-aos="fade-right" 
              />
              <span className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors font-bold text-xl sm:text-2xl`}>VNY</span>
            </div>
          </div>
          
          {/* Navigation Items - Desktop */}
          <div className="hidden md:flex items-center space-x-4 lg:space-x-8">
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Home</a>
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Templates</a>
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors relative`}>
              Pricing
              <span className="absolute -top-1 -right-8 bg-green-500 text-black text-xs px-1 rounded">new</span>
            </a>
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>Showcase</a>
          </div>
          
          {/* Right Side - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              <FaDiscord size={20} />
            </a>
            <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
              <FaTwitter size={20} />
            </a>
            <button 
              onClick={toggleTheme} 
              className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <FaSun size={20} /> : <FaMoon size={20} />}
            </button>
            <div 
              className="relative cursor-pointer hidden sm:block" 
              onClick={onSearchClick}
            >
              <div
                className={`pl-8 pr-12 py-1 rounded-md flex items-center ${
                  isDarkMode 
                    ? 'bg-gray-900 text-gray-400' 
                    : 'bg-gray-100 text-gray-500'
                }`}
              >
                <FaSearch className="absolute left-2 top-2" size={16} />
                <span className="hidden lg:inline">Search Components</span>
                <span className="lg:hidden">Search</span>
                <span className={`absolute right-2 top-1/2 transform -translate-y-1/2 text-xs px-1 rounded ${
                  isDarkMode ? 'bg-gray-800' : 'bg-gray-200'
                }`}>⌘K</span>
              </div>
            </div>
          </div>
          
          {/* Mobile menu button */}
          
          {/* Small screen search and theme toggle */}
          <div className="flex items-center space-x-3 md:hidden">
          
            <button 
              onClick={toggleTheme} 
              className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
              aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {isDarkMode ? <FaSun size={18} /> : <FaMoon size={18} />}
            </button>
            <button 
              onClick={onSearchClick}
              className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
              aria-label="Search"
            >
              <FaSearch size={18} />
            </button>
            <div className="flex md:hidden">
            <button
              onClick={toggleMenu}
              className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors p-2`}
              aria-label="Toggle mobile menu"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
          </div>
        </div>
      </div>

      {/* Mobile menu, show/hide based on menu state */}
      <div className={`${isMenuOpen ? 'block' : 'hidden'} md:hidden`}>
        <div className={`px-2 pt-2 pb-3 space-y-1 ${isDarkMode ? 'bg-black' : 'bg-white'}`}>
          <a 
            href="#" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isDarkMode 
                ? 'text-white hover:bg-gray-900' 
                : 'text-black hover:bg-gray-100'
            }`}>
            Home
          </a>
          <a 
            href="#" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isDarkMode 
                ? 'text-white hover:bg-gray-900' 
                : 'text-black hover:bg-gray-100'
            }`}>
            Templates
          </a>
          <a 
            href="#" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isDarkMode 
                ? 'text-white hover:bg-gray-900' 
                : 'text-black hover:bg-gray-100'
            } relative`}>
            Pricing
            <span className="ml-2 inline-flex items-center justify-center px-2 py-0.5 text-xs font-medium rounded bg-green-500 text-black">
              new
            </span>
          </a>
          <a 
            href="#" 
            className={`block px-3 py-2 rounded-md text-base font-medium ${
              isDarkMode 
                ? 'text-white hover:bg-gray-900' 
                : 'text-black hover:bg-gray-100'
            }`}>
            Showcase
          </a>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-3 space-x-4">
              <a 
                href="#" 
                className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
              >
                <FaDiscord size={20} />
              </a>
              <a 
                href="#" 
                className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}
              >
                <FaTwitter size={20} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;