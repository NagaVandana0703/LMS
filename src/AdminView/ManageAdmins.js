import React, { useCallback, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { approveUserRegisterAction, loadAllUsersDetailsRequest } from "../reduxsaga/actions";
import { AButton, TableHeader } from "./AVStyles";
import MainDataTable from "../Helpers/MainDataTable";

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
        { field: 'username', headerName: 'Name' },
        { field: 'phoneNumber', headerName: 'Phone Number', type: 'phCol' },
        { field: 'emailId', headerName: 'Email Id' },
        { field: 'sex', headerName: 'Gender' },
        { field: 'hometown', headerName: 'Location' },
        { field: 'dob', headerName: 'DOB' },
        { headerName: 'Actions', cellRenderer: ApproveRejectAction, type: 'actionCol' }
    ], [])
    const defaultColDef = useMemo(() => ({ flex: 1 }, { filter: true }))
    const columnTypes = useMemo(() => {return {actionCol: { flex: 2 },phCol: { flex: 1.2 }}})
    return (
        <>
            <TableHeader>Manage Admins</TableHeader>
            <MainDataTable columnDefs={columnDefs} rowData={rowData.length ? rowData : alladminsdata} defaultColDef={defaultColDef} columnTypes={columnTypes} />
        </>
    )
}

export default React.memo(ManageAdmins);