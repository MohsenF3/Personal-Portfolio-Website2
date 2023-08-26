import React, { useEffect, useState } from "react";

import "./Header.css";
import Navbar from "./Navbar";

import { FaSun, FaMoon } from "react-icons/fa";

import { Link, animateScroll } from "react-scroll";

const getTheme = () => {
  let theme = "dark-mood";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};

const Header = () => {
  const [openNav, setOpenNav] = useState(false);
  const [scrollNav, setScrollNav] = useState(false);
  const [theme, setTheme] = useState(getTheme());
  const handleToTop = () => {
    animateScroll.scrollToTop();
  };

  const toggleTheme = () => {
    if (theme === "dark-mood") {
      setTheme("light-mood");
    } else {
      setTheme("dark-mood");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };

  return (
    <>
      <nav className={`nav ${scrollNav ? "nav-scrolled" : ""}`}>
        <Link className="nav-logo " duration={50} onClick={handleToTop}>
          Mohsen
        </Link>
        <Navbar openNav={openNav} setOpenNav={setOpenNav} />
        <div className="nav-btns">
          <div className="theme" onClick={toggleTheme}>
            {theme === "dark-mood" ? <FaSun /> : <FaMoon />}
          </div>
          <div
            className={`nav-toggle ${openNav ? "show-nav" : ""}`}
            onClick={() => setOpenNav(!openNav)}
          >
            <span></span>
            <span></span>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;
