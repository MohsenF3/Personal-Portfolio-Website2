import React from "react";

import "./Blog.css";
import BlogCard from "./BlogCard";

import shape1 from "../../assets/shape-1.png";

import { blog } from "../../Data";

const Blog = () => {
  return (
    <>
      <section className="section " id="blog">
        <h1 className="section-title space-letter">latest blog</h1>
        <h3 className="section-subtitle">
          my<span>articles and advice</span>
        </h3>
        <div className="blog-container container grid">
          {blog.map((item, index) => {
            return <BlogCard key={index} {...item} />;
          })}
        </div>
        <div className="deco right-deco">
          <img src={shape1} alt="" className="shape deco-shape" />
        </div>
      </section>
    </>
  );
};

export default Blog;
