import React, { useMemo, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';


import '../CustomerView/Table.css';
import '../CustomerView/toast.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";




const IssueRequests = () => {
   
    const Action = (e) => {

        const Delete= () => {
            // setShowPopup(true)
            console.log(e.data)
            toast(
                <div className='divtoast'>
                  Successfully Deleted
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
            <>
                <button onClick={Delete} className='ActionBtn'>Approved</button>
                <button onClick={Delete} className='RejectBtn'>Rejected</button>
            </>
        )
    }
    const [columnDefs, setcolumnDefs] = useState([
        { field: 'title', headerName:'Book Name',type: 'textCol' },
        { field: 'author',headerName:'Author', type: 'textCol' },
        { field: 'customername', headerName:'Customer Name', type: 'numCol' },
        { headerName: 'Actions', cellRenderer: Action, type: 'btnCol' }

    ])
    const [rowData, setrowData] = useState([
        { title: 'HarryPotter', author: 'Jyothi', customername:'Sanjay' },
        { title: 'HalfGF', author: 'Chetan', customername:'Hari' },
       
    ])
    // const columnTypes = useMemo(() => {
    //     return {
    //         textCol: { width: '200px' }
    //     }
    // }, [])


    
    return (
        <div className="Container">
            <h3>Customer Requested to Admin to issue these Books</h3>
            
            <div className="ag-theme-alpine" id='Table' >
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    defaultColDef={{ flex: 1 }}
                    // columnTypes={columnTypes}
                >
                </AgGridReact>
                <ToastContainer
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
                className='toaststyles'
                />


            </div>
            
        </div>
    )
}

export default IssueRequests;