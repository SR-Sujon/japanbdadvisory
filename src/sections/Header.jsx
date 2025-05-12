// src/components/Header.jsx
import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import { Link as RouterLink } from "react-router-dom";
import { Link as ScrollLink } from "react-scroll";
import logoimg from "../assets/images/logo.svg";

const navItems = [
  { label: "Home", type: "router", to: "/" },
  { label: "About Us", type: "scroll", to: "about" },
  {
    label: "Our Services",
    type: "scroll",
    to: "services",
    children: [
      { label: "VISA Services", to: "/services/visa", type: "router" },
      { label: "Business Setup", to: "/services/busines-setup", type: "router" },
      { label: "Expat Management", to: "/services/expat-management", type: "router" },
      { label: "Travel & Hospitality", to: "/services/travel-hospitality", type: "router" },
    ],
  },
  { label: "Gallery", type: "scroll", to: "gallery" },
  { label: "FAQ", type: "scroll", to: "faq" },
  { label: "Contact Us", type: "scroll", to: "contact" },
];

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header className="header" data-header>
      {isMenuOpen && (
        <div
          className="overlay fixed inset-0 bg-black bg-opacity-50 z-10"
          onClick={toggleMenu}
        />
      )}
      <div className="bg-white py-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center lg:px-16 md:px-8 px-4">
          <RouterLink
            to="/"
            className="logo flex-shrink-0 flex flex-col items-center"
          >
            <img
              src={logoimg}
              alt="Japan Bangladesh Advisory logo"
              className="w-auto md:h-16 max-md:h-12 max-sm:h-8"
            />
          </RouterLink>

          <button className="md:hidden text-2xl z-20" onClick={toggleMenu}>
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          <nav
            className={`
              absolute md:relative top-0 left-0 w-full md:w-auto md:flex
              bg-white md:bg-transparent shadow-lg md:shadow-none
              transition-transform transform
              ${isMenuOpen ? "translate-x-0 px-10" : "-translate-x-full"}
              md:translate-x-0 md:block z-10 h-screen md:h-auto p-6 md:p-0
              bg-gray-200 md:bg-transparent
            `}
          >
            <ul className="navbar-list flex flex-col md:flex-row md:space-x-6 uppercase font-extrabold text-gray-600">
              {navItems.map((item, idx) => {
                const baseClasses =
                  "border-b border-gray-400 md:border-none py-3 px-4 text-center md:text-left";
                const linkClasses = "relative group";

                // If this item has dropdown children
                if (item.children) {
                  return (
                    <li key={idx} className={baseClasses + " relative group"}>
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className={`flex items-center justify-center md:justify-start space-x-1 cursor-pointer ${linkClasses}`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <FiChevronDown className="text-lg" />
                        <span className="underline-hover absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full" />
                      </ScrollLink>

                      <div className="flex flex-col space-y-2 lg:space-y-0 lg:flex-row lg:space-x-4 py-2 px-4 text-sm z-20 lg:absolute lg:left-0 lg:top-full lg:bg-white lg:shadow-lg lg:rounded-md lg:hidden lg:group-hover:flex">
                        {item.children.map((child, cidx) => (
                          <RouterLink
                            key={cidx}
                            to={child.to}
                            className="hover:bg-gray-100 px-2 py-1 rounded"
                            onClick={() => setIsMenuOpen(false)}
                          >
                            {child.label}
                          </RouterLink>
                        ))}
                      </div>
                    </li>
                  );
                }

                // Otherwise a normal router or scroll link
                return (
                  <li key={idx} className={baseClasses}>
                    {item.type === "router" ? (
                      <RouterLink
                        to={item.to}
                        className={linkClasses}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span className="underline-hover absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full" />
                      </RouterLink>
                    ) : (
                      <ScrollLink
                        to={item.to}
                        smooth={true}
                        offset={-80}
                        duration={500}
                        className={linkClasses + " cursor-pointer"}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <span>{item.label}</span>
                        <span className="underline-hover absolute bottom-[-2px] left-0 w-0 h-[2px] bg-blue-600 transition-all duration-300 ease-in-out group-hover:w-full" />
                      </ScrollLink>
                    )}
                  </li>
                );
              })}
            </ul>
          </nav>

          <div className="header-btn-group hidden xl:flex items-center space-x-4">
            <div className="flex flex-col mr-6">
              <p className="font-semibold text-sm text-gray-800">
                +88(019)16400505
              </p>
              <p className="text-xs text-gray-600">
                Calling Hours: 10:00–18:00
              </p>
            </div>
            <ScrollLink
              to="contact"
              smooth={true}
              offset={-80}
              duration={500}
              className="btn btn-primary w-32 px-4 py-2 text-white bg-blue-600 rounded-md hover:bg-blue-700 font-extrabold cursor-pointer"
              onClick={() => setIsMenuOpen(false)}
            >
              Book Now
            </ScrollLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
