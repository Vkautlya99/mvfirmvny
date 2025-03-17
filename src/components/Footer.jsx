import React from "react";
import { motion } from "motion/react";
import dynamic from "next/dynamic";
import { useTheme } from "../contextApi/ThemeContext";
import { FaTwitter, FaGithub, FaDiscord, FaLinkedin, FaHeart } from "react-icons/fa";

const World = dynamic(() => import("../ui/globe").then((m) => m.World), {
  ssr: false,
});

export default function Footer() {
  const { isDarkMode } = useTheme();
  const globeConfig = {
    pointSize: 4,
    globeColor: "#062056",
    showAtmosphere: true,
    atmosphereColor: "#FFFFFF",
    atmosphereAltitude: 0.1,
    emissive: "#062056",
    emissiveIntensity: 0.1,
    shininess: 0.9,
    polygonColor: "rgba(255,255,255,0.7)",
    ambientLight: "#38bdf8",
    directionalLeftLight: "#ffffff",
    directionalTopLight: "#ffffff",
    pointLight: "#ffffff",
    arcTime: 1000,
    arcLength: 0.9,
    rings: 1,
    maxRings: 3,
    initialPosition: { lat: 22.3193, lng: 114.1694 },
    autoRotate: true,
    autoRotateSpeed: 0.5,
  };
  const colors = ["#06b6d4", "#3b82f6", "#6366f1"];
  const sampleArcs = [
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: 28.6139,
      startLng: 77.209,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 1,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -1.303396,
      endLng: 36.852443,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 3.139,
      endLng: 101.6869,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 2,
      startLat: -15.785493,
      startLng: -47.909029,
      endLat: 36.162809,
      endLng: -115.119411,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -33.8688,
      startLng: 151.2093,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: 21.3099,
      startLng: -157.8581,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 3,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: -34.6037,
      startLng: -58.3816,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 4,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 14.5995,
      startLng: 120.9842,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -33.8688,
      endLng: 151.2093,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 5,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 48.8566,
      endLng: -2.3522,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: -15.432563,
      startLng: 28.315853,
      endLat: 1.094136,
      endLng: -63.34546,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 37.5665,
      startLng: 126.978,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 6,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 51.5072,
      endLng: -0.1276,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: -19.885592,
      startLng: -43.951191,
      endLat: -15.595412,
      endLng: -56.05918,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 48.8566,
      startLng: -2.3522,
      endLat: 52.52,
      endLng: 13.405,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 7,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: -8.833221,
      startLng: 13.264837,
      endLat: -33.936138,
      endLng: 18.436529,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 49.2827,
      startLng: -123.1207,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 8,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: 40.7128,
      endLng: -74.006,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 51.5072,
      startLng: -0.1276,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: -22.9068,
      endLng: -43.1729,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 9,
      startLat: 1.3521,
      startLng: 103.8198,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.5,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: 28.6139,
      endLng: 77.209,
      arcAlt: 0.7,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 10,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 52.3676,
      endLng: 4.9041,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 41.9028,
      startLng: 12.4964,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: -6.2088,
      startLng: 106.8456,
      endLat: 31.2304,
      endLng: 121.4737,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 11,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 1.3521,
      endLng: 103.8198,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 34.0522,
      startLng: -118.2437,
      endLat: 37.7749,
      endLng: -122.4194,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 35.6762,
      startLng: 139.6503,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.2,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 12,
      startLat: 22.3193,
      startLng: 114.1694,
      endLat: 34.0522,
      endLng: -118.2437,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 52.52,
      startLng: 13.405,
      endLat: 22.3193,
      endLng: 114.1694,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: 11.986597,
      startLng: 8.571831,
      endLat: 35.6762,
      endLng: 139.6503,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 13,
      startLat: -22.9068,
      startLng: -43.1729,
      endLat: -34.6037,
      endLng: -58.3816,
      arcAlt: 0.1,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
    {
      order: 14,
      startLat: -33.936138,
      startLng: 18.436529,
      endLat: 21.395643,
      endLng: 39.883798,
      arcAlt: 0.3,
      color: colors[Math.floor(Math.random() * (colors.length - 1))],
    },
  ];

  return (
    <div
      className="flex flex-col md:flex-row  items-center justify-center py-20  dark:bg-black bg-white relative w-full">
      <div
        className="max-w-7xl mx-auto w-[500px] md:w-full relative overflow-hidden h-[40rem] px-4">
        <motion.div
          initial={{
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 1,
          }}
          className="div">
          <div className="hidden md:block">   
            <h2
                className="text-center text-xl md:text-4xl font-bold text-black dark:text-white">
                We sell soap worldwide
            </h2>
            <p
                className="text-center text-base md:text-lg font-normal text-neutral-700 dark:text-neutral-200 max-w-md mt-2 mx-auto">
                This globe is interactive and customizable. Have fun with it, and
                don&apos;t forget to share it. :)
            </p>
          </div>
        </motion.div>
        <div
          className="absolute w-full bottom-0 inset-x-0 h-40 bg-gradient-to-b pointer-events-none select-none from-transparent dark:to-black to-white z-40" />
        <div className="absolute w-full -bottom-20 h-72 md:h-full z-10">
          <World data={sampleArcs} globeConfig={globeConfig} />
        </div>
      </div>
      <footer className={`w-full py-12 ${isDarkMode ? 'bg-black text-white' : 'bg-white text-black'} border-t ${isDarkMode ? 'border-gray-800' : 'border-gray-200'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Column 1: Logo & About */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className={`w-10 h-10 rounded-full ${isDarkMode ? 'bg-gray-800' : 'bg-gray-100'} flex items-center justify-center`}>
                  <span className="font-bold text-xl">VNY</span>
                </div>
                <span className="font-bold text-xl">VNY</span>
              </div>
              <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                Creating beautiful and functional web experiences for businesses worldwide.
              </p>
              <div className="flex space-x-4 pt-2">
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  <FaTwitter size={20} />
                </a>
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  <FaGithub size={20} />
                </a>
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  <FaDiscord size={20} />
                </a>
                <a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors`}>
                  <FaLinkedin size={20} />
                </a>
              </div>
            </div>
            
            {/* Column 2: Products */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Products</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Templates</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Components</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Pricing</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Showcase</a></li>
              </ul>
            </div>
            
            {/* Column 3: Resources */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Resources</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Documentation</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Tutorials</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Blog</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Support</a></li>
              </ul>
            </div>
            
            {/* Column 4: Company */}
            <div className="space-y-4">
              <h3 className="font-semibold text-lg">Company</h3>
              <ul className="space-y-2">
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>About Us</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Careers</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Contact</a></li>
                <li><a href="#" className={`${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-black'} transition-colors text-sm`}>Privacy Policy</a></li>
              </ul>
            </div>
          </div>
          
          {/* Copyright & Bottom */}
          <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
              © {new Date().getFullYear()} VNY. All rights reserved.
            </p>
            <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'} flex items-center gap-1 mt-4 md:mt-0`}>
              Made with <FaHeart className="text-red-500" size={12} /> by VNY Team
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
