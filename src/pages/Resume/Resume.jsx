import React from "react";
import "./Resume.css";
import ResumeCard from "./ResumeCard";
import { cv } from "../../Data";
const Resume = () => {
  return (
    <>
      <section className="section resume" id="resume">
        <h1 className="section-title">Resume</h1>
        <h3 className="section-subtitle">
          my<span>story</span>
        </h3>
        <div className="resume-container container grid">
          <div className="resume-group">
            <h3 className="resume-title">Education</h3>
            <div className="resume-items">
              {cv.map((item, index) => {
                if (item.category === "education") {
                  return (
                    <ResumeCard
                      key={index}
                      title={item.title}
                      subtitle={item.subtitle}
                      date={item.date}
                      description={item.description}
                    />
                  );
                }
              })}
            </div>
          </div>
          <div className="resume-group">
            <h3 className="resume-title">Experience</h3>
            <div className="resume-items">
              {cv.map((item, index) => {
                if (item.category === "experience") {
                  return (
                    <ResumeCard
                      key={index}
                      title={item.title}
                      subtitle={item.subtitle}
                      date={item.date}
                      description={item.description}
                    />
                  );
                }
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
