import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import img1 from "../../public/car4.jpg";
import img2 from "../../public/car5.jpg";
const Banner = () => {
  return (
    <Carousel>
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img src={img2} alt="Banner" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img src={img1} alt="Banner" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img src={img2} alt="Banner" className="w-full h-full object-cover" />
      </div>
      <div className="w-full h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden">
        <img src={img1} alt="Banner" className="w-full h-full object-cover" />
      </div>
    </Carousel>
  );
};

export default Banner;
