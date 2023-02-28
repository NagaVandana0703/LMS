import React, { useCallback, useEffect, useMemo, useState } from "react";
import Modal from "react-bootstrap/Modal";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import PopupForm from "./PopupForm";
import { AButton, TableHeader } from "../AdminView/AVStyles";
import { Field, Form, Formik } from "formik";
import { FormC } from "./CVStyles";
import MainDataTable from "../Helpers/MainDataTable";
import { useDispatch, useSelector } from "react-redux";
import { loadAllBooksRequest, loadissueBookRequest } from "../reduxsaga/actions";
import { ToastContainerTag } from "../Helpers/ToastStyles";
import MainToast from "../Helpers/MainToast";



const AllBooks = () => {
    const [toastFlag, setToastFlag] = useState(false);
    const [text, settext] = useState("");
    const [showPopup, setShowPopup] = useState(false);
    const handleClose = () => setShowPopup(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const setModal = () => {
        setModalIsOpen(true);
    };
    const dispatch=useDispatch();
    const loadAllBooksDetails=useCallback(()=>{
        dispatch(loadAllBooksRequest());

    },[])
    useEffect(()=>{
        loadAllBooksDetails()
    
    },[])
    const rowData = useSelector(state => state.AdminView.allbooksdetailsdata)

    const userdetails=JSON.parse(localStorage.getItem('user_details'))
    const IssueBodyAction = (e) => {

        const Issue = () => {
            // setShowPopup(true)
            console.log(e.data.bookId,userdetails.userId)
            dispatch(loadissueBookRequest(e.data.bookId,userdetails.userId))
            settext("Issued the book successfully");
            setToastFlag(!toastFlag)

        }
        return (
            <>
                <AButton onClick={Issue}>Issue</AButton>
            </>
        )
    }
    const [columnDefs, setcolumnDefs] = useState([
        { field: 'bookName', type: 'textCol' },
        { field: 'authorName', type: 'textCol' },
        { field: 'quantity', type: 'numCol' },
        { headerName: 'Actions', cellRenderer: IssueBodyAction, type: 'btnCol' }

    ])
   

    const Validate = (values) => {
        const errors = {};
        for (let key in values) {
            if (!values[key])
                errors[key] = 'Required'
        }
        return errors;
    }
    const HandleSubmit = (values, actions) => {
        console.log(values)
        const errors = Validate(values)
        if (!Object.keys(errors).length) {
            actions.resetForm(); // reset the form values to empty
        }
    }


    return (
        <>
            <TableHeader>ALL AVAILABLE BOOKS IN LIBRARY</TableHeader>
            <FormC>
                <Formik initialValues={{ category: '', age: '' }} onSubmit={HandleSubmit}
                    validate={Validate}>
                    {() => (
                        <Form>
                            <Field type='text' name='category' placeholder="Enter Category"></Field>
                            <Field type='number' name='age' placeholder="Enter Age"></Field>
                            <button type='submit'>Submit</button>
                        </Form>
                    )}
                </Formik>
            </FormC>
            <MainDataTable columnDefs={columnDefs} rowData={rowData} defaultColDef={{ flex: 1 }} />
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
                    onClick={setModal}
                >
                    <Modal.Header className="modalheader" closeButton></Modal.Header>
                    <PopupForm setShowPopup={setShowPopup} handleClose={handleClose} />
                </Modal>
            </>
        </>
    )
}

export default AllBooks;