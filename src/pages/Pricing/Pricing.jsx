import React from "react";

import { FaCheck, FaArrowRight } from "react-icons/fa";

import shape1 from "../../assets/shape-1.png";
import shape2 from "../../assets/shape-2.png";

import "./Pricing.css";

const Pricing = () => {
  return (
    <>
      <section className="section " id="pricing">
        <h1 className="section-title space-letter">pricing</h1>
        <h3 className="section-subtitle">
          my<span>price board</span>
        </h3>
        <div className="pricing-container container grid">
          <div className="pricing-card card">
            <span className="pricing-subtitle">hourley basis</span>
            <h3 className="pricing-price">
              39 <span>$</span> <em> hour</em>
            </h3>
            <p className="pricing-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              suscipit neque fugiat! Magni, tempora. Accusamus doloribus magnam
              nesciunt, optio, esse soluta porro aperiam maiores neque corrupti
              libero possimus error consequuntur.
            </p>
            <ul className="pricing-menu">
              <li className="pricing-list">
                <FaCheck className="pricing-check"></FaCheck>
                <span className="pricing-item">brand design</span>
              </li>
              <li className="pricing-list">
                <FaCheck className="pricing-check"></FaCheck>
                <span className="pricing-item">web development</span>
              </li>
              <li className="pricing-list">
                <del>advertising</del>
              </li>
              <li className="pricing-list">
                <del>photography</del>
              </li>
            </ul>
            <a href="#pricing" className="btn pricing-btn">
              see pricing
              <FaArrowRight className="pricing-card-icon"></FaArrowRight>
            </a>
            <img src={shape2} alt="" className="pricing-shape shape" />
          </div>
          <div className="pricing-card card card-two">
            <span className="pricing-subtitle">freelancing</span>
            <h3 className="pricing-price">
              259 <span>$</span> <em> week</em>
            </h3>
            <p className="pricing-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              suscipit neque fugiat! Magni, tempora. Accusamus doloribus magnam
              nesciunt, optio, esse soluta porro aperiam maiores neque corrupti
              libero possimus error consequuntur.
            </p>
            <ul className="pricing-menu">
              <li className="pricing-list">
                <FaCheck className="pricing-check"></FaCheck>
                <span className="pricing-item">brand design</span>
              </li>
              <li className="pricing-list">
                <FaCheck className="pricing-check"></FaCheck>
                <span className="pricing-item">web development</span>
              </li>
              <li className="pricing-list">
                <FaCheck className="pricing-check"></FaCheck>
                <span className="pricing-item">advertising</span>
              </li>
              <li className="pricing-list">
                <del>photography</del>
              </li>
            </ul>
            <a href="#pricing" className="btn pricing-btn">
              see pricing
              <FaArrowRight className="pricing-card-icon"></FaArrowRight>
            </a>
            <img src={shape2} alt="" className="pricing-shape shape" />
          </div>
          <div className="pricing-card card">
            <span className="pricing-subtitle">full time</span>
            <h3 className="pricing-price">
              1,249 <span>$</span> <em> month</em>
            </h3>
            <p className="pricing-description">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Odit
              suscipit neque fugiat! Magni, tempora. Accusamus doloribus magnam
              nesciunt, optio, esse soluta porro aperiam maiores neque corrupti
              libero possimus error consequuntur.
            </p>
            <ul className="pricing-menu">
              <li className="pricing-list">
                <FaCheck className="pricing-check"></FaCheck>
                <span className="pricing-item">brand design</span>
              </li>
              <li className="pricing-list">
                <FaCheck className="pricing-check"></FaCheck>
                <span className="pricing-item">web development</span>
              </li>
              <li className="pricing-list">
                <FaCheck className="pricing-check"></FaCheck>
                <span className="pricing-item">advertising</span>
              </li>
              <li className="pricing-list">
                <FaCheck className="pricing-check"></FaCheck>
                <span className="pricing-item">photography</span>
              </li>
            </ul>
            <a href="#pricing" className="btn pricing-btn">
              see pricing
              <FaArrowRight className="pricing-card-icon"></FaArrowRight>
            </a>
            <img src={shape2} alt="" className="pricing-shape shape" />
          </div>
          <span className="badge space-letter">popular</span>
        </div>
        <div className="deco left-deco">
          <img
            src={shape1}
            alt=""
            className="shape deco-shape pricing-deco-shape"
          />
        </div>
      </section>
    </>
  );
};

export default Pricing;
