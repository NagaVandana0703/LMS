import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Link,
    Routes,
    Switch,
    useLocation,
  } from "react-router-dom";
import AddBooks from "./AdminView/AddBooks";
import AddCategory from "./AdminView/AddCategory";
import AVlayout from "./AdminView/AVlayout";
import Books from "./AdminView/Books";
import IssueRequests from "./AdminView/IssueRequests";
import ManageCustomers from "./AdminView/ManageCustomer";
import LoginPage from "./components/LoginPage";
import MainPageForm from "./components/MainPage";
import AllBooks from "./CustomerView/AllBooks";
import CVLayout from "./CustomerView/CVLayout"
import IssuedBooks from "./CustomerView/IssuedBooks";
import IssueReqHistory from "./CustomerView/IssueReqHistory";


  // const Common = ({ Layout, Component, route }) => {
  //   // debugger
  //       <Routes>
  //         <Route exact path={route} element={<Layout Component={Component} />} />
  //       </Routes>
  // };
  
  const UCommon = ({ Layout, Component, route }) => {
    return(
      <Routes>
          <Route exact path={route} element={<Layout Component={Component} />} />
        </Routes>
    ) 

  };
  function RoutesComp() {
    const location = useLocation();
    console.log(window.location.pathname);
    console.log("pathname", location.pathname);
    switch (window.location.pathname) {
      // case "/":
        // return (
        //   <>
        //     <Routes>
        //       <Route exact path="/" element={<MainPageForm/> } />
        //     </Routes>
        //   </>
        // );
        case "/":
        return (
          <>
            <Routes>
              <Route exact path="/" element={<LoginPage/> } />
            </Routes>
          </>
        );
  
      case "/AllBooks":
        
        return (
          <>
          <Routes>
            <Route exact path="/AllBooks" element={<CVLayout Component={AllBooks} /> } />
          </Routes>
        </>
          
        );
      case "/IssueReqHistory":
        return (
          <Routes>
          <Route exact path="/IssueReqHistory" element={<CVLayout Component={IssueReqHistory} /> } />
        </Routes>
        );
  
      case "/IssuedBooks":
        return (
          <Routes>
          <Route exact path="/IssuedBooks" element={<CVLayout Component={IssuedBooks} /> } />
        </Routes>
        );
      

       
  
      case "/Books":
        return (
          <UCommon
            route={"/Books"}
            Layout={AVlayout}
            Component={Books}
          />
        );
  
      case "/ManageCustomers":
        return (
          <UCommon
            route={"/ManageCustomers"}
            Layout={AVlayout}
            Component={ManageCustomers}
          />
        );
      case "/IssueRequests":
        return (
          <UCommon
            route={"/IssueRequests"}
            Layout={AVlayout}
            Component={IssueRequests}
          ></UCommon>
        );
      case "/AddBooks":
        return (
          <UCommon
            route={"/AddBooks"}
            Layout={AVlayout}
            Component={AddBooks}
          />
        );
        case "/AddCategory":
        return (
          <UCommon
            route={"/AddCategory"}
            Layout={AVlayout}
            Component={AddCategory}
          />
        )
      
    }
  }

  export default RoutesComp;