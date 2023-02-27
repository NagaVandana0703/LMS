
import { BiHome } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbBoxMultiple } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import React,{useEffect,useState} from 'react';
import {Navigate} from 'react-router-dom';
import MainLayout from "../layout/MainLayout";
function CVLayout({ element }) {
 

  const menuItems = [
    {
      text: "AllBooks",
      icon: (
        <BiHome
          size="1.6em"
        />
      ),
      link: "/AllBooks",
      index: "1",
    },
    {
      text: "IssueReqHistory",
      icon: (
        <AiOutlineSchedule
          size="1.6em"
        />
      ),
      link: "/IssueReqHistory",
      index: "2",
    },
    {
      text: "IssuedBooks",
      icon: (
        <TbBoxMultiple
          size="1.6em"
        />
      ),
      link: "/IssuedBooks",
      index: "3",
    },
    {
      text: "OverDue",
      icon: (
        <TbBoxMultiple
          size="1.6em"
         
        />
      ),
      link: "/OverDue",
      index: "4",
    }
  ];

  return (
    <div>
      
      <MainLayout Component={element} menuItems={menuItems} />
    </div>
  );
}
export default CVLayout;
