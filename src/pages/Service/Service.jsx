import React, { useState } from "react";
import serviceImg from "../../../public/serviceImg.jpg";
import ServiceCoverImg from "./ServiceCovarImg";
import { Helmet } from "react-helmet-async";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import useService from "../../hooks/useService";
import ServiceTab from "./ServiceTab";

const Service = () => {
  const [tabIndex, setTabIndex] = useState(0);
  const [service] = useService();

  const homeService = service.filter((item) => item.category === "Home Service");
  const brackService = service.filter((item) => item.category === "Brake Service");
  const engineService = service.filter((item) => item.category === "Engine Replace");
  const batteryService = service.filter((item) => item.category === "Battery Service");
  const carObservation = service.filter((item) => item.category === "Car Observation");
  const tireService = service.filter((item) => item.category === "Tire Repair");

  const tabTitles = [
    "Home Service",
    "Brake Service",
    "Engine Replace",
    "Battery Service",
    "Car Observation",
    "Tire Repair",
  ];

  return (
    <div className="mt-10 mb-10 bg-gray-100 rounded-md">
      <Helmet>
        <title>carBazar | Service</title>
      </Helmet>
      <ServiceCoverImg img={serviceImg} />

      <div className="max-w-6xl mx-auto px-4 py-10 ">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList className="flex flex-wrap justify-center md:justify-start gap-3 mb-8">
            {tabTitles.map((title, index) => (
              <Tab
                key={index}
                className={`px-5 py-2 rounded-full text-sm font-medium transition duration-300 cursor-pointer border
                ${
                  tabIndex === index
                    ? "bg-blue-600 text-white shadow-md border"
                    : "bg-white text-black font-bold border-blue-600 hover:bg-blue-100 hover:text-blue-600"
                }`}
              >
                {title}
              </Tab>
            ))}
          </TabList>

          <TabPanel>
            <ServiceTab items={homeService} />
          </TabPanel>
          <TabPanel>
            <ServiceTab items={brackService} />
          </TabPanel>
          <TabPanel>
            <ServiceTab items={engineService} />
          </TabPanel>
          <TabPanel>
            <ServiceTab items={batteryService} />
          </TabPanel>
          <TabPanel>
            <ServiceTab items={carObservation} />
          </TabPanel>
          <TabPanel>
            <ServiceTab items={tireService} />
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default Service;
