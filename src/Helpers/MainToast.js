import React from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { ToastDiv } from "./ToastStyles";

function MainToast({ text, setToastFlag }) {
  const Toast = () => {
    toast(
      <ToastDiv>
        {text}
        <TaskAltIcon />
      </ToastDiv>,
      {
        className: "toasterstyle",
        autoClose: "1000",
        hideProgressBar: true,
      }
    );
    setToastFlag(false)
  }

  return (
    <>
      {Toast()}
    </>
  )
}
export default MainToast;