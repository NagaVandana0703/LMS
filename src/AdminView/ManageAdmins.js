import React, { lazy,useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import MainDataTable from "../Helpers/MainDataTable";
import { approveUserRegisterAction, loadAllUsersDetailsRequest } from "../reduxsaga/actions";
import { AButton, TableHeader } from "./AVStyles";
import FilterForm from "./FilterForm";


const ManageAdmins = () => {
    const alladminsdata = useSelector(state => state.AdminView.allusersdata)
    const rowData = []
    for (let obj of alladminsdata) {
        if (obj.role === 'ADMIN')
            rowData.push(obj)
    }
    const dispatch = useDispatch();
    const loadAllAdminDetails = useCallback(() => {
        dispatch(loadAllUsersDetailsRequest());
    }, [dispatch]);
    useEffect(() => {
        loadAllAdminDetails();
    }, [loadAllAdminDetails])
    const ApproveRejectAction = (props) => {
        const [rowdata, setrowdata] = useState(props.data);
        const Aprove = () => {
            setrowdata({ ...rowdata, responseStatus: 'APPROVED' })
            dispatch(approveUserRegisterAction(props.data.userId, 1))
            console.log(rowdata)
        }
        const Reject = () => {
            setrowdata({ ...rowdata, responseStatus: 'PENDING' })
            dispatch(approveUserRegisterAction(props.data.userId, 2))
        }
        return (
            <>
                {rowdata.responseStatus === 'PENDING' ? <AButton onClick={Aprove}>
                    Approve
                </AButton> : ''}
                <AButton className="Rbutton" onClick={Reject}>
                    Reject
                </AButton>
            </>
        )
    }
    const columnDefs = useMemo(() => [
        { field: 'username', headerName: 'Name',type:'textCol' },
        { field: 'phoneNumber', headerName: 'Phone Number', type: 'phCol' },
        { field: 'emailId', headerName: 'Email Id',type:'textCol' },
        { field: 'sex', headerName: 'Gender',type:'textCol' },
        { field: 'hometown', headerName: 'Location' ,type:'textCol'},
        { field: 'dob', headerName: 'DOB',type:'textCol' },
        { headerName: 'Actions', cellRenderer: ApproveRejectAction, type: 'actionCol' }
    ], [])
    const defaultColDef = useMemo(() => ({ flex: 1 }, { filter: true }))
    const columnTypes = useMemo(() => {return{phCol:{flex:1},textCol:{flex:1},actionCol:{flex:2}}} )
    
    return (
        <>    
            <TableHeader>Manage Admins</TableHeader>
            <FilterForm initialValues={{search:''}} role='admin' FieldsArr={[{type:'search',name:'search',placeholder:'Search by location,gender,age'}]}/>
            <MainDataTable columnDefs={columnDefs} rowData={rowData.length ? rowData : alladminsdata} defaultColDef={defaultColDef} columnTypes={columnTypes} />
        </>
    )
}

export default React.memo(ManageAdmins);