import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AButton, TableHeader } from "../AdminView/AVStyles";
import MainDataTable from "../Helpers/MainDataTable";
import { loadgetApprovedBooksRequest, loadreturnBookRequest } from "../reduxsaga/actions";


const IssuedBooks = () => {
    const userdetails = JSON.parse(localStorage.getItem('user_details'))
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadgetApprovedBooksRequest())
    }, []);
    const storeData = useSelector(state => state.AdminView)
    const { getapprovedbooks } = storeData;
    const rowData = [];
    for (let obj of getapprovedbooks) {
        if (obj.user.userId === userdetails.userId && obj.returnedDate === null)
            rowData.push(obj)
    }
    const Action = (e) => {
        const Return = () => {
            dispatch(loadreturnBookRequest(e.data.issueId))
            dispatch(loadgetApprovedBooksRequest())
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
        </>
    )
}

export default IssuedBooks;