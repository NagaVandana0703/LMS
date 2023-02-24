import {  ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { loadAddBookRequest } from "../reduxsaga/actions";
import { Button, FieldBox, FormContainer, FormHeader } from "./AVStyles";


const AddBooks = () => {
    const dispatch=useDispatch();

    const Validate=(values)=> {
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
      
        if (!values.quantity) {
          errors.quantity = 'Required';
        } else if (isNaN(values.quantity)) {
          errors.quantity = 'Must be a number';
        }
        return errors;
    }
    const HandleSubmit = (values,actions) => {
        
        console.log(values)
        const errors=Validate(values)
 
        if (!Object.keys(errors).length) {
            actions.resetForm(); // reset the form values to empty
          }
        dispatch(loadAddBookRequest(values))        
    }
    return (
        <>
            <FormContainer>
                <FormHeader>
                    <h4>Add New Book</h4>
                </FormHeader>                
                    <Formik
                        initialValues={{ bookName: '', authorName: '', bookCategory: {category:'',minAge:''}, quantity: '' }}
                        validate={Validate}
                        onSubmit={HandleSubmit}                                                
                    >
                        {({ isSubmitting }) => (
                            <Form>                                
                                    <FieldBox type='text' className="fieldInputBox" name='bookName' placeholder='Book Name' /> 
                                    <ErrorMessage name='bookName' />                              
                                    <FieldBox type='text' className="fieldInputBox" name='authorName' placeholder='AuthorName' />  
                                    <ErrorMessage name='authorName' />                               
                                    <FieldBox type='text' className="fieldInputBox" name='bookCategory.category' placeholder='Book Category' /> 
                                    <ErrorMessage name='bookCategory.category' />                                
                                    <FieldBox type='number' className="fieldInputBox" name='bookCategory.minAge' placeholder='Minimum Age' />
                                    <ErrorMessage name='bookCategory.minAge' />                                   
                                    <FieldBox type='number' className="fieldInputBox" name='quantity' placeholder='Quantity' />                                                            
                                    <Button type="submit" disabled={isSubmitting}>Add Book</Button>                               
                            </Form>
                        )}
                    </Formik>              
            </FormContainer>
        </>
    )
}

export default AddBooks;