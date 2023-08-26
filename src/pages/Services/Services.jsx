import React from "react";

import "./Services.css";

import shape1 from "../../assets/shape-1.png";
import shape2 from "../../assets/shape-2.png";

import { services } from "../../Data";
import { FaArrowRight } from "react-icons/fa";

// ============== swiper ==================
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";

const Services = () => {
  return (
    <>
      <section className="section" id="services">
        <h1 className="section-title space-letter">what i do</h1>
        <h3 className="section-subtitle">
          my<span>services</span>
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
          className="services-container container"
        >
          {services.map(({ name, title, description }, index) => {
            return (
              <SwiperSlide className="services-card card" key={index}>
                <span className="services-name space-letter">{name}</span>
                <h3 className="services-title">{title}</h3>
                <p className="services-description">{description}</p>
                <a href="#pricing" className="card-pricing">
                  see pricing
                  <FaArrowRight className="pricing-icon"></FaArrowRight>
                </a>
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

export default Services;
