import React from "react";

const SectionTitle = ({ subHeading, heading }) => {
  return (
    <div className="text-center mb-10 max-w-xl mx-auto space-y-2">
      {/* Subheading */}
      <p className="text-sm sm:text-base text-sky-500 uppercase tracking-widest font-medium">
        {subHeading}
      </p>

      {/* Main Heading */}
      <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800">
        {heading}
      </h1>

      {/* Divider */}
      <div className="w-16 h-1 bg-sky-500 mx-auto rounded-full"></div>
    </div>
  );
};

export default SectionTitle;
