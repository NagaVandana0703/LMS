import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableHeader ,  AButton } from "../AdminView/AVStyles";
import MainDataTable from "../Helpers/MainDataTable";
import { loadgetOverDueRequest, loadreturnBookRequest } from "../reduxsaga/actions";


// import './Table.css';
const OverDues = () => {

    const userdetails=JSON.parse(localStorage.getItem('user_details'))
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadgetOverDueRequest())
    },[]);
    const D=useSelector(state=>state.AdminView)
    const Data=D.getoverduebooks;
    let [rowData,setrowData]=useState(Data)
    const ReturnAction = (e) => {
        const Return=()=>{
            // console.log(e.data.issueId)
            const id=e.data.issueId;
            dispatch(loadreturnBookRequest(id))
        }
        return (
            <>
                <AButton onClick={Return}>Return</AButton>
            </>
        )
    }
    
    const columnDefs =useMemo(()=>[
        { field: 'bookDetails.bookName',headerName:'Book' },
        { field: 'bookDetails.authorName',headerName:'Author' },
        {field:'bookDetails.bookCategory.category',headerName:'Category'},
        {field:'issueDate'},
        {field:'returnDate'},
        { headerName: 'Actions', cellRenderer: ReturnAction }
    ],[])

    return (
        <>
            <>
                <TableHeader>OverDue</TableHeader>
                <MainDataTable columnDefs={columnDefs} rowData={rowData.length?rowData:Data} defaultColDef={{ flex: 1 }}/>
            </>
        </>
    )
}

export default OverDues;