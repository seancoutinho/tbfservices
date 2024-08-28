"use client";

import React, { useState } from "react";

const Header: React.FC = () => {
  const [selectedLink, setSelectedLink] = useState<string>("Home");
    const [isExpanded, setIsExpanded] = useState(false);

  const handleLinkClick = (link: string) => {
    setSelectedLink(link);
  };

  return (
    <div className="flex h-24">
      <header className="flex w-full justify-between items-center text-black sm:py-6">
        <div className="flex-shrink-0 mx-8 font-bold">TBF SERVICES</div>
        <nav className="items-start px-4 hidden sm:flex font-black">
          <ul className="flex items-center space-x-4">
            {["Home", "About", "Services", "Contact"].map((link) => (
              <li key={link}>
                <a
                  href="/"
                  className={`nav-link ${
                    selectedLink === link ? "active" : ""
                  } hover: border-b-[#F5811F]`}
                  onClick={() => handleLinkClick(link)}>
                  {link}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>
      <button className="flex justify-center items-center font-black w-full text-nowrap px-12 text-black justify-center sm:w-auto bg-[#F5811F]">
        Get In Touch 
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          className="size-4">
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>

      {isExpanded && (
        <nav className="lg:hidden">
          <div className="flex flex-col pt-8 pb-4 space-y-6">
            <a
              href="#"
              title=""
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Products
            </a>
            <a
              href="#"
              title=""
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Features
            </a>
            <a
              href="#"
              title=""
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Pricing
            </a>
            <a
              href="#"
              title=""
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Support
            </a>
            <a
              href="#"
              title=""
              className="text-base font-normal text-gray-400 transition-all duration-200 hover:text-white">
              Login
            </a>

            <div className="relative inline-flex items-center justify-center group">
              <div className="absolute transition-all duration-200 rounded-full -inset-px bg-gradient-to-r from-cyan-500 to-purple-500 group-hover:shadow-lg group-hover:shadow-cyan-500/50"></div>
              <a
                href="#"
                title=""
                className="relative inline-flex items-center justify-center w-full px-6 py-2 text-base font-normal text-white bg-black border border-transparent rounded-full"
                role="button">
                Start free trial
              </a>
            </div>
          </div>
        </nav>
      )}
    </div>
  );
};

export default Header;
