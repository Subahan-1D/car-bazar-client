import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import coverImg from "../../../public/coverImg.jpg";
import WelcomeSection from "./WelcomeSection";
import ServicesSection from "./ServicesSection";
import MechanicCard from "../MechanicCard";
import OurExpert from "./OurExpert";
import ServiceCategory from "./ServiceCategory";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>carBazar | About</title>
      </Helmet>
      <Cover img={coverImg}></Cover>
      <WelcomeSection></WelcomeSection>
      <ServicesSection></ServicesSection>
      <ServiceCategory></ServiceCategory>
      <OurExpert></OurExpert>
    </div>
  );
};

export default About;
