import React, { useState, useEffect, useRef } from 'react';
import { FaSearch, FaTimes } from 'react-icons/fa';
import { useTheme } from '../contextApi/ThemeContext';

const SearchModal = ({ isOpen, onClose }) => {
  const { isDarkMode } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');
  const inputRef = useRef(null);
  
  // Sample search items - replace with your actual items
  const searchItems = [
    '3D Pin',
    'Animated Modal',
    'Animated Testimonials',
    'Animated Tooltip',
    'Apple Cards Carousel',
    'Aurora Background',
    'Background Beams'
  ];
  
  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }

    // Apply blur to background when modal is open
    const mainContent = document.getElementById('main-content');
    if (isOpen && mainContent) {
      mainContent.classList.add('blur-sm');
      document.body.classList.add('overflow-hidden');
    } else if (mainContent) {
      mainContent.classList.remove('blur-sm');
      document.body.classList.remove('overflow-hidden');
    }
    
    return () => {
      if (mainContent) {
        mainContent.classList.remove('blur-sm');
      }
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };
    
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.removeEventListener('keydown', handleEsc);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center transition-opacity duration-300">
      <div 
        className={`w-full max-w-lg rounded-lg shadow-xl overflow-hidden transition-all transform ${
          isDarkMode ? 'bg-gray-900' : 'bg-white'
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="relative">
          <FaSearch className={`absolute left-4 top-4 ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`} />
          <input
            ref={inputRef}
            type="text"
            placeholder="Type a command or search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className={`w-full py-3 pl-12 pr-10 outline-none border-b ${
              isDarkMode 
                ? 'bg-gray-900 text-white border-gray-700' 
                : 'bg-white text-gray-800 border-gray-200'
            }`}
          />
          <button 
            onClick={onClose}
            className={`absolute right-4 top-3 ${isDarkMode ? 'text-gray-500 hover:text-gray-400' : 'text-gray-500 hover:text-gray-700'}`}
          >
            <FaTimes size={18} />
          </button>
        </div>
        
        {/* Search results with scroll */}
        <div className={`max-h-72 overflow-y-auto ${isDarkMode ? 'bg-gray-900' : 'bg-white'}`}>
          {searchItems.filter(item => 
            item.toLowerCase().includes(searchQuery.toLowerCase())
          ).map((item, index) => (
            <div 
              key={index}
              className={`flex items-center px-4 py-3 cursor-pointer ${
                isDarkMode ? 'hover:bg-gray-800' : 'hover:bg-gray-100'
              }`}
              onClick={() => {
                console.log(`Selected: ${item}`);
                onClose();
              }}
            >
              <div className={`w-5 h-5 flex items-center justify-center rounded-full mr-3 border ${
                isDarkMode ? 'border-gray-700' : 'border-gray-300'
              }`}>
                <div className="w-2 h-2 rounded-full bg-gray-500"></div>
              </div>
              <span className={isDarkMode ? 'text-gray-200' : 'text-gray-900'}>
                {item}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;