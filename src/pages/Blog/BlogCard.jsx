import React, { useState } from "react";

import { FaArrowRight } from "react-icons/fa";

const BlogCard = (props) => {
  const truncLength = 100;
  const [isShow, setShowHide] = useState(false);
  return (
    <>
      <div className="blog-card card">
        <span className="blog-card-date">{props.date}</span>
        <h3 className="blog-card-title">{props.title}</h3>

        <p>
          {" "}
          {isShow
            ? props.description
            : props.description.slice(0, truncLength)}{" "}
          {isShow ? "" : "..."}
          <button
            className="card-pricing blog-card-btn"
            onClick={() => setShowHide(!isShow)}
          >
            {isShow ? "Read Less" : "Read more"}
            <FaArrowRight className="pricing-icon"></FaArrowRight>
          </button>
        </p>

        <img src={props.img} alt="Blog Image" className="blog-card-img" />
      </div>
    </>
  );
};

export default BlogCard;
