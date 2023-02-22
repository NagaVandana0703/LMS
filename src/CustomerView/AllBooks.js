import React, { useMemo, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "primeicons/primeicons.css";
// import "primereact/resources/primereact.css";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
 import 'ag-grid-enterprise';

import { Dropdown } from 'primereact/dropdown';
import './Table.css';
import './toast.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import Modal from "react-bootstrap/Modal";
import PopupForm from "./PopupForm";



const AllBooks = () => {
    const [showPopup, setShowPopup] = useState(false);
    const handleClose = () => setShowPopup(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const setModal = () => {
        setModalIsOpen(true);
    };
    const [gridApi, setGridApi] = useState(null);
    const [gridColumnApi, setGridColumnApi] = useState(null);
    const IssueBodyAction = (e) => {

        const Issue = () => {
            setShowPopup(true)
            console.log(e.data)
            // toast(
            //     <div className='divtoast'>
            //       You haven't issued any book
            //       &nbsp; &nbsp;
            //       <TaskAltIcon style={{ color: "#00FF29" }} />
            //     </div>,
            //     {
            //       className: "toasterstyle",
            //       autoClose: "1000",
            //       hideProgressBar: true,
            //     }
            //   );
        }
        return (
            <>
                <button onClick={Issue} className='ActionBtn'>Issue</button>
            </>
        )
    }
    const [columnDefs, setcolumnDefs] = useState([
        { field: 'serialno', type: 'numCol' },
        { field: 'title', type: 'textCol' },
        { field: 'author', type: 'textCol' },
        { field: 'quantity', type: 'numCol' },
        { headerName: 'Actions', cellRenderer: IssueBodyAction, type: 'btnCol' }

    ])
    const [Data, setData] = useState([
        { serialno: '1', title: 'HarryPotter', author: 'Jyothi', quantity: 5 },
        { serialno: '2', title: 'HalfGF', author: 'Chetan', quantity: 3 },
        { serialno: '3', title: 'RichDad', author: 'Robert', quantity: 15 },
        { serialno: '4', title: 'Alchemist', author: 'Geetha', quantity: 7 },
        { serialno: '5', title: 'thinkMonk', author: 'Shetty', quantity: 8 },
        { serialno: '6', title: 'Mind', author: 'Vandana', quantity: 9 },
        { serialno: '7', title: 'BhagavatGeetha', author: 'Krishna', quantity: 10 },
        { serialno: '8', title: 'Doremon', author: 'MrCat', quantity: 25 },
        { serialno: '9', title: 'Sinchan', author: 'Joe', quantity: 5 },
    ])
    const arr=[
        { serialno: '4', title: 'Alchemist', author: 'Geetha', quantity: 7 },
        { serialno: '5', title: 'thinkMonk', author: 'Shetty', quantity: 8 },
        { serialno: '6', title: 'Mind', author: 'Vandana', quantity: 9 },
        { serialno: '7', title: 'BhagavatGeetha', author: 'Krishna', quantity: 10 },
    ]

    // const columnTypes = useMemo(() => {
    //     return {
    //         textCol: { width: '200px' }
    //     }
    // }, [])

    const items = [
        { label: 'education' },
        { label: 'Board Books' },
        { label: 'Young adult' },
        { label: 'New adult' },
    ];
    const [item, setItem] = useState();
    const changethedata = (event) => {
        setItem(event.value);
        let obj = event.value.label;
        if (obj === '19-40') {
            console.log(obj)
            setData(arr)
        }
        else if (obj === '41-above') {
            console.log(obj)
            setData(Data)
        }
    }

    function onGridReady(params) {
        setGridApi(params.api);
        setGridColumnApi(params.columnApi);
    }
    const onFilterTextChange = (e) => {
        gridApi.setQuickFilter(e.target.value)
    }
    return (
        <div className="Container">
            <h3>ALL AVAILABLE BOOKS IN LIBRARY</h3>
            <div className="dd-search">
                <div className="AgeCategoryDropdown">
                    <Dropdown
                        placeholder={items[0].label}
                        value={item}
                        options={items}
                        onChange={changethedata}
                    />
                </div>
                <div className="searchDivStyle">
                    <input type="search" className="searchStyle" onChange={onFilterTextChange} placeholder="Search..." />
                </div>
            </div>
            <div className="ag-theme-alpine" id='Table' >
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={Data}
                    onGridReady={onGridReady}
                    defaultColDef={{ flex: 1 }}
                    // columnTypes={columnTypes}
                >
                </AgGridReact>
                {/* <ToastContainer
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
                className='toaststyles'
                /> */}


            </div>
            <>
                <Modal
                    dialogClassName="modalpopup"
                    show={showPopup}
                    modal
                    onHide={handleClose}
                    onClick={setModal}
                >
                    <Modal.Header className="modalheader" closeButton></Modal.Header>
                    <PopupForm setShowPopup={setShowPopup} handleClose={handleClose} />
                </Modal>
            </>
        </div>
    )
}

export default AllBooks;