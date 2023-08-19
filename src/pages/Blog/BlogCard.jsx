import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa";

const BlogCard = ({ id, date, title, img, description }) => {
  const [showDesc, setShowDesc] = useState(false);
  return (
    <>
      <div className="blog-card" key={id}>
        <span className="blog-date">{date}</span>
        <h2 className="blog-title">{title}</h2>
        <p
          className={
            showDesc ? "blog-description show-extra" : "blog-description"
          }
        >
          {description}
        </p>
        <a
          href="#"
          className="blog-btn"
          onClick={(e) => {
            e.preventDefault();
            setShowDesc(!showDesc);
          }}
        >
          {showDesc ? "read less" : "read more"}
          <FaArrowRight className="blog-btn-icon"></FaArrowRight>
        </a>
        <img src={img} alt="" className="blog-img" />
      </div>
    </>
  );
};

export default BlogCard;
