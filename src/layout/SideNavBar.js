import React, { useState } from "react";
import "./SideNavBar.css";
import { BiHome } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbBoxMultiple } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import { AiOutlineLogout } from "react-icons/ai";
import { Link, NavLink, Navigate } from "react-router-dom";
// import logg from "./../assets/loggo.png"

function SideNavBar(props) {
  const { menuItems } = props;

  return (
    <div
      id="side-nav"
      className="side-nav-container"

    >
      <div className="nav-upper">
        <div className="nav-heading">
          {/* <button
            id="hamburger"
            className="hamburger"
           
          >
          <img src={logg} className='img_logg'/>
          </button> */}
        </div>
        <div className="nav-menu">
          {menuItems.map(({ text, icon, link }) => (
            <NavLink
              className="menu-item"
              to={link}
              activeClassName="active
              "
            >
              {icon}
              {<p id="txt">{text}</p>}
            </NavLink>
          ))}
        </div>
      </div>

    </div>
  );
}

export default SideNavBar;
