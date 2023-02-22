import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { loadAddCategoryRequest } from "../reduxsaga/actions";
import './AddBooks.css';
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.css";
// import 'ag-grid-enterprise';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

const AddCategory = () => {
    const dispatch=useDispatch();
    const HandleSubmit = (values) => {
        values.categoryId=0;
        console.log(values);

        dispatch(loadAddCategoryRequest(values))
    }
    return (
        <>
            <div className="formContainer">
                <div className="formHeader">
                    <h4>Add a New Category</h4>
                </div>
                <div className="form">
                    <Formik
                        initialValues={{ category: '', minAge: '', maxAge: '' }}
                        onSubmit={values => HandleSubmit(values)}
                    >
                        {() => (
                            <Form>
                                <div >
                                    <Field type='text' className="fieldInputBox" name='category' placeholder='Category Name' />
                                </div>
                                <div >
                                    <Field type='number' className="fieldInputBox" name='minAge' placeholder='Enter Min Age' />
                                </div>
                                <div >
                                    <Field type='number' className="fieldInputBox" name='maxAge' placeholder='Enter Max Age' />
                                </div>
                                <div className="SubmitBtn">
                                    <button type="submit">Add Category</button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default AddCategory;