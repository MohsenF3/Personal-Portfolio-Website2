import React from "react";

import { FaTelegram, FaGithub, FaInstagram } from "react-icons/fa";

import pdf from "../../assets/my.pdf";
import me from "../../assets/me.png";
import shape1 from "../../assets/shape-1.png";
import shape2 from "../../assets/shape-2.png";

import "./Home.css";

const Home = () => {
  return (
    <>
      <section className="section home" id="home">
        <div className="home-container container">
          <div className="home-info">
            <h3 className="home-uptitle space-letter">
              hello , <span>my name is</span>
            </h3>
            <h1 className="home-title">
              mohsen<span>faramarzi</span>
            </h1>
            <h3 className="home-subtitle">
              i am <span>web developer</span>
            </h3>
          </div>
          <div className="home-img-wrapper">
            <div className="home-banner">
              <img src={me} alt="Home Image" className="home-img" />
            </div>
            <div className="home-banner-box btn box-1">
              <span>2</span>
              <span>+</span>
              <span>
                years of <div>experience</div>
              </span>
            </div>
            <div className="home-banner-box btn box-2">
              <span>10</span>
              <span>
                completed<div>projects</div>
              </span>
            </div>
            <img
              src={shape1}
              alt="Home Shape"
              className="shape home-shape shape1"
            />
            <img
              src={shape2}
              alt="Home Shape"
              className="shape home-shape shape2"
            />
            <img
              src={shape2}
              alt="Home Shape"
              className="shape home-shape shape3"
            />
          </div>
          <div className="home-data">
            <p className="home-description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus
              nulla facere, consectetur tempore aliquam quos esse quis eius eum
              numquam accusamus.
            </p>
            <div className="social home-social">
              <a href="#" className="social-link">
                <FaTelegram className="social-icon"></FaTelegram>
              </a>
              <a href="#" className="social-link">
                <FaGithub className="social-icon"></FaGithub>
              </a>
              <a href="#" className="social-link">
                <FaInstagram className="social-icon"></FaInstagram>
              </a>
            </div>
            <div className="home-btns">
              <a href={pdf} download className="btn home-btn">
                download cv
              </a>
              <a href="#skills" className="home-skills-btn space-letter">
                my skills
              </a>
            </div>
          </div>
        </div>
        <div className="deco left-deco home-deco">
          <img src={shape1} alt="" className="shape deco-shape" />
        </div>
      </section>
    </>
  );
};

export default Home;
