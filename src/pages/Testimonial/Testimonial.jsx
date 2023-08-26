import React from "react";

import "./Testimonial.css";

import shape1 from "../../assets/shape-1.png";
import shape2 from "../../assets/shape-2.png";
import testimonialIcon from "../../assets/testimonials-icon.svg";

import { testimonials } from "../../Data";
import { FaArrowRight } from "react-icons/fa";

// ============== swiper ==================
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <section className="section" id="testimonial">
        <h1 className="section-title space-letter">testimonial</h1>
        <h3 className="section-subtitle">
          my<span>customers say</span>
        </h3>
        <Swiper
          spaceBetween={40}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 40,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 60,
            },
          }}
          modules={[Pagination]}
          className="testimonial-container container"
        >
          {testimonials.map(({ img, name, author, description }, index) => {
            return (
              <SwiperSlide className="testimonial-card card" key={index}>
                <div className="testimonial-card-header">
                  <img
                    src={testimonialIcon}
                    alt=""
                    className="testimonial-card-icon"
                  />
                  <img src={img} alt="" className="testimonial-card-img" />
                </div>
                <p className="testimonial-card-description">{description}</p>
                <h3 className="testimonial-card-name">{name}</h3>
                <h4 className="testimonial-card-author">{author}</h4>
                <img src={shape2} alt="" className="shape card-shape" />
              </SwiperSlide>
            );
          })}
        </Swiper>
        <div className="deco right-deco">
          <img src={shape1} alt="" className="shape deco-shape" />
        </div>
      </section>
    </>
  );
};

export default Testimonial;
