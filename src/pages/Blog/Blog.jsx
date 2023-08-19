import React, { useState } from "react";

import "./Blog.css";

import { blog } from "../../Data";

import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <section className="section blog" id="blog">
        <h1 className="section-title">latest blog</h1>
        <h3 className="section-subtitle">
          my<span>articles and advice </span>
        </h3>
        <div className="blog-container container grid">
          {blog.map((item, index) => {
            return (
              <BlogCard
                key={index}
                id={item.id}
                date={item.date}
                title={item.title}
                img={item.img}
                description={item.description}
              />
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Blog;
