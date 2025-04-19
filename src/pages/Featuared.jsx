import React from "react";
import SectionTitle from "../components/SectionTittle";
import carWash from "../../public/carwash.jpg";

const Featured = () => {
  return (
    <section className="bg-gray-100 py-12">
      <SectionTitle heading="We Have Expert Mechanic" subHeading="Contact Us" />

      <div className="md:flex items-center justify-between px-6 md:px-16 gap-10 max-w-7xl mx-auto">
        <div className="md:w-1/2">
          <img
            src={carWash}
            alt="Car Wash"
            className="rounded-xl shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="md:w-1/2 mt-6 md:mt-0">
          <p className="text-sm text-gray-500 mb-2">Apr 19, 2025</p>
          <h3 className="text-2xl md:text-3xl font-semibold text-gray-800 uppercase mb-4">
            Where can I get some?
          </h3>
          <p className="text-gray-600 mb-6 leading-relaxed">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos
            repellat ut sed expedita aspernatur perferendis reprehenderit
            exercitationem quo aperiam facilis! Lorem ipsum dolor sit amet
            consectetur.
          </p>
          <button className="px-5 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition duration-300">
            Order Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default Featured;
