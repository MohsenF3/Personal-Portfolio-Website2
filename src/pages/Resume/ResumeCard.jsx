import React, { useState } from "react";

const ResumeCard = (props) => {
  const [showInfo, setShowInfo] = useState(false);
  return (
    <>
      <div className="resume-item">
        <div
          className="resume-item-header"
          onClick={() => setShowInfo(!showInfo)}
        >
          <h3 className="resume-item-title">{props.title}</h3>
          <span className="resume-icon">{showInfo ? "+" : "-"}</span>
        </div>
        <div className={`${showInfo ? "show-info" : ""} resume-data`}>
          <div className="resume-data-content">
            <h4 className="resume-data-title">{props.subtitle}</h4>
            <span className="resume-data-date">{props.date}</span>
          </div>
          <p className="resume-description">{props.description}</p>
        </div>
      </div>
    </>
  );
};

export default ResumeCard;
