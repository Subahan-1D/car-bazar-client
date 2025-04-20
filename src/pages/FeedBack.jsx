import React, { useEffect, useState } from "react";
import SectionTitle from "../components/SectionTittle";
import FeedBackCard from "../pages/FeedBackCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Keyboard, Pagination, Navigation } from "swiper/modules";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
const FeedBack = () => {
  const [feedBack, setFeedBack] = useState([]);
  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/feedback`)
      .then((res) => res.json())
      .then((data) => setFeedBack(data));
  }, []);
  return (
    <div className="mb-10 mt-10">
      <SectionTitle heading="Client Feedback" subHeading=""></SectionTitle>
      <section className="feed-back text-white bg-fixed">
        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          keyboard={{
            enabled: true,
          }}
          pagination={{
            clickable: true,
          }}
          navigation={true}
          modules={[Keyboard, Pagination, Navigation]}
          className="mySwipern"
        >
          <SwiperSlide>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-10">
              {feedBack.map((testimonial) => (
                <FeedBackCard
                  key={testimonial._id}
                  testimonial={testimonial}
                ></FeedBackCard>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-10">
              {feedBack.map((testimonial) => (
                <FeedBackCard
                  key={testimonial._id}
                  testimonial={testimonial}
                ></FeedBackCard>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-10">
              {feedBack.map((testimonial) => (
                <FeedBackCard
                  key={testimonial._id}
                  testimonial={testimonial}
                ></FeedBackCard>
              ))}
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 py-10 px-10">
              {feedBack.map((testimonial) => (
                <FeedBackCard
                  key={testimonial._id}
                  testimonial={testimonial}
                ></FeedBackCard>
              ))}
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default FeedBack;
