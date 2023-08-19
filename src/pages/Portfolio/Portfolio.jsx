import React, { useState } from "react";

import { projects } from "../../Data";
import List from "./List.jsx";
import Items from "./Items";

import { AnimatePresence } from "framer-motion";

const allNavLinks = ["all", ...new Set(projects.map((link) => link.category))];

const Portfolio = () => {
  const [navList, setNavList] = useState(allNavLinks);
  const [portfolioItems, setPortfolioItems] = useState(projects);

  const filterLink = (category) => {
    if (category === "all") {
      return setPortfolioItems(projects);
    }
    const filterItem = projects.filter((item) => item.category === category);
    setPortfolioItems(filterItem);
  };
  return (
    <>
      <section className="section portfolio" id="work">
        <h1 className="section-title">Portfolio</h1>
        <h3 className="section-subtitle">
          my<span>cases</span>
        </h3>
        <List allNavLinks={navList} filterLink={filterLink} />
        <div className="portfolio-container container grid">
          <AnimatePresence initial={false}>
            <Items portfolioItems={portfolioItems} />
          </AnimatePresence>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
