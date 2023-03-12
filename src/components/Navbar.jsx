import React from "react";
import { Link } from "react-router-dom";

const Navbar = (props) => {
  return (
    <header className="text-gray-400 bg-gray-800 body-font sticky top-0 z-50">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <Link
          to="/"
          className="flex title-font font-medium items-center text-white mb-4 md:mb-0"
        >
          <svg
            xmlns=""
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
          </svg>
          <span className="ml-3 text-xl">NewsApe</span>
        </Link>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link to="/" className="mr-5 hover:text-white hover:border-b-4">
            Home
          </Link>
          <Link
            to="/Business"
            className="mr-5 hover:text-white hover:border-b-4"
          >
            Business
          </Link>
          <Link
            to="/Entertainment"
            className="mr-5 hover:text-white hover:border-b-4"
          >
            Entertainment
          </Link>
          <Link to="/Crypto" className="mr-5 hover:text-white hover:border-b-4">
            Crypto
          </Link>
          <Link to="/Health" className="mr-5 hover:text-white hover:border-b-4">
            Health
          </Link>
          <Link
            to="/Science"
            className="mr-5 hover:text-white hover:border-b-4"
          >
            Science
          </Link>
          <Link to="/Sports" className="mr-5 hover:text-white hover:border-b-4">
            Sports
          </Link>
          <Link
            to="/Technology"
            className="mr-5 hover:text-white hover:border-b-4"
          >
            Technology
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
