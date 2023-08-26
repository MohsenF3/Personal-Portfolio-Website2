import React from "react";

import "./Resume.css";
import ResumeCard from "./ResumeCard";

import shape1 from "../../assets/shape-1.png";

import { cv } from "../../Data";

const Resume = () => {
  return (
    <>
      <section className="section resume" id="resume">
        <h1 className="section-title space-letter">resume</h1>
        <h3 className="section-subtitle">
          my<span>story</span>
        </h3>
        <div className="resume-container container grid">
          <div className="resume-group">
            <h3 className="resume-title">education</h3>
            {cv.map((item, index) => {
              if (item.category === "education") {
                return (
                  <ResumeCard
                    key={index}
                    title={item.title}
                    subTitle={item.subtitle}
                    date={item.date}
                    description={item.description}
                  />
                );
              }
            })}
          </div>
          <div className="resume-group">
            <h3 className="resume-title">experience</h3>
            {cv.map((item, index) => {
              if (item.category === "experience") {
                return (
                  <ResumeCard
                    key={index}
                    title={item.title}
                    subTitle={item.subtitle}
                    date={item.date}
                    description={item.description}
                  />
                );
              }
            })}
          </div>
        </div>
        <div className="deco left-deco">
          <img src={shape1} alt="" className="shape deco-shape" />
        </div>
      </section>
    </>
  );
};

export default Resume;
