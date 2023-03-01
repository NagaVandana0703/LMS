import React, { useEffect, useMemo, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { AButton,  TableHeader } from "./AVStyles";
import { ToastContainerTag } from "../Helpers/ToastStyles";
import MainDataTable from "../Helpers/MainDataTable";
import MainToast from "../Helpers/MainToast";
import { useDispatch, useSelector } from "react-redux";
import { loadAddResponseRequest, loadgetAllBookIssuesRequest } from "../reduxsaga/actions";


const IssueRequests = () => {
    const [toastFlag,setToastFlag]=useState(false);
    const [text,settext]=useState("");
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadgetAllBookIssuesRequest())
    },[])
    const storeData=useSelector(state=>state.AdminView)
    const rowData=storeData.getallbookissues;
    console.log(rowData)
    const Action = (e) => {
        const Aprove= () => {
            console.log(e.data)
            settext("Successfully Approved")
            setToastFlag(!toastFlag);
           dispatch(loadAddResponseRequest(e.data.issueId,1))
           dispatch(loadgetAllBookIssuesRequest())
        }
        return (
                <AButton onClick={Aprove}>Approved</AButton>
        )
    }
    const columnDefs = useMemo(()=>[
        { field: 'bookDetails.bookName', headerName:'Book Name' },
        { field: 'bookDetails.authorName',headerName:'Author' },
        { field: 'user.username', headerName:'Customer Name' },
        { headerName: 'Actions', cellRenderer: Action }
    ],[])
      
    return (
        <>
            <TableHeader>Customer Requested to Admin to issue these Books</TableHeader>
            <MainDataTable columnDefs={columnDefs} rowData={rowData} defaultColDef={{flex:1}} />
            {toastFlag?<MainToast text={text} setToastFlag={setToastFlag}/>:""}
            <ToastContainerTag
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
               /> 
        </>
    )
}
export default IssueRequests;