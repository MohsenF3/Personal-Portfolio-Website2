import React, { useState } from "react";

import "./Contact.css";

import {
  FaRegAddressBook,
  FaRegEnvelope,
  FaRegUser,
  FaRegMap,
} from "react-icons/fa";
import axios from "axios";

const Contact = () => {
  const [input, setInput] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setInput({ ...input, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post(
        "https://sheet.best/api/sheets/d674c367-7d11-4d58-8da1-75a7aaaf210c",
        input
      )
      .then((response) => {
        setInput({ name: "", email: "", subject: "", message: "" });
      });
  };
  return (
    <>
      <section className="contact section " id="contact">
        <h1 className="section-title">contact me</h1>
        <h3 className="section-subtitle">
          let's<span>talk about ideas</span>
        </h3>
        <div className="contact-container container grid">
          <div className="contact-content">
            <div className="contact-content-item">
              <span className="contact-content-icon">
                <FaRegMap />
              </span>
              <h3 className="contact-content-title">address</h3>
              <span className="contact-content-subtitle">shiraz , iran</span>
            </div>
            <div className="contact-content-item">
              <span className="contact-content-icon">
                <FaRegUser />
              </span>
              <h3 className="contact-content-title">freelance</h3>
              <span className="contact-content-subtitle">
                not available right now
              </span>
            </div>
            <div className="contact-content-item">
              <span className="contact-content-icon">
                <FaRegEnvelope />
              </span>
              <h3 className="contact-content-title">email</h3>
              <span className="contact-content-subtitle">
                3mohsenfaramarzi@gmail.com
              </span>
            </div>
            <div className="contact-content-item">
              <span className="contact-content-icon">
                <FaRegAddressBook />
              </span>
              <h3 className="contact-content-title">phone</h3>
              <span className="contact-content-subtitle">+1 5400 2453</span>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="contact-form-item">
              <label>
                your fulll name <span>*</span>
              </label>
              <input
                name="name"
                value={input.name}
                onChange={handleChange}
                type="text"
                className="contact-input"
              />
            </div>
            <div className="contact-form-item">
              <label>
                your email address <span>*</span>
              </label>
              <input
                name="email"
                value={input.email}
                onChange={handleChange}
                type="email"
                className="contact-input"
              />
            </div>
            <div className="contact-form-item">
              <label>
                your subject <span>*</span>
              </label>
              <input
                name="subject"
                value={input.subject}
                onChange={handleChange}
                type="text"
                className="contact-input"
              />
            </div>
            <div className="contact-form-item">
              <label>
                your message <span>*</span>
              </label>
              <textarea
                name="message"
                value={input.message}
                onChange={handleChange}
                className="contact-input contact-textarea"
              ></textarea>
            </div>
            <div className="submit">
              <span>* accept the terms and conditions</span>
              <button type="submit" className="btn submit-btn">
                send message
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;
