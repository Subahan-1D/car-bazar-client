import React from "react";
import useService from "../../hooks/useService";
import SectionTitle from "../../components/SectionTittle";
import OurServiceCard from "../../components/OurServiceCard";

const ServiceCategory = () => {
  const [service] = useService();
  const brackService = service.filter(
    (item) => item.category === "Brake Service"
  );
  const tireService = service.filter(item => item.category === 'Tire Repair')
  const batteryService = service.filter(item => item.category === 'Battery Service')

  return (
    <div className="mt-10">
        {/* Breack Service */}
      <section>
        <SectionTitle
          subHeading="Our Service Car"
          heading="Provide Best Car Breack Service"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-5  mt-10 mb-8">
          {brackService.map((item) => (
            <OurServiceCard key={item._id} item={item} />
          ))}
        </div>
      </section>
      {/* Tire Service */}
      <section>
        <SectionTitle
          subHeading="Our Service Car"
          heading="Provide  Car Tire Service"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-5  mt-10 mb-8">
          {tireService.map((item) => (
            <OurServiceCard key={item._id} item={item} />
          ))}
        </div>
      </section>
      {/* Battery Service */}
      <section>
        <SectionTitle
          subHeading="Our Service Car"
          heading="Provide Car Battery Service"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-5  mt-10 mb-8">
          {batteryService.map((item) => (
            <OurServiceCard key={item._id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default ServiceCategory;
