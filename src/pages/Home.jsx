import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import MechanicCard from "./MechanicCard";
import OurService from "../components/OurService";
import Featured from "./Featuared";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MechanicCard></MechanicCard>
      <Category></Category>
      <OurService></OurService>
      <Featured></Featured>
    </div>
  );
};

export default Home;
