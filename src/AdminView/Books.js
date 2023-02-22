import React, { useEffect, useMemo, useState } from "react";
import { AgGridReact } from 'ag-grid-react';
// import 'ag-grid-enterprise';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
// import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';


import '../CustomerView/Table.css';
import '../CustomerView/toast.css';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { ALL_BOOKS_DETAILS } from "../reduxsaga/StringConstants";
import { connect, useDispatch, useSelector } from 'react-redux';
import { loadAllBooksRequest } from "../reduxsaga/actions";




const Books = () => {
   
    const Action = (e) => {

        const Delete= () => {
            // setShowPopup(true)
            console.log(e.data)
            // const newData=[];
            // for(let obj of Data){
            //     if(obj.authorName!==e.data.authorName)
            //         newData.push(obj)
            // }
            // setData(newData)
            // toast(
            //     <div className='divtoast'>
            //       Successfully Deleted
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
                <button onClick={Delete} className='ActionBtn'>Delete</button>
            </>
        )
    }
    const [columnDefs, setcolumnDefs] = useState([
        { field: 'bookId' ,headerName:'Serial No'},
        { field: 'bookName' ,headerName:'Book Name'},
        { field: 'authorName' ,headerName:'Author Name'},
        { field: 'quantity',headerName:'Quantity'},
        { field: 'quantity',headerName:'Category'},
        // { field: 'bookCategory.category',headerName:'Category'},
        { headerName: 'Actions', cellRenderer: Action}

    ])
    const [Data, setData] = useState([
        { bookId: '1', bookName: 'HarryPotter', authorName: 'Jyothi', quantity: 5 },
        { bookId: '2', bookName: 'HalfGF', authorName: 'Chetan', quantity: 3 },
        { bookId: '3', bookName: 'RichDad', authorName: 'Robert', quantity: 15 },
        { bookId: '4', bookName: 'Alchemist', authorName: 'Geetha', quantity: 7 },
        { bookId: '5', bookName: 'thinkMonk', authorName: 'Shetty', quantity: 8 },
        { bookId: '6', bookName: 'Mind', authorName: 'Vandana', quantity: 9 },
        { bookId: '7', bookName: 'BhagavatGeetha', authorName: 'Krishna', quantity: 10 },
        { bookId: '8', bookName: 'Doremon', authorName: 'MrCat', quantity: 25 },
        { bookId: '9', bookName: 'Sinchan', authorName: 'Joe', quantity: 5 },
        { bookId: '10', bookName: 'HarryPotter1', authorName: 'Jyothi1', quantity: 5 },
        { bookId: '11', bookName: 'Ramayanam', authorName: 'Valmiki', quantity:15 },
        { bookId: '12', bookName: 'HalfGF1', authorName: 'Chetan1', quantity: 3 },
        { bookId: '13', bookName: 'RichDad1', authorName: 'Robert1', quantity: 15 },
        { bookId: '14', bookName: 'Alchemist1', authorName: 'Geetha1', quantity: 7 },
        { bookId: '15', bookName: 'thinkMonk1', authorName: 'Shetty1', quantity: 8 },
        { bookId: '16', bookName: 'Mind1', authorName: 'Vandana1', quantity: 9 },
        { bookId: '17', bookName: 'BhagavatGeetha1', authorName: 'Krishna1', quantity: 10 },
        { bookId: '18', bookName: 'Doremon1', authorName: 'MrCat1', quantity: 25 },
        { bookId: '19', bookName: 'Sinchan1', authorName: 'Joe1', quantity: 5 },
    ])
    const token=localStorage.getItem('authtoken');
    console.log(token)
    const dispatch=useDispatch();
    
    
    useEffect(()=>{
        dispatch(loadAllBooksRequest());
    },[])
    const D=useSelector(state=>state.AdminView)
    const allbooksdata=D.allbooksdetailsdata
    console.log(allbooksdata)
    // const columnTypes = useMemo(() => {
    //     return {
    //         textCol: { width: '200px' }
    //     }
    // }, [])


    
    return (
        <div className="Container">
            <h3>ALL AVAILABLE BOOKS IN LIBRARY</h3>
          
            <div className="ag-theme-alpine" id='Table' >
                <AgGridReact
                    columnDefs={columnDefs}
                    rowData={allbooksdata}
                    defaultColDef={{ flex: 1  }}
                    // columnTypes={columnTypes}
                    pagination={true}
                    paginationPageSize='7'
                >
                </AgGridReact>
                <ToastContainer
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
                className='toaststyles'
                />


            </div>
            
        </div>
    )
}


export default Books;