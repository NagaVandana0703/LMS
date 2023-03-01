import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MainDataTable from "../Helpers/MainDataTable";
import MainForm from "../Helpers/MainForm";
import { loadAddBookRequest, loadAllBooksRequest, loaddeleteBookRequest } from "../reduxsaga/actions";
import { BookFormFields, BookSubmitBtn } from "./AVConstants";
import { AButton, Button, FormContainer, FormHeader } from "./AVStyles";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';


const AddBooks = () => {
  const dispatch = useDispatch();
  const [showbookPopup, setbookShowPopup] = useState(false);
  const handleClose = () => setbookShowPopup(false);
  const [initialValues, setinitialValues] = useState({ bookName: '', authorName: '', bookCategory: { category: '', minAge: '', maxAge: '' }, quantity: '' });
  const storeData = useSelector(state => state.AdminView)
  const { allbooksdetailsdata } = storeData
  useEffect(() => {
    dispatch(loadAllBooksRequest())
  }, [])
  const Action = (e) => {
    const edit = () => {
      setinitialValues(e.data)
      setbookShowPopup(true)
    }
    const del = () => {
      dispatch(loaddeleteBookRequest(e.data.bookId));
      dispatch(loadAllBooksRequest())
    }
    return (
      <>
        <AButton onClick={edit}>Edit</AButton>
        <AButton className="Rbutton" onClick={del}>Delete</AButton>
      </>
    )
  }

  const columnDefs = useMemo(() => [
    { field: 'bookName', headerName: 'Book', type: 'bCol' },
    { field: 'authorName', headerName: 'Author' },
    { field: 'bookCategory.category', headerName: 'Category' },
    { field: 'bookCategory.minAge', headerName: 'MinAge' },
    { field: 'bookCategory.maxAge', headerName: 'MaxAge' },
    { field: 'quantity', headerName: 'Quantity' },
    { headerName: 'Actions', cellRenderer: Action, type: 'actionCol' },
  ], [])
  const defaultColDef = useMemo(() => ({ flex: 1 }))
  const columnTypes = useMemo(() => { return { actionCol: { flex: 2 }, bCol: { flex: 1.5 } } })
  const Validate = useCallback((values) => {
    const errors = {};
    if (!values.bookName) {
      errors.bookName = 'Required';
    }
    if (!values.authorName) {
      errors.authorName = 'Required';
    }

    if (!values.bookCategory.category) {
      errors.bookCategory = { category: 'Required' };
    }

    if (!values.bookCategory.minAge) {
      errors.bookCategory = { ...errors.bookCategory, minAge: 'Required' };
    } else if (isNaN(values.bookCategory.minAge)) {
      errors.bookCategory = { ...errors.bookCategory, minAge: 'Must be a number' };
    }
    if (!values.bookCategory.maxAge) {
      errors.bookCategory = { ...errors.bookCategory, maxAge: 'Required' };
    } else if (isNaN(values.bookCategory.maxAge)) {
      errors.bookCategory = { ...errors.bookCategory, maxAge: 'Must be a number' };
    }

    if (!values.quantity) {
      errors.quantity = 'Required';
    } else if (isNaN(values.quantity)) {
      errors.quantity = 'Must be a number';
    }
    return errors;
  }, []);
  const HandleSubmit = useCallback((values, actions) => {
    dispatch(loadAddBookRequest(values))
    const errors = Validate(values)
    if (!Object.keys(errors).length) {
      actions.resetForm(); // reset the form values to empty
    }
    setbookShowPopup(false)
    dispatch(loadAllBooksRequest())
  }, []);
  const BookPopup = () => {
    setinitialValues({ bookName: '', authorName: '', bookCategory: { category: '', minAge: '', maxAge: '' }, quantity: '' })
    setbookShowPopup(true)
  }
  return (
    <>
      <Button className="addBtn" onClick={BookPopup}>Add Book</Button>
      <MainDataTable rowData={allbooksdetailsdata} columnDefs={columnDefs} defaultColDef={defaultColDef} columnTypes={columnTypes} />
      <Modal
        dialogClassName="modalpopup"
        show={showbookPopup}
        modal
        onHide={handleClose}>
        <Modal.Header className="modalheader" closeButton></Modal.Header>
        <FormContainer>
          <FormHeader>
            <h4>Add New Book</h4>
          </FormHeader>
          <MainForm initialValues={initialValues} Validate={Validate} HandleSubmit={HandleSubmit} ArrFields={BookFormFields} subObj={BookSubmitBtn} />
        </FormContainer>
      </Modal>
    </>
  )
}

export default AddBooks;