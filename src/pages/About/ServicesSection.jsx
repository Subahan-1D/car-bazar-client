import React from "react";
import { FaArrowRight } from "react-icons/fa";

const services = [
  {
    title: "Expert Mechanic",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    title: "Quick Service",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    title: "Engine Upgrades",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
];

const ServicesSection = () => {
  return (
    <section className="bg-[#111] py-12 px-4 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white text-black p-6 rounded-md shadow-md transition-transform hover:-translate-y-1 hover:shadow-lg duration-300"
          >
            <h3 className="text-xl font-semibold text-blue-700 mb-3">
              {service.title}
            </h3>
            <p className="text-sm text-gray-700 mb-4">{service.description}</p>
            <a
              href="#"
              className="text-blue-700 font-semibold inline-flex items-center gap-2 hover:underline"
            >
              <FaArrowRight className="text-xs" />
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSection;
