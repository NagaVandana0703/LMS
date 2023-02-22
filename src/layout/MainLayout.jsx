import SideNavBar from "./SideNavBar";
import "./MainLayout.css";
import Header from "./Header";
import React from "react";
const MainLayout = (props) => {
  const { menuItems, Component } = props;
 
  return (
    <div id="main-layout-block">
      <SideNavBar menuItems={menuItems} />
<div className="right-container">
<Header  />
<div className="component-container"><Component /></div>
<div className="component-footer">Innova,Copyright &copy; 2022 All rights reserved</div>
</div>
    
    </div>
  );
};

export default MainLayout;
