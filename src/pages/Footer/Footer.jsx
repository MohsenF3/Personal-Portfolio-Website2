import React from "react";

import { FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container container">
          <div className="social footer-social">
            <a href="#" className="social-link">
              <FaGithub />
            </a>
            <a href="#" className="social-link">
              <FaInstagram />
            </a>
            <a href="#" className="social-link">
              <FaWhatsapp />
            </a>
          </div>
          <p className="footer-copy">
            &copy; 2023 <span>luique</span> , all right reserved
          </p>

          <p className="footer-develope">
            developed by <span>mohsen</span>
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
