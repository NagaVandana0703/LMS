import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableHeader ,  AButton } from "../AdminView/AVStyles";
import MainDataTable from "../Helpers/MainDataTable";
import { loadgetOverDueRequest, loadreturnBookRequest } from "../reduxsaga/actions";

const OverDue = () => {
    const userdetails=JSON.parse(localStorage.getItem('user_details'))
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadgetOverDueRequest())
    },[]);
    const storeData=useSelector(state=>state.AdminView)
    const {getoverduebooks}=storeData;
    const rowData=[]
    for(let obj of getoverduebooks){
        if(obj.user.userId===userdetails.userId)
            rowData.push(obj)
    }
    const Action = (e) => {
        const Return=()=>{
            dispatch(loadreturnBookRequest(e.data.issueId));
            dispatch(loadgetOverDueRequest())
        }
        return (
                <AButton onClick={Return}>Return</AButton>
        )
    }
    
    const columnDefs =useMemo(()=>[
        { field: 'bookDetails.bookName',headerName:'Book' },
        { field: 'bookDetails.authorName',headerName:'Author' },
        {field:'bookDetails.bookCategory.category',headerName:'Category'},
        {field:'issueDate'},
        {field:'returnDate'},
        { headerName: 'Actions', cellRenderer: Action }
    ],[])
    return (
        <>
                <TableHeader>OverDue</TableHeader>
                <MainDataTable columnDefs={columnDefs} rowData={rowData} defaultColDef={{ flex: 1 }}/>
        </>
    )
}

export default OverDue;