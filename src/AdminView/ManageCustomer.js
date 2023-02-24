import React, { useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadAllUsersDetailsRequest } from "../reduxsaga/actions";
import { AButton, TableHeader } from "./AVStyles";
import MainDataTable from "../Helpers/MainDataTable";


const ManageCustomers = () => {

    let [hide, sethide] = useState(true)
    const [rowData, setrowData] = useState([
        { username: 'Priya', phoneNumber: '6303640577', emailId: 'priya@gmail.com', sex: 'female', hometown: 'Tirupati', dob: '06-08-2000',responseStatus:"APPROVED" },
        { username: 'Zaheer', phoneNumber: '6303640599', emailId: 'zaheer@gmail.com', sex: 'male', hometown: 'Kadapa', dob: '01-09-2000',responseStatus:"PENDING" },
        { username: 'Vinla', phoneNumber: '6403648579', emailId: 'vinla@gmail.com', sex: 'female', hometown: 'Proddatur', dob: '07-12-2000',responseStatus:"APPROVED" },
        { username: 'Ramya', phoneNumber: '6303640467', emailId: 'ramya@gmail.com', sex: 'female', hometown: 'Nellore', dob: '05-07-2000',responseStatus:"PENDING" },
        { username: 'Sudha', phoneNumber: '8639590588', emailId: 'sudha@gmail.com', sex: 'male', hometown: 'Duvvur', dob: '23-05-2000',responseStatus:"PENDING" },
        { username: 'Harsha', phoneNumber: '6303640577', emailId: 'harsha@gmail.com', sex: 'male', hometown: 'Bglr', dob: '26-08-2000' ,responseStatus:"PENDING"},
    ])
    const D = useSelector(state => state.AdminView)
    const allusersdata = D.allusersdata
    console.log(allusersdata)
    //const [rowData,setrowData]=useState([])
    const dispatch = useDispatch();

    // useEffect(() => {
    //     if(allusersdata.length===0)
    //         dispatch(loadAllUsersDetailsRequest());
    //     else
    //         setrowData(allusersdata)
    // }, [dispatch,allusersdata])
    
   
    const ApproveRejectAction = (props) => {
        const [rowdata, setrowdata] = useState(props.data);
        console.log(rowdata)
        const Aprove = () => {
            let ob={};
            ob.userid=props.data.userId;
            ob.responseStatus=1
             console.log(rowdata.userId,rowdata.responseStatus)
            setrowdata({...rowdata,responseStatus:'APPROVED'})
            console.log(rowdata)
          
            
        }
        const Reject=()=>{
            let ob={};
            ob.userid=props.data.userId;
            ob.responseStatus=2
            setrowdata({...rowdata,responseStatus:'PENDING'})
            dispatch()
        }
        return (
            <>
                { rowdata.responseStatus==='PENDING'  ? <AButton  onClick={Aprove}>
                    Approve
                </AButton> : ''}
                {/* {rowdata.responseStatus==='PENDING'  ? <AButton className="Rbutton" onClick={Reject}>
                    Reject
                </AButton>:''} */}
                <AButton className="Rbutton" onClick={Reject}>
                    Reject
                </AButton>
            </>
        )
    }
    
    const columnDefs = [
        { field: 'username', headerName: 'Name' ,type:'textCol'},
        { field: 'phoneNumber', headerName: 'Phone Number',type:'phCol' },
        { field: 'emailId', headerName: 'Email Id',type:'textCol' },
        { field: 'sex', headerName: 'Gender',type:'textCol' },
        { field: 'hometown', headerName: 'Location' ,type:'textCol'},
        { field: 'dob', headerName: 'DOB',type:'textCol' },
        { headerName: 'Actions', cellRenderer: ApproveRejectAction,type:'actionCol' }
    ]
    const defaultColDef = useMemo(() => (
        
        { flex: 1}
    ))
        const columnTypes=useMemo(()=>{
            return{
                actionCol:{flex:2},
                phCol:{flex:1.2}

            }
        })
    return (
        <>
            <TableHeader>Manage Customers</TableHeader>
            <MainDataTable columnDefs={columnDefs} rowData={rowData} defaultColDef={defaultColDef} columnTypes={columnTypes} />

        </>
    )
}

export default ManageCustomers;