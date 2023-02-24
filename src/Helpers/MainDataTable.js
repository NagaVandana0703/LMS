import React, { useEffect, useMemo, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import { DataTable } from "../AdminView/AVStyles";

const MainDataTable = ({columnDefs,rowData,defaultColDef,columnTypes}) => {

    return (
        <>
            <DataTable className="ag-theme-alpine">
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={rowData}
                    defaultColDef={defaultColDef}
                    columnTypes={columnTypes}
                    pagination={true}
                    paginationPageSize='7'
                >
                </AgGridReact>

            </DataTable>
        </>
    )

}
export default MainDataTable;