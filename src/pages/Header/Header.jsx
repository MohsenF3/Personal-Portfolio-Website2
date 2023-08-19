import React, { useEffect, useState } from "react";

import { links } from "../../Data";

import "./Header.css";
import shape1 from "../../assets/shape-1.png";

import { FaSun, FaMoon, FaWhatsapp } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

import { Link, animateScroll } from "react-scroll";

const getLight = () => {
  let light = "dark-mod";
  if (localStorage.getItem("light")) {
    light = localStorage.getItem("light");
  }

  return light;
};

const Header = () => {
  const [openNav, setOpenNav] = useState(false);

  const [scroolNav, setScroolNav] = useState(false);

  const [theme, setTheme] = useState(getLight());

  useEffect(() => {
    document.body.classList.toggle("no-scrool", openNav);
  }, [openNav]);

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("light", theme);
  }, [theme]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleTop = () => {
    animateScroll.scrollToTop();
  };

  const handleScroll = () => {
    if (window.scrollY >= 80) {
      setScroolNav(true);
    } else {
      setScroolNav(false);
    }
  };

  const toggleTheme = () => {
    if (theme === "light-mood") {
      setTheme("dark-mood");
    } else {
      setTheme("light-mood");
    }
  };

  return (
    <>
      <header className={`${scroolNav ? "scroll-nav" : ""} header`}>
        <nav className="nav">
          <Link to="/" onClick={handleTop} className="nav-logo">
            Mohsen
          </Link>
          <div className={openNav ? "nav-content show-nav" : "nav-content"}>
            <img src={shape1} alt="" className="nav-shape" />
            <ul className="nav-menu">
              {links.map(({ name, path }, index) => {
                return (
                  <li className="nav-list" key={index}>
                    <Link
                      className="nav-link"
                      hashSpy={true}
                      to={path}
                      spy={true}
                      smooth={true}
                      offset={-40}
                      duration={500}
                      onClick={() => setOpenNav(!openNav)}
                    >
                      {name}
                    </Link>
                  </li>
                );
              })}
            </ul>
            <div className="home-social nav-social">
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
          </div>

          <div className="nav-btns">
            <div className="sun" onClick={toggleTheme}>
              {theme === "light-mood" ? <FaSun /> : <FaMoon />}
            </div>
            <div
              className={openNav ? "toggle-btn close-btn" : "toggle-btn"}
              onClick={() => setOpenNav(!openNav)}
            >
              <span></span>
              <span></span>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
