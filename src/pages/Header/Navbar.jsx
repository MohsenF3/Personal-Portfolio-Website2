import React from "react";

import { links } from "../../Data";

import { Link } from "react-scroll";

import shape1 from "../../assets/shape-1.png";

const Navbar = ({ openNav, setOpenNav }) => {
  return (
    <>
      <div className={`nav-menu ${openNav ? "open-nav" : ""}`}>
        <ul className="nav-list">
          {links.map(({ name, path }, index) => {
            return (
              <li className="nav-item" key={index}>
                <Link
                  to={path}
                  activeClass="active-link"
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  offset={-100}
                  duration={50}
                  className="nav-link category-name"
                  onClick={() => setOpenNav(false)}
                >
                  {name}
                </Link>
              </li>
            );
          })}
        </ul>
        <img src={shape1} alt="Navbar Shape" className="shape nav-shape" />
        <div className="deco left-deco nav-deco"></div>
      </div>
    </>
  );
};

export default Navbar;
