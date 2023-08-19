import React from "react";

import "./Skills.css";

import { skills } from "../../Data";

function Skills() {
  return (
    <>
      <section className="skills section" id="skills">
        <h1 className="section-title">professional skills</h1>
        <h3 className="section-subtitle">
          my<span>talent</span>
        </h3>
        <div className="container skills-container grid">
          {skills.map(({ name, percentage, description }, index) => {
            return (
              <>
                <div className="skills-data" key={index}>
                  <div className="skills-content">
                    <h3 className="skills-name">{name}</h3>
                    <span className="skills-percentage">
                      {percentage} <span>%</span>{" "}
                    </span>
                  </div>
                  <p className="skills-description">{description}</p>
                  <div className="skills-range">
                    <div
                      className="skills-value"
                      style={{ width: `${percentage}%` }}
                    >
                      <span></span>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
}

export default Skills;
