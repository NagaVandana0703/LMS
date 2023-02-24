import React, { useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { TableHeader } from "../AdminView/AVStyles";
import { ToastContainerTag, ToastDiv } from "../Helpers/ToastStyles";
import MainDataTable from "../Helpers/MainDataTable";
import MainToast from "../Helpers/MainToast";

const IssueReqHistory = () => {
  const [toastFlag,setToastFlag]=useState(false);
    const [text,settext]=useState("");
  const [rowData, setrowData] = useState([
    { title: 'HarryPotter', requestdate: '23-02-2023', approvedate: '24-02-2023', returndate: '03-03-2023' },
    { title: 'HalfGF', requestdate: '24-02-2023', approvedate: '25-02-2023', returndate: '04-03-2023' },
    { title: 'RichDad', requestdate: '25-02-2023', approvedate: '26-02-2023', returndate: '05-03-2023' },
    { title: 'Alchemist', requestdate: '26-02-2023', approvedate: '27-02-2023', returndate: '06-03-2023' },
    { title: 'thinkMonk', requestdate: '27-02-2023', approvedate: '28-02-2023', returndate: '07-03-2023' },
    { title: 'Mind', requestdate: '28-02-2023', approvedate: '29-02-2023', returndate: '08-03-2023' },
  ])
  const columnDefs = [
    { field: 'title' },
    { field: 'requestdate' },
    { field: 'approvedate' },
    { field: 'returndate' },
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