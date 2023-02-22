import React, { useState } from "react";

import { BiHome } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbBoxMultiple } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";
import Header from "../layout/Header";
import MainLayout from "../layout/MainLayout";
function AVlayout({ Component }) {
  console.log('AVlayout')
  const [isExpanded, setExpendState] = useState(false);
  const menuItems = [
    {
      text: "Books",
      icon: (
        <BiHome
          size="1.6em"
         
        />
      ),
      link: "/Books",
      index: "1",
    },
    {
      text: "ManageCustomers",
      icon: (
        <AiOutlineSchedule
          size="1.6em"
         
        />
      ),
      link: "/ManageCustomers",
      index: "2",
    },
    {
      text: "IssueRequests",
      icon: (
        <TbBoxMultiple
          size="1.6em"
         
        />
      ),
      link: "/IssueRequests",
      index: "3",
    },
    {
      text: "AddBooks",
      icon: (
        <VscFeedback
          size="1.6em"
         
        />
      ),
      link: "/AddBooks",
      index: "4",
    },
    {
      text: "AddCategory",
      icon: (
        <VscFeedback
          size="1.6em"
         
        />
      ),
      link: "/AddCategory",
      index: "5",
    }
  ];


  return (
    <div>
      <Header menuItems={menuItems} />
      
      <MainLayout Component={Component} menuItems={menuItems} />
    </div>
  );
}
export default AVlayout;
