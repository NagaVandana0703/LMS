import { AgGridReact } from "ag-grid-react";
import React, { useState } from "react";
// import 'ag-grid-enterprise';
// import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.css";
// import '/node_modules/bootstrap/dist/css/bootstrap.min.css';

import './Table.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";

const IssueReqHistory = () => {

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
    toast(
      <div className='divtoast'>
        You haven't issued any book
        &nbsp; &nbsp;
        <TaskAltIcon style={{ color: "#00FF29" }} />
      </div>,
      {
        className: "toasterstyle",
        autoClose: "1000",
        hideProgressBar: true,
      }
    );
  }
  return (
    <div className="Container">
      <h3>My Issue Requests</h3>
      <div className="ag-theme-alpine" id='Table'>
        <AgGridReact
          columnDefs={columnDefs}
          rowData={rowData}
          defaultColDef={{ flex: 1 }}
        ></AgGridReact>
        <ToastContainer
          toastStyle={{ backgroundColor: "#00397A", color: "white" }}
          className='toaststyles'
        />
      </div>
    </div>
  )
}

export default IssueReqHistory;