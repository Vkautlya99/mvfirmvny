import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import SearchModal from '../components/SearchModel';
import { useTheme } from '../contextApi/ThemeContext';
import BackgroundBeamsWithCollisionDemo from '../ui/Background-breams-with-collision';
import Header from '../components/Header';
import Main from '../components/Main';

const MainPage = () => {
  const { isDarkMode } = useTheme();
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key === 'k') {
        event.preventDefault();
        setIsSearchOpen(prev => !prev);
      }
    };
  
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <>
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
      />
      <div
        id="main-content"
        className={`min-h-screen transition-all duration-300 ${isDarkMode ? 'bg-black' : 'bg-gray-50'
          }`}
      >
        <Navbar onSearchClick={() => setIsSearchOpen(true)} />
        <Header />
        <main>
          <Main />
        </main>
      </div>
    </>
  );
};

export default MainPage;