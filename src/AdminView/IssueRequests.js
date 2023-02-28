import React, { useEffect, useMemo, useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { AButton,  TableHeader } from "./AVStyles";
import { ToastContainerTag, ToastDiv } from "../Helpers/ToastStyles";
import MainDataTable from "../Helpers/MainDataTable";
import MainToast from "../Helpers/MainToast";
import { useDispatch, useSelector } from "react-redux";
import { loadAddResponseRequest, loadgetAllBookIssuesRequest } from "../reduxsaga/actions";




const IssueRequests = (props) => {
    const [toastFlag,setToastFlag]=useState(false);
    const [text,settext]=useState("");
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(loadgetAllBookIssuesRequest())
    },[])
    const D=useSelector(state=>state.AdminView)
    const rowData=D.getallbookissues;
    // const [rowData,setrowData]=useState(allissues)
    const Action = (e) => {

        const Aprove= () => {
            // setShowPopup(true)
            console.log(e.data)
            settext("Successfully Approved")
            setToastFlag(!toastFlag);
            const id=e.data.issueId;
            const resStatus=1
           dispatch(loadAddResponseRequest(id,resStatus))
           dispatch(loadgetAllBookIssuesRequest())
            const newData=[];
            for(let obj of rowData){
                if(obj.authorName!==e.data.authorName)
                    newData.push(obj)
            }
            // setrowData(newData)
           
        }
        return (
            <>
                <AButton onClick={Aprove}>Approved</AButton>
               
            </>
        )
    }
    const columnDefs = useMemo(()=>[
        { field: 'bookDetails.bookName', headerName:'Book Name',type: 'textCol' },
        { field: 'bookDetails.authorName',headerName:'Author', type: 'textCol' },
        { field: 'user.username', headerName:'Customer Name', type: 'numCol' },
        { headerName: 'Actions', cellRenderer: Action, type: 'btnCol' }

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