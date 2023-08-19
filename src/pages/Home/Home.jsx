import pdf from "../../assets/my.pdf";
import myImg from "../../assets/me.png";
import shape1 from "../../assets/shape-1.png";
import shape2 from "../../assets/shape-2.png";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./Home.css";
import React from "react";

const Home = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="home-container container grid">
          <div className="home-content">
            <div className="home-data">
              <h4 className="home-subtitle">
                HELLO , <span>MY NAME IS</span>
              </h4>
              <h1 className="home-title">
                <span>MOHSEN</span> FARAMARZI
              </h1>
              <h4 className="home-job">
                I AM <span>WEB DEVELOPER</span>
              </h4>
              <p className="home-description">
                I like to talk with you about our unique. Lorem ipsum dolor sit
                amet consectetur adipisicing elit. Vero, saepe! Lorem ipsum
                dolor sit amet, consectetur adipisicing elit. In, ea.
              </p>
            </div>
            <div className="home-social">
              <a href="#" className="home-link">
                <FaGithub />
              </a>
              <a href="#" className="home-link">
                <FaInstagram />
              </a>
              <a href="#" className="home-link">
                <FaWhatsapp />
              </a>
            </div>
            <div className="home-btns">
              <a href={pdf} download="" className="btn">
                Download PDF
              </a>
              <a href="#" className="hero-link">
                My Skills
              </a>
            </div>
          </div>

          <div className="home-img">
            <img src={myImg} alt="Me" />
            <div className="experience btn">
              <span className="number">1</span>
              <span className="plus">+</span>
              <span className="data">
                years of <span>experience</span>
              </span>
            </div>
            <div className="complete btn">
              <span className="number">12</span>
              <span className="data">
                complete <span>projects</span>
              </span>
            </div>
            <img src={shape1} className="shape shape1" alt="" />
            <img src={shape2} className="shape shape2" alt="" />
            <img src={shape2} className="shape shape3" alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
