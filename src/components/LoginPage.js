import React, {  useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import './style.css';

import {  useDispatch, useSelector } from "react-redux";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { loadTokenRequest } from "../reduxsaga/actions";

const LoginPage = () => {

    const [flag, setFlag] = useState(false);
    const dispatch=useDispatch();
    const navigate = useNavigate();
    // const t=useSelector(state=>state.AdminView)
    // const token=t.tokendata;
    // console.log(token)
   
    const token=localStorage.getItem('authtoken')
    

    return (
        <div>
            <div className="flexContainer">

                <div className="loginForm">
                    <h4>Admin Login</h4>
                    <Formik
                        initialValues={{ username: '', password: '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.username) {
                                errors.username = 'Required';
                            }
                            if (!values.password) {
                                errors.password = 'Required'
                            }
                            return errors;
                        }}
                        onSubmit={(values) => {
                            console.log(values);
                            dispatch(loadTokenRequest(values))
                            navigate('/Books')

                        }}
                    >
                        {() => (
                            <Form >
                                <div className="inputBox">

                                    <Field id='username' type='text' name='username' placeholder='UserName' />
                                    <ErrorMessage name="username" />
                                </div>
                                <div className="inputBox">

                                    <Field id='password' type='password' name='password' placeholder='Password' />
                                    <ErrorMessage name="password" />
                                </div>
                                <div className="btn">
                                    <button type="submit">Login</button>
                                </div>

                            </Form>
                        )}
                    </Formik>

                </div>

                <div className="registerForm">
                    <h4>Customer Login</h4>
                    {flag ? <RegisterForm setFlag={setFlag} /> : <>
                        <Formik
                            initialValues={{ username: '', password: '' }}
                            validate={values => {
                                const errors = {};
                                if (!values.username) {
                                    errors.username = 'Required';
                                }
                                if (!values.password) {
                                    errors.password = 'Required'
                                }
                                return errors;
                            }}
                            onSubmit={(values) => { 
                                console.log(values); 
                                dispatch(loadTokenRequest(values))
                                navigate('/AllBooks')
                            }}
                        >
                            {() => (
                                <Form >
                                    <div className="inputBox">

                                        <Field id='username' type='text' name='username' placeholder='UserName' />
                                        <ErrorMessage name="username" />
                                    </div>
                                    <div className="inputBox">

                                        <Field id='password' type='password' name='password' placeholder='Password' />
                                        <ErrorMessage name="password" />
                                    </div>
                                    <div className="btn">
                                        <button type="submit" >Login</button>
                                    </div>

                                </Form>
                            )}
                        </Formik>

                    </>}
                    {flag ? '' : <p>New User?<a onClick={() => setFlag(true)} id='registerBtn'>Register</a></p>}
                </div>
            </div>
        </div>
    )
}

export default LoginPage;