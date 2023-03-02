import React, { lazy, useCallback, useEffect, useMemo, useState } from "react";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import { AButton, TableHeader } from "../AdminView/AVStyles";
import { useDispatch, useSelector } from "react-redux";
import { loadAllBooksRequest, loadissueBookRequest } from "../reduxsaga/actions";
import { ToastContainerTag } from "../Helpers/ToastStyles";
import MainDataTable from "../Helpers/MainDataTable";
import MainToast from "../Helpers/MainToast";
import FilterForm from "../AdminView/FilterForm";


const AllBooks = () => {
    const [toastFlag, setToastFlag] = useState(false);
    const [text, settext] = useState("");
    const storeData = useSelector(state => state.AdminView)
    const { allbooksdetailsdata } = storeData;
    const userdetails = JSON.parse(localStorage.getItem('user_details'))
    const dispatch = useDispatch();

    const loadAllBooksDetails = useCallback(() => {
        dispatch(loadAllBooksRequest());
    }, [])
    useEffect(() => {
        loadAllBooksDetails()
    }, [])
    const IssueBodyAction = (e) => {
        const Issue = () => {
            dispatch(loadissueBookRequest(e.data.bookId, userdetails.userId))
            settext("Issued the book successfully");
            setToastFlag(!toastFlag)
        }
        return (
            <AButton onClick={Issue}>Issue</AButton>
        )
    }
    const columnDefs = useMemo(() => [
        { field: 'bookName' },
        { field: 'authorName' },
        { field: 'bookCategory.category' },
        { field: 'quantity' },
        { headerName: 'Actions', cellRenderer: IssueBodyAction }
    ], [])

    return (
        <>
            <TableHeader>ALL AVAILABLE BOOKS IN LIBRARY</TableHeader>
            <FilterForm initialValues={{ category: '', age: '' }} role='allbooks' FieldsArr={useMemo(() => [{ type: 'text', name: 'category', placeholder: 'Enter Category' }, { type: 'number', name: 'age', placeholder: 'Enter Age' }])} />
            <MainDataTable columnDefs={columnDefs} rowData={allbooksdetailsdata} defaultColDef={{ flex: 1 }} />
            {toastFlag ? <MainToast text={text} setToastFlag={setToastFlag} /> : ""}
            <ToastContainerTag
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
            />
        </>
    )
}

export default AllBooks;