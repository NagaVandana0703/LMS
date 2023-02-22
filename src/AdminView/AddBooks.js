import { Field, Form, Formik } from "formik";
import React from "react";
import { useDispatch } from "react-redux";
import { loadAddBookRequest } from "../reduxsaga/actions";
import './AddBooks.css';
// import "primereact/resources/themes/lara-light-indigo/theme.css";
// import "primereact/resources/primereact.css";
// import 'ag-grid-enterprise';
// import 'ag-grid-community/styles/ag-grid.css';
// import 'ag-grid-community/styles/ag-theme-alpine.css';

const AddBooks = () => {
    const dispatch=useDispatch();
    const HandleSubmit = (values) => {
        console.log(values)
        dispatch(loadAddBookRequest(values))
        
    }
    return (
        <>
            <div className="formContainer">
                <div className="formHeader">
                    <h4>Add a New Book</h4>
                </div>
                <div className="form">
                    <Formik
                        initialValues={{ bookName: '', authorName: '', bookCategory: {category:'',minAge:''}, quantity: '' }}
                        onSubmit={values => HandleSubmit(values)}
                        
                        
                    >
                        {() => (
                            <Form>
                                <div >
                                    <Field type='text' className="fieldInputBox" name='bookName' placeholder='Book Name' />
                                </div>
                                <div >
                                    <Field type='text' className="fieldInputBox" name='authorName' placeholder='AuthorName' />
                                </div>
                                <div >
                                    <Field type='text' className="fieldInputBox" name='bookCategory.category' placeholder='Book Category' />
                                </div>
                                <div >
                                    <Field type='number' className="fieldInputBox" name='bookCategory.minAge' placeholder='Minimum Age' />
                                </div>
                                <div >
                                    <Field type='number' className="fieldInputBox" name='quantity' placeholder='Quantity' />
                                </div>
                                <div className="SubmitBtn">
                                    <button type="submit">Add Book</button>
                                </div>

                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    )
}

export default AddBooks;