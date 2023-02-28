import React, { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loadAllBooksRequest } from "../reduxsaga/actions";
import { AButton, TableHeader } from "./AVStyles";
import { ToastContainerTag, ToastDiv } from "../Helpers/ToastStyles";
import MainDataTable from "../Helpers/MainDataTable";
import MainToast from "../Helpers/MainToast";
import { NetworkWifi2BarRounded } from "@mui/icons-material";

const Books = () => {
    const [toastFlag, setToastFlag] = useState(false);
    const [text, settext] = useState("");

    const token = localStorage.getItem('authtoken');
    console.log(token)
    // const D=useSelector(state=>state.AdminView)
    const dispatch = useDispatch();
    const allbooksdata = useSelector(state => state.AdminView.allbooksdetailsdata, shallowEqual)
    // let mydata=allbooksdata
    const loadAllBooksDetails=useCallback(()=>{
        dispatch(loadAllBooksRequest());

    },[])
    useEffect(()=>{
        loadAllBooksDetails()
    
    },[])
     //dispatch(loadAllBooksRequest());

    // var allbooksdata=D.allbooksdetailsdata
    
    const [rowData, setrowData] = useState(allbooksdata)
     console.log(allbooksdata)
    console.log(rowData)
    

    const Action = (e) => {
   
        const Delete = () => {
            console.log(e.data)
            console.log(allbooksdata)
            console.log(rowData)
            if(rowData.length===0)
                var newArr = allbooksdata.filter((obj) => obj.authorName != e.data.authorName);
            else
                var newArr = rowData.filter((obj) => obj.authorName != e.data.authorName);
            setrowData(newArr);
            settext("hi");
            setToastFlag(!toastFlag)

        }
       
        return (

            <>
                <AButton onClick={Delete}>Delete</AButton>
            </>
        )
    }
    const columnDefs = useMemo(() => [
        { field: 'bookId', headerName: 'Serial No' },
        { field: 'bookName', headerName: 'Book Name' },
        { field: 'authorName', headerName: 'Author Name' },
        { field: 'quantity', headerName: 'Quantity' },
        { field: 'bookCategory.category', headerName: 'Category' },
        { headerName: 'Actions', cellRenderer: Action, }

    ], [])

    return (

        <>
            <TableHeader>ALL AVAILABLE BOOKS IN LIBRARY</TableHeader>
            <MainDataTable columnDefs={columnDefs} rowData={rowData.length ? rowData : allbooksdata} defaultColDef={{ flex: 1 }} />
            <ToastContainerTag
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
            />
            {toastFlag ? <MainToast text={text} setToastFlag={setToastFlag} /> : ""}
        </>
    )
}


export default React.memo(Books);