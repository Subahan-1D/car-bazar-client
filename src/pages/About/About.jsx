import React from "react";
import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover";
import coverImg from "../../../public/coverImg.jpg";
import WelcomeSection from "./WelcomeSection";
import ServicesSection from "./ServicesSection";
import MechanicCard from "../MechanicCard";
import OurExpert from "./OurExpert";
const About = () => {
  return (
    <div>
      <Helmet>
        <title>carBazar | About</title>
      </Helmet>
      <Cover img={coverImg}></Cover>
      <WelcomeSection></WelcomeSection>
      <ServicesSection></ServicesSection>
      <OurExpert></OurExpert>
    </div>
  );
};

export default About;
