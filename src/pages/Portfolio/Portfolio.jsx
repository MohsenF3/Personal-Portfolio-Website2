import React, { useState } from "react";

import Menu from "./Menu";
import Items from "./Items";

import "./Portfolio.css";

import { projects } from "../../Data";

import { AnimatePresence } from "framer-motion";

import shape1 from "../../assets/shape-1.png";

const allCategories = [
  "all",
  ...new Set(projects.map((item) => item.category)),
];

const Portfolio = () => {
  const [categories, setCategories] = useState(allCategories);
  const [items, setItems] = useState(projects);
  const filterItem = (category) => {
    if (category === "all") {
      return setItems(projects);
    }
    const filter = projects.filter((item) => item.category === category);
    setItems(filter);
  };
  return (
    <>
      <section className="section portfolio" id="portfolio">
        <h1 className="section-title space-letter">portfolio</h1>
        <h3 className="section-subtitle">
          my<span>cases</span>
        </h3>
        <Menu categories={categories} filterItem={filterItem} />
        <div className="portfolio-container container grid">
          <AnimatePresence initial="false">
            <Items projects={items} />
          </AnimatePresence>
        </div>
        <div className="deco right-deco">
          <img
            src={shape1}
            alt=""
            className="shape deco-shape portfolio-shape"
          />
        </div>
      </section>
    </>
  );
};

export default Portfolio;
