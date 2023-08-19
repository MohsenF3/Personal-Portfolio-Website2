import React from "react";

import { FaArrowRight } from "react-icons/fa";

import shape1 from "../../assets/shape-2.png";

import { motion } from "framer-motion";

const Items = ({ portfolioItems }) => {
  return (
    <>
      {portfolioItems.map(({ img, category, title, description }, index) => {
        return (
          <motion.div
            initial={{ scale: 0.6, opacity: 0.8 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.6, opacity: 0.8 }}
            transition={{ duration: 0.3 }}
            className="portfolio-card"
          >
            <div className="portfolio-img-wrapper">
              <img src={img} alt="" className="portfolio-img" />
            </div>
            <span className="portfolio-category">{category}</span>
            <h3 className="portfolio-title">{title}</h3>
            <p className="portfolio-description">{description}</p>
            <a href="#" className="link">
              see pricing
              <FaArrowRight className="link-icon"></FaArrowRight>
            </a>
            <img src={shape1} alt="" className="portfolio-shape shape" />
          </motion.div>
        );
      })}
    </>
  );
};

export default Items;
