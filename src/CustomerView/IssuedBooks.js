import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AButton, TableHeader } from "../AdminView/AVStyles";
import MainDataTable from "../Helpers/MainDataTable";
import { loadgetApprovedBooksRequest, loadreturnBookRequest } from "../reduxsaga/actions";


const IssuedBooks = () => {
    const userdetails=JSON.parse(localStorage.getItem('user_details'))
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadgetApprovedBooksRequest())
    },[]);
    const D=useSelector(state=>state.AdminView)
    const Data=D.getapprovedbooks;
    let [rowData,setrowData]=useState([])
    const arr=[]
    for(let obj of Data){
        if(obj.user.userId===userdetails.userId && obj.returnedDate===null)
          arr.push(obj)
      }
      rowData=arr;
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

    
    const columnDefs = useMemo(()=>[
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
                <TableHeader>My Issued Books</TableHeader>
                <MainDataTable  columnDefs={columnDefs} rowData={rowData} defaultColDef={{ flex: 1 }} />
            </>
        </>
    )
}

export default IssuedBooks;