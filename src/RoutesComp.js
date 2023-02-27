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


const View = ({ Layout, path, element }) => {
  return (
    <Routes>
      <Route exact path={path} element={<Layout element={element} />} />
    </Routes>
  )
}

function RoutesComp() {
 
      return (
        <>
          <Routes>
            <Route exact path="/" element={<LoginPage />} />
            <Route path='/AllBooks' element={<CVLayout element={AllBooks} />} />
            <Route path='/IssueReqHistory' element={<CVLayout element={IssueReqHistory}/>} />
            <Route path='/IssuedBooks' element={<CVLayout element={IssuedBooks}/>} />
            <Route path='/OverDue' element={<CVLayout element={OverDue}/>} />
            <Route exact path='/Books' element={<AVlayout element={Books} />}/>
            <Route path='/ManageCustomers' element={<AVlayout element={ManageCustomers}/>} />
            <Route path='/IssueRequests' element={<AVlayout element={IssueRequests}/>} />
            <Route path='/AddBooks' element={<AVlayout element={AddBooks} />} />
            <Route path='/AddCategory' element={<AVlayout element={AddCategory}/>} />
          </Routes>
        </>
      );

   
   

    
   

   

  }


export default React.memo(RoutesComp);