import React, { useEffect, useState } from "react";

const OurExpert = () => {
  const [expert, setExpert] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/expert`)
      .then((res) => res.json())
      .then((data) => setExpert(data));
  }, []);

  return (
    <div>
      <section className="py-12 px-4 md:px-12 bg-white">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Our <span className="text-blue-600">Experts</span>
          <div className="w-16 h-1 bg-blue-500 rounded-full mb-2 mt-2"></div>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {expert.map(({ _id, name, title, image, description }) => (
            <div
              key={_id}
              className="bg-white shadow-md rounded-md overflow-hidden text-center p-4 s"
            >
              <img
                src={image}
                alt={name}
                className="w-full h-60 object-cover"
              />
              <div className="mt-4">
                <h3 className="text-lg font-bold text-gray-900">{name}</h3>
                <p className="text-sm text-gray-600">{title}</p>
                <hr className="my-2 w-1/2 mx-auto border-blue-600" />
                <p className="text-xs text-gray-500">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurExpert;
