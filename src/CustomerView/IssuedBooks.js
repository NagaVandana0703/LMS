import React, { lazy,useState,useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AButton, TableHeader } from "../AdminView/AVStyles";
import MainToast from "../Helpers/MainToast";
import { ToastContainerTag } from "../Helpers/ToastStyles";
import { loadgetApprovedBooksRequest, loadreturnBookRequest } from "../reduxsaga/actions";
const MainDataTable = lazy(() => import("../Helpers/MainDataTable"));

const IssuedBooks = () => {
    const [toastFlag,setToastFlag]=useState(false);
    const [text,settext]=useState("");
    const userdetails = JSON.parse(localStorage.getItem('user_details'))
    const dispatch = useDispatch();
    const storeData = useSelector(state => state.AdminView)
    const { getapprovedbooks } = storeData;
    const rowData=[]
    for (let obj of getapprovedbooks) {
        if (obj.user.userId === userdetails.userId && obj.returnedDate === null)
            rowData.push(obj)
    }

    useEffect(() => {
        dispatch(loadgetApprovedBooksRequest())
    }, [loadgetApprovedBooksRequest]);
    
    const Action = (e) => {
        const Return = () => { 
            settext("Successfully Returned!")
            setToastFlag(!toastFlag);           
            dispatch(loadreturnBookRequest(e.data.issueId))
        }
        return (
            <AButton onClick={Return}>Return</AButton>
        )
    }
    const columnDefs = useMemo(() => [
        { field: 'bookDetails.bookName', headerName: 'Book' },
        { field: 'bookDetails.authorName', headerName: 'Author' },
        { field: 'bookDetails.bookCategory.category', headerName: 'Category' },
        { field: 'issueDate' },
        { field: 'returnDate' },
        { headerName: 'Actions', cellRenderer: Action }
    ], [])

    return (
        <>
            <TableHeader>My Issued Books</TableHeader>
            <MainDataTable columnDefs={columnDefs} rowData={rowData} defaultColDef={{ flex: 1 }} />
            {toastFlag?<MainToast text={text} setToastFlag={setToastFlag}/>:""}
            <ToastContainerTag
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
               /> 
        </>
    )
}

export default IssuedBooks;