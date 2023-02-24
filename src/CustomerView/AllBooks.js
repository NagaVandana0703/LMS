import React, { useMemo, useState } from "react";
import Modal from "react-bootstrap/Modal";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import PopupForm from "./PopupForm";
import { AButton, TableHeader } from "../AdminView/AVStyles";
import { Field, Form, Formik } from "formik";
import { FormC } from "./CVStyles";
import MainDataTable from "../Helpers/MainDataTable";



const AllBooks = () => {
    const [showPopup, setShowPopup] = useState(false);
    const handleClose = () => setShowPopup(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const setModal = () => {
        setModalIsOpen(true);
    };

    const IssueBodyAction = (e) => {

        const Issue = () => {
            setShowPopup(true)
            console.log(e.data)

        }
        return (
            <>
                <AButton onClick={Issue}>Issue</AButton>
            </>
        )
    }
    const [columnDefs, setcolumnDefs] = useState([
        { field: 'serialno', type: 'numCol' },
        { field: 'title', type: 'textCol' },
        { field: 'author', type: 'textCol' },
        { field: 'quantity', type: 'numCol' },
        { headerName: 'Actions', cellRenderer: IssueBodyAction, type: 'btnCol' }

    ])
    const [Data, setData] = useState([
        { serialno: '1', title: 'HarryPotter', author: 'Jyothi', quantity: 5 },
        { serialno: '2', title: 'HalfGF', author: 'Chetan', quantity: 3 },
        { serialno: '3', title: 'RichDad', author: 'Robert', quantity: 15 },
        { serialno: '4', title: 'Alchemist', author: 'Geetha', quantity: 7 },
        { serialno: '5', title: 'thinkMonk', author: 'Shetty', quantity: 8 },
        { serialno: '6', title: 'Mind', author: 'Vandana', quantity: 9 },
        { serialno: '7', title: 'BhagavatGeetha', author: 'Krishna', quantity: 10 },
        { serialno: '8', title: 'Doremon', author: 'MrCat', quantity: 25 },
        { serialno: '9', title: 'Sinchan', author: 'Joe', quantity: 5 },
    ])
    const arr = [
        { serialno: '4', title: 'Alchemist', author: 'Geetha', quantity: 7 },
        { serialno: '5', title: 'thinkMonk', author: 'Shetty', quantity: 8 },
        { serialno: '6', title: 'Mind', author: 'Vandana', quantity: 9 },
        { serialno: '7', title: 'BhagavatGeetha', author: 'Krishna', quantity: 10 },
    ]

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
            <MainDataTable columnDefs={columnDefs} rowData={Data} defaultColDef={{ flex: 1 }} />
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