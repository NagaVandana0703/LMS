import React, { lazy,useState,useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { TableHeader ,  AButton } from "../AdminView/AVStyles";
import MainToast from "../Helpers/MainToast";
import { ToastContainerTag } from "../Helpers/ToastStyles";
import { loadgetOverDueRequest, loadreturnBookRequest } from "../reduxsaga/actions";
const MainDataTable = lazy(() => import("../Helpers/MainDataTable"));


const OverDue = () => {
    const [toastFlag,setToastFlag]=useState(false);
    const [text,settext]=useState("");
    const userdetails=JSON.parse(localStorage.getItem('user_details'))
    const dispatch=useDispatch();
    const storeData=useSelector(state=>state.AdminView)
    const {getoverduebooks}=storeData;
    const rowData=[]
    for(let obj of getoverduebooks){
        if(obj.user.userId===userdetails.userId)
            rowData.push(obj)
    }
    
    useEffect(()=>{
        dispatch(loadgetOverDueRequest())
    },[]);
    
    const Action = (e) => {
        const Return=()=>{
            settext("Successfully Returned!")
            setToastFlag(!toastFlag); 
            dispatch(loadreturnBookRequest(e.data.issueId));
        }
        return (
                <AButton onClick={Return}>Return</AButton>
        )
    }
    
    const columnDefs =useMemo(()=>[
        { field: 'bookDetails.bookName',headerName:'Book' },
        { field: 'bookDetails.authorName',headerName:'Author' },
        {field:'bookDetails.bookCategory.category',headerName:'Category'},
        {field:'issueDate'},
        {field:'returnDate'},
        { headerName: 'Actions', cellRenderer: Action }
    ],[])
    return (
        <>
            <TableHeader>OverDue</TableHeader>
            <MainDataTable columnDefs={columnDefs} rowData={rowData} defaultColDef={{ flex: 1 }}/>
            {toastFlag?<MainToast text={text} setToastFlag={setToastFlag}/>:""}
            <ToastContainerTag
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
               /> 
        </>
    )
}

export default OverDue;