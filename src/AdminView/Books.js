import React, {  useCallback, useEffect, useMemo, useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { connect, shallowEqual, useDispatch, useSelector } from 'react-redux';
import { loadAllBooksRequest } from "../reduxsaga/actions";
import { AButton,  TableHeader } from "./AVStyles";
import { ToastContainerTag, ToastDiv } from "../Helpers/ToastStyles";
import MainDataTable from "../Helpers/MainDataTable";
import MainToast from "../Helpers/MainToast";
import { NetworkWifi2BarRounded } from "@mui/icons-material";

const Books = () => {
    const [toastFlag,setToastFlag]=useState(false);
    const [text,settext]=useState("");
        
    const token=localStorage.getItem('authtoken');
    console.log(token)
    // const D=useSelector(state=>state.AdminView)
    const allbooksdata = useSelector(state => state.AdminView.allbooksdetailsdata, shallowEqual)

    // var allbooksdata=D.allbooksdetailsdata
    console.log(allbooksdata) 
    let [rowData,setrowData]=useState(allbooksdata)
    
    const dispatch=useDispatch();
    
    const loadAllBooksDetails = useCallback(() => {
        console.log('dispatch')
        dispatch(loadAllBooksRequest());
      }, [dispatch]);
    useEffect(()=>{
      
           loadAllBooksDetails()

    },[loadAllBooksDetails])

    const Action =useCallback( (e) => {
       
        const Delete= () => {
            // setShowPopup(true)
            console.log(e.data)
            console.log(rowData)
            var newArr=[];
            if (rowData.length == 0){
                console.log('deelte')
                   
            console.log(allbooksdata)
                for(let obj of allbooksdata){
                    if(obj.authorName!==e.data.authorName)
                        newArr.push(obj)
                }
                   
            console.log(NetworkWifi2BarRounded)
            }
            else var newArr = rowData.filter((obj) => obj.authorName !== e.data.authorName);
            rowData=newArr;
         
            
            console.log(rowData)
            settext("Successfully Deleted")
            setToastFlag(!toastFlag);
           
        }
        return (
            <>
                <AButton onClick={Delete} >Delete</AButton>
            </>
        )
    },[])
    const columnDefs=useMemo(()=> [
        { field: 'bookId' ,headerName:'Serial No'},
        { field: 'bookName' ,headerName:'Book Name'},
        { field: 'authorName' ,headerName:'Author Name'},
        { field: 'quantity',headerName:'Quantity'},
        { field: 'bookCategory.category',headerName:'Category'},
        { headerName: 'Actions', cellRenderer: Action}

    ],[])
   

    console.log('BOOKS COMPONENT')
    return (
        
        <>
            <TableHeader>ALL AVAILABLE BOOKS IN LIBRARY</TableHeader>                       
            <MainDataTable columnDefs={columnDefs} rowData={rowData.length?rowData:allbooksdata} defaultColDef={{flex:1}}/>
            <ToastContainerTag
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
            />
            {toastFlag?<MainToast text={text} setToastFlag={setToastFlag}/>:""}
        </>
    )
}


export default React.memo(Books);