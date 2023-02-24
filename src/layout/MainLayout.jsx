import SideNavBar from "./SideNavBar";
import Header from "./Header";
import React from "react";
import { ComponentContainer, ComponentFooter, MainBlockLayout, RightContainer } from "./LayoutStyles";
const MainLayout = (props) => {
  const { menuItems, Component } = props;

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
