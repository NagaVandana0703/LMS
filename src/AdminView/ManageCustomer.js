import React, { useCallback, useEffect, useMemo, useState } from "react";
import { shallowEqual, useDispatch, useSelector } from "react-redux";
import { loadAllUsersDetailsRequest } from "../reduxsaga/actions";
import { AButton, TableHeader } from "./AVStyles";
import MainDataTable from "../Helpers/MainDataTable";
import { UseLoadAllUsersDetailsRequest } from "../reduxsaga/customHooks";
import { REDUCER_OPERATIONS } from "../reduxsaga/StringConstants";


const ManageCustomers = () => {

    let [hide, sethide] = useState(true)

    const allusersdata = useSelector(state => state.AdminView.allusersdata,shallowEqual)
//    const allusersdata = D.allusersdata
   const [rowData,setrowData]=useState(allusersdata)
    console.log(allusersdata)
    
    const dispatch = useDispatch();
    const loadAllUsersDetails = useCallback(() => {
        console.log('dispatch')
        dispatch(loadAllUsersDetailsRequest());
      }, [dispatch]);
    
    
       useEffect(() => {


            loadAllUsersDetails();
       
    }, [loadAllUsersDetails])
    
   
    const ApproveRejectAction = (props) => {
        const [rowdata, setrowdata] = useState(props.data);
        
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
    var d;
    const columnDefs = useMemo(()=>[
        { field: 'username', headerName: 'Name' ,type:'textCol'},
        { field: 'phoneNumber', headerName: 'Phone Number',type:'phCol' },
        { field: 'emailId', headerName: 'Email Id',type:'textCol' },
        { field: 'sex', headerName: 'Gender',type:'textCol' },
        { field: 'hometown', headerName: 'Location' ,type:'textCol'},
        { field: 'dob', headerName: 'DOB',type:'textCol' },
        { headerName: 'Actions', cellRenderer: ApproveRejectAction,type:'actionCol' }
    ],[])
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
            <MainDataTable columnDefs={columnDefs} rowData={rowData.length?rowData:allusersdata} defaultColDef={defaultColDef} columnTypes={columnTypes} />

        </>
    )
}

export default React.memo(ManageCustomers);