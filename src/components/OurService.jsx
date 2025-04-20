import SectionTitle from "./SectionTittle";
import OurServiceCard from "./OurServiceCard";
import useService from "../hooks/useService";

const OurService = () => {
  const [service] = useService();
  const engineService = service.filter(
    (item) => item.category === "Engine Replace"
  );
  const carObservation = service.filter(
    (item) => item.category === "Car Observation"
  );
  const homeService = service.filter(
    (item) => item.category === "Car Observation"
  );

  return (
    <div>
      {/* Car Service */}
      <section>
        <SectionTitle
          subHeading="Our Service Car"
          heading="Provide Best Car Service"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-5 mt-5 mb-8">
          {engineService.map((item) => (
            <OurServiceCard key={item._id} item={item} />
          ))}
        </div>
      </section>
      {/* car observation */}
      <section>
        <SectionTitle
          subHeading="Our Service Car"
          heading="Provide Best Car Observation"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-5 mt-5 mb-8">
          {carObservation.map((item) => (
            <OurServiceCard key={item._id} item={item} />
          ))}
        </div>
      </section>
      {/* Home Service */}
      <section>
        <SectionTitle
          subHeading="Our Service Car"
          heading="Provide Best Home Service"
        />
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ml-8 gap-5 mt-5 mb-8">
          {homeService.map((item) => (
            <OurServiceCard key={item._id} item={item} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default OurService;
