import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Parallax, Background } from "react-parallax";
const Cover = ({ img }) => {
  return (
    <Parallax
      blur={{ min: -50, max: 50 }}
      bgImage={img}
      bgImageAlt="the service"
      strength={-200}
    >
      <div className="hero  h-[600px] rounded-md">
        <div className="hero-overlay"></div>
        <div className="hero-content text-neutral-content text-center">
          <div className="max-w-md">
            <div className="flex justify-between items-center text-2xl">
              <Link to="/">Home</Link>
              <IoIosArrowForward></IoIosArrowForward>
              <Link to="/about">About</Link>
            </div>
            <Link to='/contact' className="btn btn-primary mb-5 mt-5 text-xl">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default Cover;
