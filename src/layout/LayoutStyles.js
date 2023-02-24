import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const MainBlockLayout=styled.div`
position: fixed;
    display: flex;
    height: 100%;
`
export const RightContainer=styled.div`
display: flex;
flex-direction: column;
z-index: -1 !important;
`
export const ComponentContainer=styled.div`
margin-top: 5rem;
`
export const ComponentFooter=styled.div`
position: fixed;
    bottom:0%;
    right:0%;
    font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 16px;
  
  color: #515D6B;
`

// SideNavBar styling

export const SideNavContainer=styled.div`
background-color: #134ee3;
width: 12.5rem !important;
color: white;
transition: 0.5s;
box-shadow: 0px 0px 3px 0.5px rgba(0, 0, 0, 0.15);
z-index: 1;
flex-shrink: 0;
font-family: 'sans-serif';
height: 100vh;
`
export const NavUpper=styled.div`
display: grid;
`
export const NavMenu=styled.div`
grid-template-rows: repeat(4, 1fr);
    margin-top: 2.875rem;
    display: grid;
`
export const MenuItem=styled(NavLink)`

height: 3rem;
display: flex;
color: white;
text-decoration: none;
vertical-align: middle;
margin: auto 0.5rem;
padding-top: 0.125rem;
align-items: center;

&:hover{
    width: 12rem;
    height: 2.188rem;
    padding-left: 0.125rem;
    margin-left: 0.125rem;
    background: rgba(0, 43, 140, 0.43);
    border-radius: 1.25rem;
    color: white;   
}

`
export const Txt=styled.p`
padding-top: 0.875rem;
    margin-left: 0.625rem;
`

//Header Styling

export const HeaderBlock=styled.div`
position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: #ffffff;
  border-width: 0.5px 0px;
  border-style: solid;
  border-color: hsl(0, 0%, 82%);
  height: 75px;
  padding: 1px;

  font-family: "sans-serif";
`
export const Header1=styled.div`
width: 100%;
display: flex;
justify-content: space-between;
padding: 8px 10px;
align-items: center;
`
export const HeaderTitleNew=styled.a`
display: flex;
  align-items: center;
  flex-direction: row;
  padding-left: 200px;
  gap: 10px;
  text-decoration: none;
`
export const Text=styled.div`
font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 22px;
  color: #393A3A;
`
export const RightIcons=styled.div`
display: flex;
  align-items: center;
  flex-direction: row;
  gap: 30px;
  margin-top: -8px;
`
export const UserDesignation=styled.div`
border-radius: 6px;
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  /* width: 185px; */
  justify-content: space-around;
`
export const UserDetails=styled.div`
display: flex;
  flex-direction: column;
`
export const UserNameInnova=styled.div`
font-family: 'Inter';
  font-style: normal;
  width: 90px;

  font-weight: 600;
  font-size: 16px;
  line-height: 113%;
  text-align: center;

  /* body text color */

  color: #393A3A;
`
export const UserDesignationInnova=styled.div`
width: 101px;
height: 12px;
left: 1202px;
top: 32px;

font-family: 'Inter';
font-style: normal;
font-weight: 400;
font-size: 13px;
line-height: 113%;
/* or 12px */

text-align: center;

/* light text */

color: #A0A0A0;
`
export const DropdownToggleBasic=styled(Dropdown.Toggle)`
background-color: #F7F7F7 !important;
border: none !important;
`
export const UserImageInnova=styled.img`
border: 1px solid #00397A;
  filter: drop-shadow(0px 4px 4px rgba(255, 255, 255, 0.15));
  border-radius: 50%;
  width: 40px;
  height: 40px;
`
export const DropdownItemLogout = styled(Dropdown.Item)`
  &:hover {
    background-color: #F7F7F7 !important;
    width: 70%;
  }
`;