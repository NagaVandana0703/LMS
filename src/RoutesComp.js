import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AddBooks from "./AdminView/AddBooks";
import AddCategory from "./AdminView/AddCategory";
import AVlayout from "./AdminView/AVlayout";
import Books from "./AdminView/Books";
import IssueRequests from "./AdminView/IssueRequests";
import ManageCustomers from "./AdminView/ManageCustomer";
import LoginPage from "./components/LoginPage";
import AllBooks from "./CustomerView/AllBooks";
import CVLayout from "./CustomerView/CVLayout"
import IssuedBooks from "./CustomerView/IssuedBooks";
import IssueReqHistory from "./CustomerView/IssueReqHistory";
import OverDue from "./CustomerView/OverDue";


const View = ({ Layout, path, Component }) => {
  return (
    <Routes>
      <Route exact path={path} element={<Layout Component={Component} />} />
    </Routes>
  )
}

function RoutesComp() {
  const location = useLocation();
  console.log("pathname", location.pathname);
  switch (window.location.pathname) {
    case "/":
      return (
        <>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
          </Routes>
        </>
      );

    case "/AllBooks":

      return (
        <>
          <View Layout={CVLayout} path={"/AllBooks"} Component={AllBooks} />
        </>

      );
    case "/IssueReqHistory":
      return (
        <View Layout={CVLayout} path={"/IssueReqHistory"} Component={IssueReqHistory} />

      );

    case "/IssuedBooks":
      return (
        <View Layout={CVLayout} path={"/IssuedBooks"} Component={IssuedBooks} />

      );
      case "/OverDue":
      return (
        <View Layout={CVLayout} path={"/OverDue"} Component={OverDue} />

      );


    //Admin View

    case "/Books":
      return (
        <View Layout={AVlayout} path={"/Books"} Component={Books} />
      );

    case "/ManageCustomers":
      return (
        <View Layout={AVlayout} path={"/ManageCustomers"} Component={ManageCustomers} />
      );
    case "/IssueRequests":
      return (
        <View Layout={AVlayout} path={"/IssueRequests"} Component={IssueRequests} />
      );
    case "/AddBooks":
      return (
        <View Layout={AVlayout} path={"/AddBooks"} Component={AddBooks} />

      );
    case "/AddCategory":
      return (
        <View Layout={AVlayout} path={"/AddCategory"} Component={AddCategory} />
      )

  }
}

export default RoutesComp;