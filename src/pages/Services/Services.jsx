import React from "react";

import shape1 from "../../assets/shape-2.png";
import { services } from "../../Data";

import { FaArrowRight } from "react-icons/fa";

import "./Services.css";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { Pagination } from "swiper/modules";

const Services = () => {
  return (
    <>
      <section className="section services" id="services">
        <h1 className="section-title">what i do</h1>
        <h3 className="section-subtitle">
          my<span>services</span>
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
          className="services-container container mySwiper"
        >
          {services.map(({ name, title, description }, index) => {
            return (
              <SwiperSlide className="services-card" key={index}>
                <h4 className="services-card-subtitle">{name}</h4>
                <h2 className="services-card-title">{title}</h2>
                <p className="services-card-description">{description}</p>
                <a href="#" className="link">
                  see pricing
                  <FaArrowRight className="link-icon"></FaArrowRight>
                </a>
                <img src={shape1} alt="#" className="shape services-card-shape" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </>
  );
};

export default Services;
