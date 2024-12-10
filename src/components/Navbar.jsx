import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Phone, Info, Lightbulb } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Responsive screen size detection
  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    // Check initial screen size
    checkScreenSize();

    // Add event listener for screen size changes
    window.addEventListener('resize', checkScreenSize);

    // Cleanup event listener
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const NavigationLinks = () => (
    <>
      <a 
        href="/" 
        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors 
        px-3 py-2 rounded-md text-base font-medium 
        sm:text-sm md:text-base lg:text-base"
      >
        <Home className="mr-2" size={20} />
        Home
      </a>
      <a 
        href="/services" 
        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors 
        px-3 py-2 rounded-md text-base font-medium 
        sm:text-sm md:text-base lg:text-base"
      >
        <Menu className="mr-2" size={20} />
        Services
      </a>
      <a 
        href="/contact" 
        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors 
        px-3 py-2 rounded-md text-base font-medium 
        sm:text-sm md:text-base lg:text-base"
      >
        <Phone className="mr-2" size={20} />
        Contact
      </a>
      <a 
        href="/about" 
        className="flex items-center text-gray-700 hover:text-blue-600 transition-colors 
        px-3 py-2 rounded-md text-base font-medium 
        sm:text-sm md:text-base lg:text-base"
      >
        <Info className="mr-2" size={20} />
        About
      </a>
    </>
  );

  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo and Company Name */}
        <div className="flex items-center space-x-3">
          <Lightbulb className="h-8 w-auto sm:h-10 text-primary" />
          <h1 className="text-xl sm:text-6xl md:text-2xl lg:text-2xl font-bold text-gray-800">
            Modern Utilities
          </h1>
        </div>

        {/* Responsive Navigation */}
        {isMobile ? (
          <>
            {/* Mobile Menu Toggle */}
            <button 
              onClick={toggleMenu} 
              className="text-gray-800 focus:outline-none"
            >
              <Menu size={24} />
            </button>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
              <div className="fixed inset-0 bg-white z-50">
                <div className="container mx-auto px-4 py-6">
                  <div className="flex justify-between items-center mb-8">
                    <h1 className="text-2xl font-bold text-gray-800">Modern Utilities</h1>
                    <button 
                      onClick={toggleMenu} 
                      className="text-gray-800 focus:outline-none"
                    >
                      <X size={24} />
                    </button>
                  </div>
                  <nav className="space-y-6 flex flex-col">
                    {NavigationLinks()}
                    {/* Mobile Get Started Button */}
                    <div className="mt-4">
                      <a 
                        href="/get-started" 
                        className="w-full block text-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors"
                      >
                        Get Started
                      </a>
                    </div>
                  </nav>
                </div>
              </div>
            )}
          </>
        ) : (
          // Desktop Navigation
          <div className="flex items-center justify-end w-full space-x-6">
            {/* Desktop Get Started Button */}
            

            {/* Navigation Links */}
            <nav className="flex space-x-4 lg:space-x-6 items-center">
              {NavigationLinks()}
            </nav>

            <div className="flex items-center">
              <a 
                href="/get-started" 
                className="block text-center bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors w-32"
              >
                Get Started
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;