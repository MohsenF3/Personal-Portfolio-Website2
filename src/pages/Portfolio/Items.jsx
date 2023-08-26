import React from "react";

import shape2 from "../../assets/shape-2.png";

import { FaArrowRight } from "react-icons/fa";

import { motion } from "framer-motion";

const Items = ({ projects }) => {
  return (
    <>
      {projects.map(({ img, category, title, description }, index) => {
        return (
          <motion.div
            layout
            initial={{ scale: 0.6, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            className="portfolio-card card"
            key={index}
          >
            <div className="portfolio-card-img">
              <img
                src={img}
                alt="Portfolio Image"
                className="portfolio-card-banner"
              />
            </div>
            <span className="portfolio-card-category space-letter">
              {category}
            </span>
            <h3 className="portfolio-card-title">{title}</h3>
            <p className="portfolio-card-description">{description}</p>
            <a href="#pricing" className="card-pricing">
              see pricing
              <FaArrowRight className="pricing-icon"></FaArrowRight>
            </a>
            <img src={shape2} alt="" className="shape portfolio-card-shape" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
