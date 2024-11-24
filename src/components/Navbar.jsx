import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable body scroll when the sidebar is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }

    // Clean up on unmount
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="max-w-5xl mx-auto flex justify-between items-center border-b border-b-gray-200 p-4">
      <div className="my-4">
        <h1 className="text-2xl font-semibold">Lovepreet Singh</h1>
      </div>
      {/* Hamburger Button */}
      <button
        className="block md:hidden text-gray-600 focus:outline-none z-50" // Added z-50 to keep the button on top
        onClick={toggleMenu}
      >
        {isMenuOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg> // Close icon
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg> // Hamburger icon
        )}
      </button>
      {/* Sidebar Menu */}
      <div
        className={`fixed inset-y-0 right-0 w-2/3 bg-white shadow-lg transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        } transition-transform md:relative md:transform-none md:shadow-none md:bg-transparent md:w-auto md:flex z-40`} // z-40 to ensure the sidebar is above main content
      >
        <ul className="flex flex-col space-y-6 mt-16 p-6 md:space-y-0 md:mt-0 md:flex-row md:space-x-12 md:p-0">
          <li className="hover:border-b hover:border-b-gray-500 md:mt-0">
            <a href="#about" onClick={closeMenu}>About</a>
          </li>
          <li className="hover:border-b hover:border-b-gray-500 md:mt-0">
            <a href="#projects" onClick={closeMenu}>Projects</a>
          </li>
          <li className="hover:border-b hover:border-b-gray-500 md:mt-0">
            <a href="#contact" onClick={closeMenu}>Contact</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
