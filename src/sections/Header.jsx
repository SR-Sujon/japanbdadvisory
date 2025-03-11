import React, { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import logoimg from "../assets/images/logo.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header" data-header>
      {/* Overlay */}
      {isMenuOpen && <div className="overlay fixed inset-0 bg-black bg-opacity-50 z-10" onClick={toggleMenu}></div>}

      {/* Header Top */}
      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center lg:px-16 md:px-8 px-4">
          {/* Logo (leftmost corner) */}
          <a href="#home" className="logo flex-shrink-0 flex flex-col items-center">
            <img
              src={logoimg}
              alt="Japan Bangladesh Advisory logo"
              className="w-auto md:h-16 max-md:h-12 max-sm:h-8"
            />
          </a>

          {/* Menu button (visible only on mobile) */}
          <button className="md:hidden text-2xl z-20" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navbar options */}
          <nav
            className={`absolute md:relative top-0 left-0 w-full md:w-auto md:flex bg-white md:bg-transparent shadow-lg md:shadow-none transition-transform transform md:translate-x-0 ${
              isMenuOpen ? "translate-x-0 px-10" : "-translate-x-full"
            } md:block z-10 h-screen md:h-auto p-6 md:p-0 bg-gray-200 md:bg-transparent`}
          >
            <ul className="navbar-list flex flex-col space-y-0 md:flex-row md:space-x-1 lg:space-x-3 xl:space-x-6 md:space-y-0 md:text-base uppercase font-extrabold border-t border-gray-400 md:border-none">
              {[
                { label: "Home", link: "#home" },
                { label: "About Us", link: "#about" },
                { label: "Our Services", link: "#services" },
                { label: "Gallery", link: "#gallery" },
                { label: "FAQ", link: "#faq" },
                { label: "Contact Us", link: "#contact" },
              ].map((item, index) => (
                <li key={index} className="border-b border-gray-400 md:border-none py-3 px-4 text-center md:text-left">
                  <a href={item.link} className="navbar-link text-gray-600 relative group">
                    {item.label}
                    <span className="underline-hover absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Phone Number and Book Now Button (rightmost corner) */}
          <div className="header-btn-group hidden xl:flex items-center space-x-4 overflow-hidden">
            {/* Phone Number Section */}
            <div className="flex flex-col items-start">
              <p className="ml-1 font-semibold font-sans text-sm text-gray-800">+88(019)16400505</p>
              <p className="ml-2 font-sans text-sm text-gray-600">Calling Hours: 10:00-18:00</p>
            </div>

            {/* Book Now Button */}
            <div className="flex-shrink-0">
              <button className="btn btn-primary w-32 px-2 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 font-sans font-extrabold">
                <a href="#contact">Book Now</a>
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
