import React, {  useState } from "react";
import {  toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import TaskAltIcon from "@mui/icons-material/TaskAlt";
import { connect, useDispatch, useSelector } from 'react-redux';
import { loadAllBooksRequest } from "../reduxsaga/actions";
import { AButton,  TableHeader } from "./AVStyles";
import { ToastContainerTag, ToastDiv } from "../Helpers/ToastStyles";
import MainDataTable from "../Helpers/MainDataTable";
import MainToast from "../Helpers/MainToast";





const Books = () => {
    const [toastFlag,setToastFlag]=useState(false);
    const [text,settext]=useState("");
    const Action = (e) => {

        const Delete= () => {
            // setShowPopup(true)
            console.log(e.data)
            console.log(rowData)
            var newData = rowData.filter((obj) => obj.authorName != e.data.authorName);
            // for(let obj of rowData){
            //     if(obj.authorName!==e.data.authorName)
            //         newData.push(obj)
            // }
            setrowData(newData)
            
            console.log(rowData)
            settext("Successfully Deleted")
            setToastFlag(!toastFlag);
            // toast(
            //     <ToastDiv>
            //       Successfully Deleted
            //       &nbsp; &nbsp;
            //       <TaskAltIcon style={{ color: "#00FF29" }} />
            //     </ToastDiv>,
            //     {
            //       className: "toasterstyle",
            //       autoClose: "1000",
            //       hideProgressBar: true,
            //     }
            //    );
        }
        return (
            <>
                <AButton onClick={Delete} >Delete</AButton>
            </>
        )
    }
    const [columnDefs, setcolumnDefs] = useState([
        { field: 'bookId' ,headerName:'Serial No'},
        { field: 'bookName' ,headerName:'Book Name'},
        { field: 'authorName' ,headerName:'Author Name'},
        { field: 'quantity',headerName:'Quantity'},
        // { field: 'quantity',headerName:'Category'},
        { field: 'bookCategory.category',headerName:'Category'},
        { headerName: 'Actions', cellRenderer: Action}

    ])
   
    const [rowData, setrowData] = useState([
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
    const D=useSelector(state=>state.AdminView)
    const allbooksdata=D.allbooksdetailsdata
    console.log(allbooksdata) 
    //const [rowData,setrowData]=useState([])
    const dispatch=useDispatch();
    
    
    // useEffect(()=>{
    //     if(allbooksdata.length===0)
    //         dispatch(loadAllBooksRequest());
    //     else
    //         setrowData(allbooksdata)
    // },[dispatch,rowData])
      
    return (
        <>
            <TableHeader>ALL AVAILABLE BOOKS IN LIBRARY</TableHeader>                       
            <MainDataTable columnDefs={columnDefs} rowData={rowData} defaultColDef={{flex:1}}/>
            <ToastContainerTag
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
            />
            {toastFlag?<MainToast text={text} setToastFlag={setToastFlag}/>:""}
        </>
    )
}


export default Books;