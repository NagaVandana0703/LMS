import React from "react";
import { BiHome } from "react-icons/bi";
import { AiOutlineSchedule } from "react-icons/ai";
import { TbBoxMultiple } from "react-icons/tb";
import { VscFeedback } from "react-icons/vsc";

const CVMenuItems = [
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

  const AVMenuItems = [
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

  export   {CVMenuItems,AVMenuItems};