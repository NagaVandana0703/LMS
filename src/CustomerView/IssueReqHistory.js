import React, { useEffect, useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { TableHeader } from "../AdminView/AVStyles";
import { ToastContainerTag, ToastDiv } from "../Helpers/ToastStyles";
import MainDataTable from "../Helpers/MainDataTable";
import MainToast from "../Helpers/MainToast";
import { useDispatch, useSelector } from "react-redux";
import { loadgetAllBookIssuesRequest } from "../reduxsaga/actions";

const IssueReqHistory = () => {
  const [toastFlag, setToastFlag] = useState(false);
    const [text, settext] = useState("");

    const userdetails=JSON.parse(localStorage.getItem('user_details'));
  const dispatch=useDispatch();
  useEffect(()=>{
    dispatch(loadgetAllBookIssuesRequest())
  },[]);
   const D=useSelector(state=>state.AdminView)
    const Data=D.getallbookissues;
    const rowData=[]
    for(let obj of Data){
      if(obj.user.userId===userdetails.userId)
        rowData.push(obj)
    }


  const columnDefs = [
    { field: 'bookDetails.bookName' ,headerName:'Book'},
    { field: 'bookDetails.authorName',headerName:'Author' },
    { field: 'bookDetails.bookCategory.category' ,headerName:'Category'},
    
  ]
  // console.log(rowData)
  if (!rowData) {
    settext("You haven't issued any book")
            setToastFlag(!toastFlag);
  }
  return (
    <>
      <TableHeader>My Issue Requests</TableHeader>
      <MainDataTable columnDefs={columnDefs} rowData={rowData} defaultColDef={{ flex: 1 }} />
      <ToastContainerTag toastStyle={{ backgroundColor: "#00397A", color: "white" }}/>
      {toastFlag?<MainToast text={text} setToastFlag={setToastFlag}/>:""}

    </>
  )
}

export default IssueReqHistory;