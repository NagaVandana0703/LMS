import React, { useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableHeader } from "../AdminView/AVStyles";
import MainDataTable from "../Helpers/MainDataTable";
import { loadgetOverDueRequest } from "../reduxsaga/actions";

const OverDues = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadgetOverDueRequest())
    }, []);
    const storeData = useSelector(state => state.AdminView)
    const rowData = storeData.getoverduebooks;
    const columnDefs = useMemo(() => [
        { field: 'bookDetails.bookName', headerName: 'Book' },
        { field: 'bookDetails.authorName', headerName: 'Author' },
        { field: 'bookDetails.bookCategory.category', headerName: 'Category' },
        {field:'user.username',headerName:'User'},
        { field: 'issueDate' },
        { field: 'returnDate' }
    ], [])
    return (
        <>
            <TableHeader>OverDue</TableHeader>
            <MainDataTable columnDefs={columnDefs} rowData={rowData} defaultColDef={{ flex: 1 }} />
        </>
    )
}

export default OverDues;