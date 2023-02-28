import SideNavBar from "./SideNavBar";
import Header from "./Header";
import React, { useEffect } from "react";
import { ComponentContainer, ComponentFooter, MainBlockLayout, RightContainer } from "./LayoutStyles";
import { useDispatch } from "react-redux";
import { loadUserByNameRequest } from "../reduxsaga/actions";
const MainLayout = (props) => {
  
 
  const {Component, menuItems  } = props;

  return (
    <MainBlockLayout>
      <SideNavBar menuItems={menuItems} />
      <RightContainer>
        <Header />
        <ComponentContainer><Component /></ComponentContainer>
        <ComponentFooter>Innova,Copyright &copy; 2022 All rights reserved</ComponentFooter>
      </RightContainer>
    </MainBlockLayout>
  );
};

export default MainLayout;
