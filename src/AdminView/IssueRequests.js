import React, { useMemo, useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { AButton,  TableHeader } from "./AVStyles";
import { ToastContainerTag, ToastDiv } from "../Helpers/ToastStyles";
import MainDataTable from "../Helpers/MainDataTable";
import MainToast from "../Helpers/MainToast";




const IssueRequests = (props) => {
    const [toastFlag,setToastFlag]=useState(false);
    const [text,settext]=useState("");
    const Action = (e) => {

        const Aprove= () => {
            // setShowPopup(true)
            console.log(e.data)
            settext("Successfully Deleted")
            setToastFlag(!toastFlag);
            // toast(
            //     <ToastDiv>
            //       You have approved {e.data.bookName} book
            //       &nbsp; &nbsp;
            //       <TaskAltIcon style={{ color: "#00FF29" }} />
            //     </ToastDiv>,
            //     {
            //       className: "toasterstyle",
            //       autoClose: "1000",
            //       hideProgressBar: true,
            //     }
            //   );
            const newData=[];
            for(let obj of rowData){
                if(obj.authorName!==e.data.authorName)
                    newData.push(obj)
            }
            setrowData(newData)
           
        }
        return (
            <>
                <AButton onClick={Aprove}>Approved</AButton>
               
            </>
        )
    }
    const columnDefs = useMemo(()=>[
        { field: 'bookName', headerName:'Book Name',type: 'textCol' },
        { field: 'authorName',headerName:'Author', type: 'textCol' },
        { field: 'customername', headerName:'Customer Name', type: 'numCol' },
        { headerName: 'Actions', cellRenderer: Action, type: 'btnCol' }

    ],[])
    const [rowData, setrowData] = useState([
        { bookName: 'HarryPotter', authorName: 'Jyothi', customername:'Sanjay' },
        { bookName: 'HalfGF', authorName: 'Chetan', customername:'Hari' },
       
    ])
  
    
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