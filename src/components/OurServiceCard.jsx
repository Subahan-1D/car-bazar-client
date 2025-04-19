import React from "react";

const OurServiceCard = ({ item }) => {
  const { title, price, image, description, features } = item;

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
          <button className="text-white bg-blue-600 hover:bg-blue-700 px-4 py-1 rounded-md text-sm">
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default OurServiceCard;
