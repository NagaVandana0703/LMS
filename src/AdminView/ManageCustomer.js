import React, { useCallback, useEffect, useMemo, useState } from "react";
import {  useDispatch, useSelector } from "react-redux";
import { approveUserRegisterAction, loadAllUsersDetailsRequest } from "../reduxsaga/actions";
import { AButton, TableHeader } from "./AVStyles";
import MainDataTable from "../Helpers/MainDataTable";


const ManageCustomers = () => {
    const allusersdata = useSelector(state => state.AdminView.allusersdata)
    const rowData = [];
    for (let obj of allusersdata) {
        if (obj.role === 'USER')
            rowData.push(obj)
    }
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
            setrowdata({ ...rowdata, responseStatus: 'APPROVED' })
            dispatch(approveUserRegisterAction(props.data.userId, 1))
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
        { field: 'username', headerName: 'Name', type: 'textCol' },
        { field: 'phoneNumber', headerName: 'Phone Number', type: 'phCol' },
        { field: 'emailId', headerName: 'Email Id', type: 'textCol' },
        { field: 'sex', headerName: 'Gender', type: 'textCol' },
        { field: 'hometown', headerName: 'Location', type: 'textCol' },
        { field: 'dob', headerName: 'DOB', type: 'textCol' },
        { headerName: 'Actions', cellRenderer: ApproveRejectAction, type: 'actionCol' }
    ], [])
    const defaultColDef = useMemo(() => ( { flex: 1 }, { filter: true } ))
    const columnTypes = useMemo(() => { return { actionCol: { flex: 2 }, phCol: { flex: 1.2 } } })
    return (
        <>
            <TableHeader>Manage Customers</TableHeader>
            <MainDataTable columnDefs={columnDefs} rowData={rowData.length ? rowData : allusersdata} defaultColDef={defaultColDef} columnTypes={columnTypes} />
        </>
    )
}

export default React.memo(ManageCustomers);