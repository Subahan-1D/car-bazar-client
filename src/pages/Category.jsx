import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

import bmw from "../../public/bmw.jpg";
import hayes from "../../public/hayes.jpeg";
import slide1 from "../../public/slide1.jpeg";
import slide2 from "../../public/slide2.jpeg";
import slide3 from "../../public/slide3.jpg";
import slide4 from "../../public/slide4.jpg";
const slides = [
  { src: bmw, name: "BMW X5" },
  { src: hayes, name: "Hayes Classic" },
  { src: slide1, name: "Roadster" },
  { src: slide2, name: "Off-Road King" },
  { src: slide3, name: "Sport Coupe" },
  { src: slide4, name: "Vintage Cruiser" },
];

const Category = () => {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-12"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="w-full h-[300px] md:h-[400px] lg:h-[500px] mt-10 mb-4 overflow-hidden rounded-xl">
              <img
                src={slide.src}
                alt={`slide-${index}`}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/70 to-transparent text-white py-4 px-6">
              <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-center">
                {slide.name}
              </h2>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Category;
