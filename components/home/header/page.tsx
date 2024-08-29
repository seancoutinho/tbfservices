"use client";

import React, { useState } from "react";

const Header: React.FC = () => {
  const [selectedLink, setSelectedLink] = useState<string>("Home");
  const [isExpanded, setIsExpanded] = useState(false);

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
    setIsExpanded(false); // Close the mobile menu after a link is clicked
  };

  const toggleMenu = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="relative flex h-24">
      <header className="flex w-full justify-between items-center text-gray-600 sm:py-6">
        <div className="flex-shrink-0 mx-8 font-bold">TBF SERVICES</div>
        <nav className="hidden sm:flex items-center font-bold">
          <ul className="flex items-center space-x-12 px-12">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Products", href: "/products" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`nav-link ${
                    selectedLink === link.name ? "active" : ""
                  } hover:text-blue-700`}
                  onClick={() => handleLinkClick(link.name)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <button
          onClick={toggleMenu}
          className="sm:hidden px-4 py-2 text-black font-bold">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-6">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </header>

      <div className="hidden sm:flex">
        <button className="relative flex items-center font-bold text-nowrap px-12 text-black justify-center bg-blue-700 overflow-hidden group">
          <span className="relative z-10 transition-colors duration-300 ease-in-out group-hover:text-white">
            Get In Touch
          </span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-4 ml-2 text-white">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          <span className="absolute inset-0 bg-black transition-transform duration-300 ease-in-out transform -translate-x-full group-hover:translate-x-0"></span>
        </button>
      </div>

      {isExpanded && (
        <nav className="sm:hidden absolute top-full left-0 w-full bg-white shadow-lg z-10">
          <ul className="flex flex-col space-y-6 p-4">
            {[
              { name: "Home", href: "/" },
              { name: "About", href: "/about" },
              { name: "Services", href: "/services" },
              { name: "Products", href: "/products" },
              { name: "Contact", href: "/contact" },
            ].map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`block text-gray-600 hover:text-blue-700 ${
                    selectedLink === link.name ? "font-bold" : ""
                  }`}
                  onClick={() => handleLinkClick(link.name)}>
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </div>
  );
};

export default Header;
