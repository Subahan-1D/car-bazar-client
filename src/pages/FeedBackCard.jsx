import React from "react";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const TestimonialCard = ({ testimonial }) => {
  const { name, image, rating, review } = testimonial;

  // Generate stars dynamically
  const renderStars = () => {
    const fullStars = Math.floor(rating);
    const halfStar = rating % 1 >= 0.5;
    const emptyStars = 5 - fullStars - (halfStar ? 1 : 0);

    return (
      <>
        {[...Array(fullStars)].map((_, i) => (
          <FaStar key={`full-${i}`} className="text-yellow-400" />
        ))}
        {halfStar && <FaStarHalfAlt className="text-yellow-400" />}
        {[...Array(emptyStars)].map((_, i) => (
          <FaRegStar key={`empty-${i}`} className="text-yellow-400" />
        ))}
      </>
    );
  };

  return (
    <div className="bg-black bg-opacity-60 text-white rounded-lg p-6 shadow-lg max-w-md relative">
      <div className="flex items-center gap-4 mb-4">
        <img
          src={image}
          alt={name}
          className="w-12 h-12 rounded-full border-2 border-white object-cover"
        />
        <div>
          <h3 className="text-lg font-semibold">{name}</h3>
          <div className="flex">{renderStars()}</div>
        </div>
      </div>
      <p className="text-sm text-gray-300 leading-relaxed">{review}</p>
    </div>
  );
};

export default TestimonialCard;
