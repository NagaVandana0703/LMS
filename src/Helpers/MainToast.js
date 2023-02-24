import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { ToastDiv } from "./ToastStyles";

function MainToast({text,setToastFlag}){
    const Toast=()=>{toast(
        <ToastDiv>
          {text} &nbsp;
          &nbsp;
          <TaskAltIcon style={{ color: "#00FF29" }} />
        </ToastDiv>,
        {
          className: "toasterstyle",
          autoClose: "1000",
          hideProgressBar: true,
        }
      );
    setToastFlag(false)
    }
    console.log('11')
    return(
       
        
        <>
        {Toast()}
          
        </>
    )
}
export default MainToast;