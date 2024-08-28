"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import DiscoverMore from "./components/discover-more";
import DownloadsSection from "./components/downloads";
import CardsSection from "./components/cards-2";

const RoutesLayout = ({ children }: { children: React.ReactNode }) => {
  const pathname = usePathname();

  return (
    <div>
      <div className="capitalize flex justify-around px-8 items-center text-gray-800 text-5xl font-bold p-12">
        {pathname.slice(1, 10)}
        <p className="flex items-center text-sm">
          <Link href="/">Home </Link>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="size-3 font-extrabold text-orange-500">
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
          {pathname.slice(1, 10)}
        </p>
      </div>
      {children}
      <DiscoverMore />  
      <DownloadsSection />
      <CardsSection />
    </div>
  );
};

export default RoutesLayout;
