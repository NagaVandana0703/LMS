import React, { useState } from "react";
import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/styles/ag-theme-alpine.css';


// import './Table.css';
const IssuedBooks = () => {
    const ReturnAction = () => {
        return (
            <>
                <button className='ActionBtn'>Return</button>
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
            <div className="Container">
                <h3>My Issued Books</h3>
                <div className="ag-theme-alpine" id='Table'>
                    <AgGridReact
                        columnDefs={columnDefs}
                        rowData={rowData}
                        defaultColDef={{ flex: 1 }}
                    ></AgGridReact>
                </div>
            </div>
        </>
    )
}

export default IssuedBooks;