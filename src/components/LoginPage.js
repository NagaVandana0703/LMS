import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { loadTokenRequest } from "../reduxsaga/actions";
import { Btn, FieldBox1, FlexContainer, FlexContainerDiv } from "./Styles";

const Loginform = ({ path, dispatch, navigate }) => {
    console.log('c')
    return (
        <>
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={values => {
                    const errors = {};
                    for (let key in values) {
                        if (!values[key])
                            errors[key] = 'Required'
                    }
                    return errors;
                }}
                onSubmit={(values) => {
                    console.log(values);
                    dispatch(loadTokenRequest(values))
                    navigate(`${path}`)

                }}
            >
                {() => (
                    <Form >
                        <FieldBox1>
                            <Field id='username' type='text' name='username' placeholder='UserName' />
                            <ErrorMessage name="username" />
                        </FieldBox1>
                        <FieldBox1>
                            <Field id='password' type='password' name='password' placeholder='Password' />
                            <ErrorMessage name="password" />
                        </FieldBox1>
                        <Btn type="submit">Login</Btn>
                    </Form>
                )}
            </Formik>
        </>
    )
}

const LoginPage = () => {

    const [flag, setFlag] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const token = localStorage.getItem('authtoken')

    return (
        <div>
            <FlexContainer>
                <FlexContainerDiv>
                    <h4>Admin Login</h4>
                    <Loginform path='/Books' dispatch={dispatch} navigate={navigate} />
                </FlexContainerDiv>
                <FlexContainerDiv>
                    <h4>Customer Login</h4>
                    {flag ? <RegisterForm setFlag={setFlag} /> : <>
                        <Loginform path='/AllBooks' dispatch={dispatch} navigate={navigate} />
                    </>}
                    {flag ? '' : <p>New User?<a onClick={() => setFlag(true)} id='registerBtn'>Register</a></p>}
                </FlexContainerDiv>
            </FlexContainer>
        </div>
    )
}

export default LoginPage;