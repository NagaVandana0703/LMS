import React from "react";
import { MenuItem, NavMenu, NavUpper, SideNavContainer, Txt } from "./LayoutStyles";

function SideNavBar(props) {
  const { menuItems } = props;
  return (
    <SideNavContainer>
      <NavUpper>
        <NavMenu>
          {menuItems.map(({ text, icon, link }) => (
            <MenuItem to={link} activeclassname="active">
              {icon}
              {<Txt>{text}</Txt>}
            </MenuItem>
          ))}
        </NavMenu>
      </NavUpper>
    </SideNavContainer>
  );
}

export default SideNavBar;
