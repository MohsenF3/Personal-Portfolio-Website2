import React from "react";

import "./Contact.css";
import FormValidation from "./FormValidation";

import shape1 from "../../assets/shape-1.png";

import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";

const Contact = () => {
  return (
    <>
      <section className="section " id="contact">
        <h1 className="section-title space-letter">contact me</h1>
        <h3 className="section-subtitle">
          let's<span>talk about ideas</span>
        </h3>
        <div className="contact-container container grid">
          <div className="contact-content">
            <div className="contact-item">
              <div className="contact-icon">
                <FaRegMap className="contact-icon-icon"></FaRegMap>
              </div>
              <div className="contact-info">
                <h3 className="contact-info-title">address</h3>
                <span className="contact-info-info">shiraz , iran</span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaRegUser className="contact-icon-icon"></FaRegUser>
              </div>
              <div className="contact-info">
                <h3 className="contact-info-title">freelance</h3>
                <span className="contact-info-info">
                  not available right now
                </span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaRegEnvelope className="contact-icon-icon"></FaRegEnvelope>
              </div>
              <div className="contact-info">
                <h3 className="contact-info-title">email</h3>
                <span className="contact-info-info">
                  3mohsenfaramarzi@gmail.com
                </span>
              </div>
            </div>
            <div className="contact-item">
              <div className="contact-icon">
                <FaRegAddressBook className="contact-icon-icon"></FaRegAddressBook>
              </div>
              <div className="contact-info">
                <h3 className="contact-info-title">phone</h3>
                <span className="contact-info-info">+1 1000 2400 20</span>
              </div>
            </div>
          </div>
          <FormValidation />
        </div>
        <div className="deco left-deco">
          <img src={shape1} alt="" className="shape deco-shape contact-shape" />
        </div>
      </section>
    </>
  );
};

export default Contact;
