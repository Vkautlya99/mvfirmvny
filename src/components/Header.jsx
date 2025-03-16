import React, { useState, useEffect } from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Menu, X } from 'lucide-react';
import logo from "../assets/logo.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    AOS.init({ duration: 700 });
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="w-[90%] mx-auto py-4">
      {/* Desktop & Tablet View */}
      <div className="flex items-center justify-between">
        {/* Logo and Links */}
        <div className="flex items-center gap-6">
          <img src={logo} alt="Logo" className="w-20 h-20 md:w-32 md:h-32 transition-all ease-in-out duration-500 transform hover:scale-115" data-aos="fade-right" />
          <nav className="hidden md:flex items-center gap-6" data-aos="fade-down">
            <h3 className="cursor-pointer hover:text-teal-500 text-xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 text-transparent bg-clip-text">Home</h3>
            <h3 className="cursor-pointer hover:text-teal-500 text-xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 text-transparent bg-clip-text">About</h3>
            <h3 className="cursor-pointer hover:text-teal-500 text-xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 text-transparent bg-clip-text">Contact</h3>
          </nav>
        </div>

        {/* Buttons */}
        <div className="hidden md:flex space-x-18" data-aos="fade-left">
          <button className="bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg transition-transform ease-in-out duration-500 transform hover:scale-105">
            Login
          </button>
          <button className="bg-gradient-to-r from-blue-300 via-purple-400 to-violet-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg transition-transform ease-in-out duration-500 transform hover:scale-105">
            Sign Up
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden" data-aos="fade-left">
          <button onClick={toggleMenu} className="text-teal-500 focus:outline-none">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 space-y-4 text-center" data-aos="fade-down">
          <div className="flex items-center justify-center gap-6">
            <h3 className="cursor-pointer hover:text-teal-500 text-xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 text-transparent bg-clip-text">Home</h3>
            <h3 className="cursor-pointer hover:text-teal-500 text-xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 text-transparent bg-clip-text">About</h3>
            <h3 className="cursor-pointer hover:text-teal-500 text-xl font-semibold bg-gradient-to-r from-emerald-400 via-teal-500 to-cyan-600 text-transparent bg-clip-text">Contact</h3>
          </div>
          <div className="space-y-2">
            <button className="w-full bg-gradient-to-r from-emerald-300 via-teal-400 to-cyan-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg transition-transform ease-in-out duration-500 transform hover:scale-105">
              Login
            </button>
            <button className="w-full bg-gradient-to-r from-blue-300 via-purple-400 to-violet-500 text-white font-medium px-4 py-2 rounded-lg shadow-lg transition-transform ease-in-out duration-500 transform hover:scale-105">
              Sign Up
            </button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
