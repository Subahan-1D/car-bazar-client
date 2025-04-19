import React from "react";
import mechanicImg from "../../public/mechanic1.jpeg";
import mechanicImg1 from "../../public/mechanic2.jpg";
import mechanicImg2 from "../../public/mechanic3.jpg";
import { Link } from "react-router-dom";
const MechanicCard = () => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-5 mt-5 mb-8">
      {/* Card 1 */}
      <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden  group">
        <div className="overflow-hidden">
          <img
            src={mechanicImg}
            alt="Expert Mechanic"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex justify-between items-center px-4 py-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Expert Mechanic
          </h3>
          <Link to='/' className="text-sky-600 hover:text-sky-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Card 2 */}
      <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden  group">
        <div className="overflow-hidden">
          <img
            src={mechanicImg1}
            alt="Expert Mechanic"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex justify-between items-center px-4 py-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Quick Service
          </h3>
          <Link to='/' className="text-sky-600 hover:text-sky-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>

      {/* Card 3 */}
      <div className="max-w-xs bg-white shadow-md rounded-md overflow-hidden  group">
        <div className="overflow-hidden">
          <img
            src={mechanicImg2}
            alt="Expert Mechanic"
            className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
          />
        </div>
        <div className="flex justify-between items-center px-4 py-3">
          <h3 className="text-lg font-semibold text-gray-800">
            Engine Upgrades
          </h3>
          <Link to='/' className="text-sky-600 hover:text-sky-800">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MechanicCard;
