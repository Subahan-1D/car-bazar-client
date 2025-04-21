import React from "react";
import { Link, Links } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
import { Parallax, Background } from "react-parallax";
const ContactCover = ({ img }) => {
  return (
    <Parallax
      blur={{ min: -30, max: 30 }}
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
              <Link to="/contact">Contact</Link>
            </div>
            <button className="btn btn-primary mb-5 mt-5 text-xl">
              Contact Us
            </button>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default ContactCover;
