import React, { useCallback, useEffect, useMemo, useState } from "react";
import Modal from "react-bootstrap/Modal";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import PopupForm from "./PopupForm";
import { AButton, TableHeader } from "../AdminView/AVStyles";
import { Field, Form, Formik } from "formik";
import { FormC } from "./CVStyles";
import MainDataTable from "../Helpers/MainDataTable";
import { useDispatch, useSelector } from "react-redux";
import { loadAllBooksRequest, loadCategoryAgeRequest, loadissueBookRequest } from "../reduxsaga/actions";
import { ToastContainerTag } from "../Helpers/ToastStyles";
import MainToast from "../Helpers/MainToast";

const AllBooks = () => {
    const [toastFlag, setToastFlag] = useState(false);
    const [text, settext] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const handleClose = () => setShowPopup(false);
    const dispatch=useDispatch();
    const loadAllBooksDetails=useCallback(()=>{
        dispatch(loadAllBooksRequest());
    },[])
    useEffect(()=>{
        loadAllBooksDetails()    
    },[])
    const storeData = useSelector(state => state.AdminView)
    const {allbooksdetailsdata,getcategoryagebooks}=storeData;
    const userdetails=JSON.parse(localStorage.getItem('user_details'))
    const IssueBodyAction = (e) => {
        const Issue = () => {
            dispatch(loadissueBookRequest(e.data.bookId,userdetails.userId))
            settext("Issued the book successfully");
            setToastFlag(!toastFlag)

        }
        return (
                <AButton onClick={Issue}>Issue</AButton>
        )
    }
    const columnDefs = useMemo(()=>[
        { field: 'bookName' },
        { field: 'authorName' },
        { field: 'bookCategory.category' },
        { field: 'quantity'},
        { headerName: 'Actions', cellRenderer: IssueBodyAction }

    ],[])
    const Validate =useCallback( (values) => {
        const errors = {};
        for (let key in values) {
            if (!values[key])
                errors[key] = 'Required'
        }
        return errors;
    },[])
    const HandleSubmit = useCallback((values, actions) => {
        dispatch(loadCategoryAgeRequest(values.category,values.age))
        const errors = Validate(values)
        if (!Object.keys(errors).length) {
            actions.resetForm(); 
        }
    },[])
    return (
        <>
            <TableHeader>ALL AVAILABLE BOOKS IN LIBRARY</TableHeader>
            <FormC>
                <Formik initialValues={{ category: '', age: '' }} onSubmit={HandleSubmit}
                    validate={Validate}>
                    {() => (<Form>
                                <Field type='text' name='category' placeholder="Enter Category"></Field>
                                <Field type='number' name='age' placeholder="Enter Age"></Field>
                                <button type='submit'>Submit</button></Form>)}
                </Formik>
            </FormC>
            <MainDataTable columnDefs={columnDefs} rowData={getcategoryagebooks.length?getcategoryagebooks:allbooksdetailsdata} defaultColDef={{ flex: 1 }} />
            <ToastContainerTag
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
            />
            {toastFlag ? <MainToast text={text} setToastFlag={setToastFlag} /> : ""}
            <>
                <Modal
                    dialogClassName="modalpopup"
                    show={showPopup}
                    modal
                    onHide={handleClose}
                >
                    <Modal.Header className="modalheader" closeButton></Modal.Header>
                    <PopupForm setShowPopup={setShowPopup} handleClose={handleClose} />
                </Modal>
            </>
        </>
    )
}

export default AllBooks;