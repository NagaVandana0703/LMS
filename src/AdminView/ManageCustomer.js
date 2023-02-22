import React, { useEffect, useMemo, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import 'ag-grid-community/styles/ag-grid.css';
import '../CustomerView/Table.css';
import { useDispatch, useSelector } from "react-redux";
import { loadAllUsersDetailsRequest } from "../reduxsaga/actions";

const ManageCustomers=()=>{

    const [clas,setclas]=useState(false)
    const ApproveAction=()=>{
        const Aprove=()=>{
            setclas(true)
        }
        return(
            <>
                <button className={clas?"DisableActionBtn":"ActionBtn"} onClick={Aprove}> 
                        Approve
                </button>
                <button className="RegectBtn">
                        Reject
                </button>
            </>
        )
    }
  
    const columnDefs=[
        {field:'username',headerName:'Name'},
        {field:'phoneNumber',headerName:'Phone Number'},
        {field:'emailId',headerName:'Email Id'},
        {field:'sex',headerName:'Gender'},
        {field:'hometown',headerName:'Location'},
        {field:'dob',headerName:'DOB'},
        {headerName:'Actions',cellRenderer:ApproveAction}
    ]
    const [rowData,setrowData]=useState([
        {username:'Priya',phoneNumber:'6303640577',emailId:'priya@gmail.com',sex:'female',hometown:'Tirupati',dob:'06-08-2000'},
        {username:'Zaheer',phoneNumber:'6303640599',emailId:'zaheer@gmail.com',sex:'male',hometown:'Kadapa',dob:'01-09-2000'},
        {username:'Vinla',phoneNumber:'6403648579',emailId:'vinla@gmail.com',sex:'female',hometown:'Proddatur',dob:'07-12-2000'},
        {username:'Ramya',phoneNumber:'6303640467',emailId:'ramya@gmail.com',sex:'female',hometown:'Nellore',dob:'05-07-2000'},
        {username:'Sudha',phoneNumber:'8639590588',emailId:'sudha@gmail.com',sex:'male',hometown:'Duvvur',dob:'23-05-2000'},
        {username:'Harsha',phoneNumber:'6303640577',emailId:'harsha@gmail.com',sex:'male',hometown:'Bglr',dob:'26-08-2000'},
    ])
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadAllUsersDetailsRequest());
    },[])
    const D=useSelector(state=>state.AdminView)
    const allusersdata=D.allusersdata
    console.log(allusersdata)
    const defaultColDef=useMemo(()=>(
        { flex: 1,filter:'agTextColumnFilter' }
    ))

    return(
        <div className="Container">
            <h3>Manage Customers</h3>
            
            <div className="ag-theme-alpine" id='Table' >
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={allusersdata}
                    defaultColDef={defaultColDef}
                    // columnTypes={columnTypes}
                    pagination={true}
                    paginationPageSize='7'
                    // onPaginationChanged={onPaginationChanged}
                >
                </AgGridReact>
                


            </div>
            
        </div>
    )
}

export default ManageCustomers;