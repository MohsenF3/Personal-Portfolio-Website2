import React from "react";

import "./Skills.css";

import { skills } from "../../Data";

import shape1 from "../../assets/shape-1.png";

const Skills = () => {
  return (
    <>
      <section className="section skills" id="skills">
        <h1 className="section-title space-letter">professional skills</h1>
        <h3 className="section-subtitle">
          my<span>talent</span>
        </h3>
        <div className="skills-container container grid">
          {skills.map(({ name, percentage, description }, index) => {
            return (
              <div className="skills-card" key={index}>
                <div className="skills-card-info">
                  <div className="skills-card-header">
                    <h4 className="skills-name">{name}</h4>
                    <h5 className="skills-percentage">
                      {percentage}
                      <span>%</span>
                    </h5>
                  </div>
                  <p className="skills-description">{description}</p>
                </div>
                <div className="skills-pro">
                  <span
                    className="skills-pro-line"
                    style={{ width: `${percentage}%` }}
                  ></span>
                </div>
              </div>
            );
          })}
        </div>
        <div className="deco left-deco">
          <img src={shape1} alt="" className="shape deco-shape" />
        </div>
      </section>
    </>
  );
};

export default Skills;
