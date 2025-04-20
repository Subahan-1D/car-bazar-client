import React, { useEffect, useState } from "react";
import SectionTitle from "./SectionTittle";
import OurServiceCard from "./OurserviceCard";
import useService from "../hooks/useService";

const OurService = () => {
  const [service] = useService();
  const serviceItems = service.filter(
    (item) => item.category === "Engine Replace"
  );

  return (
    <section>
      <SectionTitle
        subHeading="Our Service Car"
        heading="Provide Best Car Service"
      />
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-5 mt-5 mb-8">
        {serviceItems.map((item) => (
          <OurServiceCard key={item._id} item={item} />
        ))}
      </div> 
    </section>
  );
};

export default OurService;
