import React from "react";

import testimonialIcon from "../../assets/testimonials-icon.svg";
import { testimonials } from "../../Data";
import shape1 from "../../assets/shape-2.png";

import "./Testimonial.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Testimonial = () => {
  return (
    <>
      <section className="section testimonial" id="testimonial">
        <h1 className="section-title">testimonials</h1>
        <h3 className="section-subtitle">
          my<span>customer says</span>
        </h3>
        <Swiper
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            540: {
              slidesPerView: 1,
              spaceBetween: 30,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1200: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
          }}
          modules={[Pagination]}
          className="testimonial-container container mySwiper"
        >
          {testimonials.map(({ img, name, author, description }, index) => {
            return (
              <SwiperSlide className="testimonial-card" key={index}>
                <div className="testimonial-header">
                  <div className="testimonial-icon">
                    <img src={testimonialIcon} alt="" />
                  </div>
                  <img src={img} alt="" className="testimonial-img" />
                </div>
                <p className="testimonial-description">{description}</p>
                <h3 className="testimonial-author">{author}</h3>
                <span className="testimonial-name">{name}</span>
                <img src={shape1} alt="" className="testimonial-shape shape" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Testimonial;
