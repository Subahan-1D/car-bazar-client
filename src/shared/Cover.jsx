import React from "react";
import { Link } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";
const Cover = ({ img }) => {
  return (
    <div
      className="hero  h-[500px] rounded-md"
      style={{
        backgroundImage: `url("${img}")`,
      }}
    >
      <div className="hero-overlay"></div>
      <div className="hero-content text-neutral-content text-center">
        <div className="max-w-md">
          <div className="flex justify-between items-center text-2xl">
            <Link to="/">Home</Link>
            <IoIosArrowForward></IoIosArrowForward>
            <Link to="/about">About</Link>
          </div>
          <button className="btn btn-primary mb-5 mt-5 text-xl">
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cover;
