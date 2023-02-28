import {  ErrorMessage, Form, Formik } from "formik";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import MainForm from "../Helpers/MainForm";
import { loadAddBookRequest } from "../reduxsaga/actions";
import { Button, FieldBox, FormContainer, FormHeader } from "./AVStyles";


const AddBooks = () => {
    const dispatch=useDispatch();
    const initialValues={ bookName: '', authorName: '', bookCategory: {category:'',minAge:'',maxAge:''}, quantity: '' };
    const Validate=useCallback((values)=> {
        const errors = {};

        if (!values.bookName) {
          errors.bookName = 'Required';
        }
      
        if (!values.authorName) {
          errors.authorName = 'Required';
        }
      
        if (!values.bookCategory.category) {
          errors.bookCategory = {category: 'Required'};
        }
      
        if (!values.bookCategory.minAge) {
          errors.bookCategory = {...errors.bookCategory, minAge: 'Required'};
        } else if (isNaN(values.bookCategory.minAge)) {
          errors.bookCategory = {...errors.bookCategory, minAge: 'Must be a number'};
        }
        if (!values.bookCategory.maxAge) {
          errors.bookCategory = {...errors.bookCategory, maxAge: 'Required'};
        } else if (isNaN(values.bookCategory.maxAge)) {
          errors.bookCategory = {...errors.bookCategory, maxAge: 'Must be a number'};
        }
      
        if (!values.quantity) {
          errors.quantity = 'Required';
        } else if (isNaN(values.quantity)) {
          errors.quantity = 'Must be a number';
        }
        return errors;
    },[]);
    const HandleSubmit = useCallback((values,actions) => {
        
        console.log(values)
        const errors=Validate(values)
 
        if (!Object.keys(errors).length) {
            actions.resetForm(); // reset the form values to empty
          }
        dispatch(loadAddBookRequest(values))        
    },[]);
    const ArrFields = [
      { name: 'bookName', type: 'text', placeholder: 'Book Name' },
      { name: 'authorName', type: 'text', placeholder: 'Author Name' },
      { name: 'bookCategory.category', type: 'text', placeholder: 'Book CategoryEnter' },
      { name: 'bookCategory.minAge', type: 'number', placeholder: 'Minimum Age' },
      { name: 'bookCategory.maxAge', type: 'number', placeholder: 'Maximum Age' },
      { name: 'quantity', type: 'number', placeholder: 'Quantity' }

  ]
  const subObj = { text: 'Add Book' }
    return (
        <>
            <FormContainer>
                <FormHeader>
                    <h4>Add New Book</h4>
                </FormHeader>                
                    
                    <MainForm initialValues={initialValues} Validate={Validate} HandleSubmit={HandleSubmit} ArrFields={ArrFields} subObj={subObj} />         
            
            </FormContainer>
        </>
    )
}

export default AddBooks;