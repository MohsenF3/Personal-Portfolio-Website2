import React, { useState } from "react";

const Menu = ({ categories, filterItem }) => {
  const [activeLink, setActiveLink] = useState(0);
  return (
    <>
      <div className="category-list">
        {categories.map((name, index) => {
          return (
            <a
              href="#"
              className={
                activeLink === index
                  ? "category-name active-link"
                  : "category-name cat"
              }
              key={index}
              onClick={(e) => {
                e.preventDefault();
                setActiveLink(index);
                filterItem(name);
              }}
            >
              {name}
            </a>
          );
        })}
      </div>
    </>
  );
};

export default Menu;
