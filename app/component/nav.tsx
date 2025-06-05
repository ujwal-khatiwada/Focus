

import React from "react";
import HamburgerMenu from './hamburgerMenu';

const Nav = () => {
  return (
    <div>
      <nav className="block py-4 backdrop-saturate-200 backdrop-blur-2xl bg-opacity-90 border-white/80 w-full max-w-full rounded-none px-4 bg-white border-0 sticky top-0 z-50 shadow-md">
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <div>
            <p className="block antialiased font-sans text-blue-800 text-xl font-bold">
              Focus Point
            </p>
            <p className="block antialiased font-sans text-blue-700 text-lg font-bold">
              Driving School
            </p>
          </div>

          {/* Nav Links */}
          <ul className="ml-10 hidden items-center gap-8 lg:flex">
            <li>
              <a
                href="#services"
                className="flex items-center gap-2 text-base font-medium text-blue-800 hover:text-blue-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M5.566 4.657A4.505 4.505 0 016.75 4.5h10.5c.41 0 .806.055 1.183.157A3 3 0 0015.75 3h-7.5a3 3 0 00-2.684 1.657zM2.25 12a3 3 0 013-3h13.5a3 3 0 013 3v6a3 3 0 01-3 3H5.25a3 3 0 01-3-3v-6zM5.25 7.5c-.41 0-.806.055-1.184.157A3 3 0 016.75 6h10.5a3 3 0 012.683 1.657A4.505 4.505 0 0018.75 7.5H5.25z" />
                </svg>
                Services
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="flex items-center gap-2 text-base font-medium text-blue-800 hover:text-blue-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                About Us
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="flex items-center gap-2 text-base font-medium text-blue-800 hover:text-blue-900 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M18.685 19.097A9.723 9.723 0 0021.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 003.065 7.097A9.716 9.716 0 0012 21.75a9.716 9.716 0 006.685-2.653zm-12.54-1.285A7.486 7.486 0 0112 15a7.486 7.486 0 015.855 2.812A8.224 8.224 0 0112 20.25a8.224 8.224 0 01-5.855-2.438zM15.75 9a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    clipRule="evenodd"
                  />
                </svg>
                Contact
              </a>
            </li>
          </ul>

          {/* Login Button */}
          <div className="hidden w-[185px] items-center gap-2 lg:flex">
            <a href="#login" target="_blank">
              <button
                className="py-3 px-6 rounded-lg bg-blue-600 text-white shadow-md hover:bg-blue-700 transition"
              >
                Login
              </button>
            </a>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center h-10 w-10 mr-4">
            <HamburgerMenu />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
