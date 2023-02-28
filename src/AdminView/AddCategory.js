import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import MainForm from "../Helpers/MainForm";
import { loadAddCategoryRequest } from "../reduxsaga/actions";
import { FormContainer, FormHeader } from "./AVStyles";

const AddCategory = () => {
    const dispatch = useDispatch();
    const initialValues = { category: '', minAge: '', maxAge: '' };
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
            actions.resetForm(); // reset the form values to empty
        }
       
    }, []);
    const ArrFields = [
        { name: 'category', type: 'text', placeholder: 'Category Name' },
        { name: 'minAge', type: 'number', placeholder: 'Enter Min Age' },
        { name: 'maxAge', type: 'number', placeholder: 'Enter Max Age' }
    ]
    const subObj = { text: 'Add Category' }
    return (
        <>
        
        <FormContainer>
            <FormHeader>
                <h4>Add New Category</h4>
            </FormHeader>
            <MainForm initialValues={initialValues} Validate={Validate} HandleSubmit={HandleSubmit} ArrFields={ArrFields} subObj={subObj} />

        </FormContainer>
        </>
    )
}
export default AddCategory;