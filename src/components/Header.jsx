import React from 'react'
import { useTheme } from '../contextApi/ThemeContext';
import BackgroundBeamsWithCollisionDemo from '../ui/Background-breams-with-collision';
import FlipWords from '../ui/Flip-words';

function Header() {
    const { isDarkMode } = useTheme();
    const words = ["better", "cute", "beautiful", "modern"];
    return (
        <BackgroundBeamsWithCollisionDemo>
            <h2 className="flex justify-center items-center px-60 flex-col relative z-20 font-bold text-center font-sans tracking-tight">
                <span className={`${isDarkMode ? 'text-gray-400' : 'text-gray-700'} text-5xl lg:text-7xl mb-5`}>What&apos;s cooler than <FlipWords words={words} />?{" "}</span>
                <div className="relative mx-auto inline-block w-max [filter:drop-shadow(0px_1px_3px_rgba(27,_37,_80,_0.14))]">
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 py-2 md:py-4">
                        <span className="text-2xl md:text-4xl lg:text-7xl">Exploding Intelligence.</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 py-2 md:py-4">
                        <span className="text-2xl md:text-4xl lg:text-7xl">Powering the future,</span>
                    </div>
                    <div className="relative bg-clip-text text-transparent bg-no-repeat bg-gradient-to-r from-blue-500 via-cyan-500 to-teal-500 py-2 md:py-4">
                        <span className="text-2xl md:text-4xl lg:text-7xl ">one AI breakthrough at a time!"</span>
                    </div>
                </div>
            </h2>

        </BackgroundBeamsWithCollisionDemo>
    )
}

export default Header
