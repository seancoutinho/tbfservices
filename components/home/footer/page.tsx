import Link from "next/link";
import React from "react";
import Footer2 from "./footer-2";

const Footer = () => {
  return (
    <>
    <footer className="grid grid-cols-2 bg-[#212121] text-white p-10 ">
      <div className="flex flex-col  gap-8">
        <h1 className="text-7xl font-black text-white">
          <span className="border-b-8 border-orange-500">Our </span>Services
        </h1>
        <p className="text-xl font-normal text-[#5E5E5E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula
          non arcu semper elementum. Nulla facilisi. Donec in enim consectetur,
          bibendum est in, cursus neque.
        </p>
        <p className="text-sm font-normal text-[#5E5E5E]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula
          non arcu semper elementum. Nulla facilisi. Donec in enim consectetur,
          bibendum est in, cursus neque. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Sed in ligula non arcu semper elementum. Nulla
          facilisi. Donec in enim consectetur, bibendum est in, cursus neque.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in ligula
          non arcu semper elementum. Nulla facilisi. Donec in enim consectetur,
          bibendum est in, cursus neque.
        </p>
        <div className="flex gap-8">
          <div className="gap-12">
            <h1 className="text-2xl mb-12">TBF Services</h1>
            <h1 className="text-xl text-wrap w-auto">
              TBF Services is an international trading house, with offices and
              affiliated companies globally
            </h1>
            <div className="flex items-center mt-5 space-x-3 sm:space-x-4">
              <Link
                href="#"
                title=""
                className="
                            inline-flex
                            items-center
                            justify-center
                            px-7
                            py-3
                            border-white
                            font-sans
                            text-base
                            font-semibold
                            transition-all
                            duration-200
                            border-2 border-transparent
                            sm:leading-8
                            bg-transparent
                            sm:text-lg
                            text-white
                            hover:bg-white
                            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary focus:ring-offset-secondary
                        "
                role="button">
                Find Locations
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="border-b-4 border-orange-500">Company</h1>
            <ul className="flex flex-col gap-4">
              <li>
                <Link href="#">About Us</Link>
              </li>
              <li>
                <Link href="#">Press</Link>
              </li>
              <li>
                <Link href="#">Careers</Link>
              </li>
              <li>
                <Link href="#">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div> </div>
    </footer>
    <Footer2 />
    </>
  );
};

export default Footer;
