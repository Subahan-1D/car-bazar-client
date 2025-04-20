import React from "react";
import ServiceCard from "./ServiceCard";

const ServiceTab = ({ items }) => {
  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-5 py-8 px-8 mb-5">
      {items.map((item) => (
        <ServiceCard key={item._id} item={item}></ServiceCard>
      ))}
    </div>
  );
};

export default ServiceTab;
