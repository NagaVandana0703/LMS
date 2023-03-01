import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import MainDataTable from "../Helpers/MainDataTable";
import MainForm from "../Helpers/MainForm";
import { loadAddCategoryRequest, loaddeleteCategoryRequest, loadgetCategoryRequest } from "../reduxsaga/actions";
import { CategoryBtn, CategoryFormFields } from "./AVConstants";
import { AButton, Button, FormContainer, FormHeader } from "./AVStyles";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
const AddCategory = () => {
    const [showcategoryPopup, setcategoryShowPopup] = useState(false);
    const handleClose = () => setcategoryShowPopup(false);
    const [initialValues, setinitialValues] = useState({ category: '', minAge: '', maxAge: '' });
    const storeData = useSelector(state => state.AdminView)
    const { category } = storeData;
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(loadgetCategoryRequest())
    }, [])

    const Action = (e) => {
        const edit = () => {
            setinitialValues(e.data)
            setcategoryShowPopup(true)
        }
        const del = () => {
            dispatch(loaddeleteCategoryRequest(e.data.categoryId));
            dispatch(loadgetCategoryRequest())
        }
        return (
            <>
                <AButton onClick={edit}>Edit</AButton>
                <AButton className="Rbutton" onClick={del}>Delete</AButton>
            </>
        )
    }
    const columnDefs = useMemo(() => [
        { field: 'category' },
        { field: 'minAge' },
        { field: 'maxAge' },
        { headerName: 'Actions', cellRenderer: Action },
    ], [])

    const Validate = useCallback((values) => {
        const errors = {};
        for (let key in values) {
            if (!values[key])
                errors[key] = 'Required'
        }
        return errors;
    }, []);
    const HandleSubmit = useCallback((values, actions) => {
        dispatch(loadAddCategoryRequest(values))
        const errors = Validate(values)
        if (!Object.keys(errors).length) {
            actions.resetForm(); // reset the form values to empty
        }
        setcategoryShowPopup(false)
        dispatch(loadgetCategoryRequest())
    }, []);
    const popup = () => {
        setinitialValues({ category: '', minAge: '', maxAge: '' })
        setcategoryShowPopup(true)
    }
    return (
        <>
            <Button className="addBtn" onClick={popup}>Add Category</Button>
            <MainDataTable rowData={category} columnDefs={columnDefs} defaultColDef={{ flex: 1 }} />
            <Modal
                dialogClassName="modalpopup"
                show={showcategoryPopup}
                modal
                onHide={handleClose}>
                <Modal.Header className="modalheader" closeButton></Modal.Header>
                <FormContainer>
                    <FormHeader>
                        <h4>Add New Category</h4>
                    </FormHeader>
                    <MainForm initialValues={initialValues} Validate={Validate} HandleSubmit={HandleSubmit} ArrFields={CategoryFormFields} subObj={CategoryBtn} />
                </FormContainer>
            </Modal>
        </>
    )
}
export default AddCategory;