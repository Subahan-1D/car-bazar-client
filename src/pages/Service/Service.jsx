import React from "react";
import serviceImg from "../../../public/serviceImg.jpg";
import ServiceCoverImg from "./ServiceCovarImg";
import { Helmet } from "react-helmet-async";

const Service = () => {
  return (
    <div>
        <Helmet>
            <title>carBazar | Service</title>
        </Helmet>
      <ServiceCoverImg img={serviceImg}></ServiceCoverImg>
    </div>
  );
};

export default Service;
