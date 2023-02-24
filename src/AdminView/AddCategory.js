import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { loadAddCategoryRequest } from "../reduxsaga/actions";
import { Button, FieldBox, FormContainer, FormHeader } from "./AVStyles";

const AddCategory = () => {
    const dispatch = useDispatch();
    const Validate=(values)=>{
        const errors = {};
        for(let key in values){
            if(!values[key])
                errors[key]='Required'
        }
        return errors;
    }
    const HandleSubmit = (values,actions) => {
        const errors=Validate(values) 
        if (!Object.keys(errors).length) {
            actions.resetForm(); // reset the form values to empty
          }
        values.categoryId = 0;
        dispatch(loadAddCategoryRequest(values))
    }
    return (
        <>
            <FormContainer>
                <FormHeader>
                    <h4>Add New Category</h4>
                </FormHeader>
                <Formik
                    initialValues={{ category: '', minAge: '', maxAge: '' }}
                    validate={Validate}
                    onSubmit={HandleSubmit}
                >
                    {({isSubmitting}) => (
                        <Form>
                            <FieldBox type='text' className="fieldInputBox" name='category' placeholder='Category Name' />
                            <ErrorMessage name='category' />
                            <FieldBox type='number' className="fieldInputBox" name='minAge' placeholder='Enter Min Age' />
                            <ErrorMessage name='minAge' />
                            <FieldBox type='number' className="fieldInputBox" name='maxAge' placeholder='Enter Max Age' />
                            <ErrorMessage name='maxAge' />
                            <Button type="submit" disabled={isSubmitting}>Add Category</Button>
                        </Form>
                    )}
                </Formik>
            </FormContainer>
        </>
    )
}
export default AddCategory;