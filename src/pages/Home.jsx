import React from "react";
import Banner from "./Banner";
import Category from "./Category";
import MechanicCard from "./MechanicCard";
import OurService from "../components/OurService";
import Featured from "./Featuared";
import FeedBack from "./FeedBack";
import { Helmet } from "react-helmet-async";
const Home = () => {
  return (
    <div>
      <Helmet>
        <title>carBazar | Home</title>
      </Helmet>
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
