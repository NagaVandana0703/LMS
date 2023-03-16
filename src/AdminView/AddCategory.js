import React, { useCallback, useEffect, useMemo, useState } from "react";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainerTag } from "../Helpers/ToastStyles";
import { loadAddCategoryRequest, loaddeleteCategoryRequest, loadgetCategoryRequest } from "../reduxsaga/actions";
import { CategoryBtn, CategoryFormFields } from "./AVConstants";
import { AButton, Button, FormContainer, FormHeader } from "./AVStyles";
import '/node_modules/bootstrap/dist/css/bootstrap.min.css';
import MainDataTable from "../Helpers/MainDataTable";
import MainForm from "../Helpers/MainForm";
import MainToast from "../Helpers/MainToast";

const AddCategory = () => {
    const [toastFlag,setToastFlag]=useState(false);
    const [text,settext]=useState("");
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
            console.log(initialValues)
            setcategoryShowPopup(true)
        }
        const del = () => {
            settext("Successfully Deleted!");
            setToastFlag(!toastFlag);
            dispatch(loaddeleteCategoryRequest(e.data.categoryId));
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
        console.log(values)
        dispatch(loadAddCategoryRequest(values))
        const errors = Validate(values)
        if (!Object.keys(errors).length) {
            actions.resetForm(); 
        }
        setcategoryShowPopup(false)
    }, []);
    const popup = useCallback(() => {
        setinitialValues({ category: '', minAge: '', maxAge: '' })
        setcategoryShowPopup(true)
    },[])
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
            {toastFlag?<MainToast text={text} setToastFlag={setToastFlag}/>:""}
            <ToastContainerTag
                toastStyle={{ backgroundColor: "#00397A", color: "white" }}
               /> 
        </>
    )
}
export default AddCategory;