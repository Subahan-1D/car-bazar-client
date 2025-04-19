import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import MechanicCard from "./MechanicCard";
import OurService from "../components/OurService";
import Featured from "./Featuared";
import FeedBack from "./FeedBack";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <MechanicCard></MechanicCard>
      <Category></Category>
      <OurService></OurService>
      <Featured></Featured>
      <FeedBack></FeedBack>
    </div>
  );
};

export default Home;
