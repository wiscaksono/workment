import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const navigations = [
    {
      name: "HOME",
      href: "/",
    },
    {
      name: "WORK",
      href: "/work",
    },
    {
      name: "ABOUT",
      href: "/about",
    },
    {
      name: "BLOG",
      href: "/blog",
    },
    {
      name: "CONTACT",
      href: "/contact",
    },
  ];
  return (
    <nav className="max-w-[1400px] mx-auto flex items-center justify-between border-4 border-primary-dark h-24 bg-white">
      <Link
        to="/"
        className="w-24 h-24 flex items-center justify-center border-r-4 border-primary-dark shrink-0"
      >
        <img src="/logo.png" alt="Workment Logo" className="w-12 h-12" />
      </Link>
      <div className="grid grid-cols-12 flex-1 h-full items-center">
        <h3 className="col-span-4 pl-[22px]">Workment</h3>
        <div className="font-syncopate font-bold bg-natural-wasabi h-full border-l-4 border-primary-dark flex items-center justify-center w-full col-span-8 gap-8">
          {navigations.map((navigation) => (
            <Link key={navigation.name} to={navigation.href}>
              {navigation.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="w-24 h-24 flex items-center justify-center border-l-4 border-primary-dark shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="43"
          height="33"
          fill="none"
          viewBox="0 0 43 33"
          className="cursor-pointer"
        >
          <path
            strokeWidth={4}
            stroke="#2E2E2E"
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.1 2h39m-39 0v27.625a1.625 1.625 0 001.625 1.625h35.75a1.625 1.625 0 001.625-1.625V2m-39 0l19.5 17.875L41.1 2"
          ></path>
        </svg>
      </div>
    </nav>
  );
}
