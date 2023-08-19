import React, { useState } from "react";

import "./Portfolio.css";

const List = ({ allNavLinks, filterLink }) => {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <>
      <div className="portfolio-list">
        {allNavLinks.map((category, index) => {
          return (
            <a
              href=""
              className={
                activeLink === index
                  ? "portfolio-link active-link"
                  : "portfolio-link"
              }
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(index);
                filterLink(category);
              }}
            >
              {category}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default List;
