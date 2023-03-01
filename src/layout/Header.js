import React, { useEffect } from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import { BiBookOpen } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadUserByNameRequest } from "../reduxsaga/actions";
import {  DropdownItemLogout, DropdownToggleBasic, Header1, HeaderBlock, HeaderTitleNew,  RightIcons, Text, UserDesignation, UserDesignationInnova, UserDetails, UserImageInnova, UserNameInnova } from "./LayoutStyles";

function Header() {
  const navigate=useNavigate();
  const openInNewTab = () => {
    localStorage.clear()
    navigate('/')

  };
 
  let user_details =JSON.parse(localStorage.getItem('user_details'))
//  let user_details={username:'Name',role:'Role'}
  console.log(user_details)
  const user={
    image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ13E7APiRYnJMkfaiVP5TFDrZSXolAQc0QhQ&usqp=CAU"
}
  return (
    <HeaderBlock>
      <Header1>        
          <HeaderTitleNew>
            <BiBookOpen />
            <Text>Library Management Sysytem</Text>
          </HeaderTitleNew>        
        <RightIcons>
          <UserDesignation>
            <UserDetails>
              <UserNameInnova>{user_details.username}</UserNameInnova>
              <UserDesignationInnova>{user_details.role}</UserDesignationInnova>
            </UserDetails>
            <Dropdown>
              <DropdownToggleBasic>
                <UserImageInnova src={user.image}  alt="profilepic" /></DropdownToggleBasic>
              <Dropdown.Menu>
                <DropdownItemLogout onClick={openInNewTab} >Log Out</DropdownItemLogout></Dropdown.Menu>
            </Dropdown>
          </UserDesignation>
        </RightIcons>
      </Header1>
    </HeaderBlock>
  );
}
export default Header;