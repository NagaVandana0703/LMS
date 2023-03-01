import React from "react";
import { AgGridReact } from 'ag-grid-react';
import { DataTableDiv } from "../AdminView/AVStyles";

const MainDataTable = ({ columnDefs, rowData, defaultColDef, columnTypes }) => {

    return (
        <DataTableDiv className="ag-theme-alpine">
            <AgGridReact
                columnDefs={columnDefs}
                rowData={rowData}
                defaultColDef={defaultColDef}
                columnTypes={columnTypes}
                pagination={true}
                paginationPageSize='7'
            >
            </AgGridReact>

        </DataTableDiv>
    )

}
export default MainDataTable;