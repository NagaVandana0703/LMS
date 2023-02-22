import React, { useState, useEffect } from "react";
import { CgProfile } from "react-icons/cg";
import cal from "./../assets/perm_contact_calendar.png";
// import BellNotification from "../components/bellComponent/bell";
import "./Header.css";
import user from "./UserDetails";
import Dropdown from 'react-bootstrap/Dropdown';
import { BiBookOpen } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate=useNavigate();
  const items = [
    {
      icon: (
        <CgProfile
          size="1.8em"
          style={{ backgroundColor: "white" }}
          className="profile"
        />
      ),
      items: [
        {
          label: "",
        },
      ],
    },
  ];
  const openInNewTab = (url) => {
    localStorage.clear()
    navigate('/')
    // window.open(process.env.REACT_APP_LOGOUT_URL, "_self");


  };

  //  let user_details =JSON.parse(localStorage.getItem('userDetails'))
  let user_details = { displayName: 'Vandana', role: 'Admin' };

  return (
    <div className="header-block">

      <header>
        <div className="logo">
          <a className="header-title-new">
            <BiBookOpen />
            {/* <img src={cal} alt="ftp_cal" className="ftpCal" /> */}
            <div className="txt">Library Management Sysytem</div>
          </a>
        </div>
        <div className="rightIcons">
          {/* <BellNotification /> */}
          <div className="user_designation">
            <div className="user_details" >
              <div className="user_name_innova">{user_details.displayName}</div>
              <div className="user_designation_innova">{user_details.role}</div>
            </div>
            <Dropdown>
              <Dropdown.Toggle className="dropdown-basic">
                <img src={user.image} className="user-image-innova" alt="profilepic" /></Dropdown.Toggle>
              <Dropdown.Menu>
                <Dropdown.Item onClick={openInNewTab} className="logout-header-sso">Log Out</Dropdown.Item></Dropdown.Menu>
            </Dropdown>
          </div>
        </div>
      </header>
    </div>
  );
}
export default Header;