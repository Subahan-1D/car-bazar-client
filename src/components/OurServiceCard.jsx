import React from "react";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import { useLocation, useNavigate } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAxiosSecure from "../hooks/useAxiosSecure";

const OurServiceCard = ({ item }) => {
  const { title, price, image, description, features, _id } = item;
  const { user } = useAuth();
  const [, refetch] = useCart();
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const handleAddCart = () => {
    if (user && user?.email) {
      // Sent to cart
      const serviceCartItem = {
        serviceItem: _id,
        email: user?.email,
        title,
        image,
        price,
      };
      axiosSecure.post("/carts", serviceCartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${title} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // data update to the browser
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "You are not Logged In ",
        text: "please logged in add to the cart",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, login !",
      }).then((result) => {
        if (result.isConfirmed) {
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 overflow-hidden border border-gray-200">
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover transform hover:scale-105 transition duration-300"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm mb-3">{description}</p>
        <ul className="text-gray-500 text-sm space-y-1 mb-4">
          {features.slice(0, 4).map((feature, index) => (
            <li key={index} className="flex items-start gap-2">
              <svg
                className="w-4 h-4 text-blue-500 mt-1"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M5 13l4 4L19 7"
                />
              </svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-blue-600">${price}</span>
          <button
            onClick={handleAddCart}
            className="px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300 border-orange-600 btn btn-outline border-0 border-b-4 text-sm"
          >
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServiceCard;
