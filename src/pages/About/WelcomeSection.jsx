import React from "react";
import welcomeImg from '../../../public/mechanic.jpg'

const WelcomeSection = () => {
  return (
    <section className="px-6 md:px-16 py-10 bg-white mt-5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="md:w-1/2">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
            WELCOME TO <span className="text-blue-700">CARBAZAR</span>
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            ad minim veniam,
          </p>
          <p className="text-gray-700 mb-6 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elitsed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <button className="bg-blue-700 hover:bg-blue-800 text-white font-bold py-2 px-6 rounded transition-all duration-300">
            READ MORE
          </button>
        </div>

        {/* Image Section */}
        <div className="md:w-1/2">
          <img
            src={welcomeImg}
            alt="Mechanic"
            className="rounded-lg shadow-lg w-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
