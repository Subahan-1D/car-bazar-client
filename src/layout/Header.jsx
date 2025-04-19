import React from "react";

const Header = () => {
  const navLinks = (
    <>
      <li>
        <a className="hover:text-blue-500 transition">Home</a>
      </li>
      <li>
        <a className="hover:text-blue-500 transition">About</a>
      </li>
      <li>
        <a className="hover:text-blue-500 transition">Services</a>
      </li>
      <li>
        <a className="hover:text-blue-500 transition">Contact</a>
      </li>
    </>
  );

  return (
    <div className="navbar fixed z-50 top-0 max-w-screen-xl bg-white/80 backdrop-blur-sm text-black shadow-md px-4 lg:px-8">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52 text-gray-700"
          >
            {navLinks}
          </ul>
        </div>
        <a className="text-3xl font-bold text-blue-700">CarBazar</a>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 text-xl font-medium">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        <a className="btn btn-md rounded-lg bg-blue-500 text-2xl hover:bg-blue-700 text-white  px-6 shadow">
          Login
        </a>
      </div>
    </div>
  );
};

export default Header;
