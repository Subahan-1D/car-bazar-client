import React, { useState } from "react";
import { NavLink, Outlet } from "react-router-dom";
import { Menu } from "lucide-react";
import {
  FaAd,
  FaHome,
  FaList,
  FaListAlt,
  FaShoppingCart,
  FaUsers,
} from "react-icons/fa";
import { IoMdContacts } from "react-icons/io";
import { FcServices } from "react-icons/fc";
import { Helmet } from "react-helmet-async";
import useAdmin from "../../hooks/useAdmin";
import useCart from "../../hooks/useCart";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  const [isAdmin] = useAdmin();
  const [cart] = useCart()

  return (
    <>
      <Helmet>
        <title>carBazar | dashboard</title>
      </Helmet>
      <div className="flex min-h-screen bg-gray-100">
        {/* Mobile Menu Button */}
        <div className="fixed top-4 left-4 z-50 md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-blue-600 focus:outline-none"
          >
            <Menu size={28} />
          </button>
        </div>

        {/* Sidebar */}
        <aside
          className={`${
            isOpen ? "translate-x-0" : "-translate-x-full"
          } fixed top-0 left-0 z-40 w-64 h-full bg-white shadow-lg transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:shadow-none md:block`}
        >
          <div className="p-6">
            <div className="text-2xl font-bold text-blue-600 mb-6 text-center">
              Dashboard
            </div>
            <div className="divider"></div>
            <nav>
              <ul className="flex flex-col gap-2">
                {isAdmin ? (
                  <>
                    <li>
                      <NavLink
                        to="/dashboard/admin"
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <FaHome className="text-xl" />
                        <span>Admin Home</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/addService"
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <FcServices className="text-xl" />
                        <span>Add Service</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/manageService"
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <FaListAlt className="text-xl" />
                        <span>Manage Service</span>
                      </NavLink>
                    </li>
                    <li>
                      <NavLink
                        to="/dashboard/allUser"
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <FaUsers className="text-xl" />
                        <span>All Users</span>
                      </NavLink>
                    </li>
                  </>
                ) : (
                  <>
                    {" "}
                    {/* User Home */}
                    <li>
                      <NavLink
                        to="/dashboard/userHome"
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <FaHome className="text-xl" />
                        <span>User Home</span>
                      </NavLink>
                    </li>
                    {/* My Cart */}
                    <li>
                      <NavLink
                        to="/dashboard/cart"
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <FaShoppingCart className="text-xl" />
                        <span>My Cart ({cart.length})</span>
                      </NavLink>
                    </li>
                    {/* My Booking */}
                    <li>
                      <NavLink
                        to="/dashboard/booking"
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <FaList className="text-xl" />
                        <span>My Booking</span>
                      </NavLink>
                    </li>
                    {/* Review */}
                    <li>
                      <NavLink
                        to="/dashboard/review"
                        className={({ isActive }) =>
                          `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                            isActive
                              ? "bg-blue-500 text-white"
                              : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                          }`
                        }
                        onClick={() => setIsOpen(false)}
                      >
                        <FaAd className="text-xl" />
                        <span>Review</span>
                      </NavLink>
                    </li>
                  </>
                )}

                {/* Divider */}
                <div className="divider"></div>

                {/* Home */}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <FaHome className="text-xl" />
                    <span>Home</span>
                  </NavLink>
                </li>

                {/* Service */}
                <li>
                  <NavLink
                    to="/service"
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <FcServices className="text-xl" />
                    <span>Service</span>
                  </NavLink>
                </li>

                {/* Contact */}
                <li>
                  <NavLink
                    to="/contact"
                    className={({ isActive }) =>
                      `flex items-center gap-2 rounded-lg px-4 py-2 font-medium ${
                        isActive
                          ? "bg-blue-500 text-white"
                          : "text-gray-700 hover:bg-blue-100 hover:text-blue-600"
                      }`
                    }
                    onClick={() => setIsOpen(false)}
                  >
                    <IoMdContacts className="text-xl" />
                    <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 transition-all duration-300">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default Dashboard;
