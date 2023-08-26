import React, { useState } from "react";

const ResumeCard = ({ title, subTitle, date, description }) => {
  const [showHidden, setShowHidden] = useState(false);
  return (
    <>
      <div className="resume-card">
        <div
          className="resume-card-header"
          onClick={() => setShowHidden(!showHidden)}
        >
          <h3 className="resume-card-title">{title}</h3>
          <div className="resume-card-icon">{showHidden ? "-" : "+"}</div>
        </div>
        <div
          className={`resume-card-hidden ${showHidden ? "show-hidden" : ""}`}
        >
          <div className="resume-card-info">
            <h4 className="resume-card-subtitle">{subTitle}</h4>
            <span className="resume-card-date">{date}</span>
          </div>
          <p className="resume-card-description">{description}</p>
        </div>
      </div>
    </>
  );
};

export default ResumeCard;
