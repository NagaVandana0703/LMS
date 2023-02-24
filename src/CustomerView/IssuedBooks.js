import React, { useState } from "react";
import { AButton, TableHeader } from "../AdminView/AVStyles";
import MainDataTable from "../Helpers/MainDataTable";


const IssuedBooks = () => {
    const ReturnAction = () => {
        return (
            <>
                <AButton>Return</AButton>
            </>
        )
    }

    const [rowData, setrowData] = useState([
        { title: 'HarryPotter', author: 'Jyothi', },
        { title: 'HalfGF', author: 'Chetan' },
        { title: 'RichDad', author: 'Robert' },

    ])
    const columnDefs = [
        { field: 'title' },
        { field: 'author' },
        // {field:'request date'},
        // {field:'approved/rejected date'},
        // {field:'return date'},
        { headerName: 'Actions', cellRenderer: ReturnAction }
    ]

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