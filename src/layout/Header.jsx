import React, { useContext} from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import { FaShoppingCart } from "react-icons/fa";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();

  const from = location.state?.from?.pathname || "/";
  const navLinks = (
    <>
      <li>
        <Link to="/" className="hover:text-blue-500 transition">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" className="hover:text-blue-500 transition">
          About
        </Link>
      </li>
      <li>
        <Link to="/service" className="hover:text-blue-500 transition">
          Services
        </Link>
      </li>
      <li>
        <Link to="/contact" className="hover:text-blue-500 transition">
          Contact
        </Link>
      </li>
      <li>
        <Link to="/secret" className="hover:text-blue-500 transition">
          Secret
        </Link>
      </li>
      <li>
        <Link to="/" className="hover:text-blue-500 transition -mt-2">
          <button className="btn">
            <FaShoppingCart></FaShoppingCart>
            <div className="badge badge-sm badge-secondary">+0</div>
          </button>
        </Link>
      </li>
    </>
  );

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => {
        console.log(error.message);
      });
    navigate(from, { replace: true });
  };

  return (
    <div className="navbar fixed z-50 top-0 max-w-screen-xl bg-white/80 backdrop-blur-sm text shadow-md px-4 lg:px-8">
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
        <Link to="/" className="text-3xl font-bold text-blue-700">
          CarBazar
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 space-x-4 text-xl font-medium">
          {navLinks}
        </ul>
      </div>

      {user ? (
        <div className="navbar-end flex items-center gap-4">
          <div className="flex justify-end gap-2">
            <button
              onClick={handleLogOut}
              className="btn btn-md rounded-lg bg-blue-500 text-white hover:bg-blue-700 px-5 shadow text-base sm:text-lg"
            >
              Sign Out
            </button>
            <img
              referrerPolicy="no-referrer"
              src={user?.photoURL || ""}
              alt="Profile"
              className="w-10 h-10 rounded-full border-2 border-blue-500 object-cover"
            />
          </div>
        </div>
      ) : (
        <div className="navbar-end">
          <Link
            to="/login"
            className="btn btn-md rounded-lg bg-blue-500 text-white hover:bg-blue-700 px-6 shadow text-base sm:text-lg"
          >
            Sign In
          </Link>
        </div>
      )}
    </div>
  );
};

export default Header;
