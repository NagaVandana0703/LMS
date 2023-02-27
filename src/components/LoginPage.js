import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { useDispatch } from "react-redux";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { loadTokenRequest } from "../reduxsaga/actions";
import { Btn, FieldBox1, FlexContainer, FlexContainerDiv } from "./Styles";
import { Button, FieldBox } from "../AdminView/AVStyles";

const Loginform = ({ path, dispatch, navigate }) => {
    const Validate=(values)=>{
        const errors = {};
                    for (let key in values) {
                        if (!values[key])
                            errors[key] = 'Required'
                    }
                    return errors;
    }
    const HandleSubmit=(values)=>{
     console.log(values);
                    dispatch(loadTokenRequest(values))
                    navigate(`${path}`)   
    }
    return (
        <>
            <Formik
                initialValues={{ username: '', password: '' }}
                validate={Validate}
                onSubmit={HandleSubmit}
            >
                {() => (
                    <Form >
                        {/* <FieldBox1> */}
                            <FieldBox className='LRforminput' id='username' type='text' name='username' placeholder='UserName' />
                            <ErrorMessage name="username" />
                      
                            <FieldBox className='LRforminput' id='password' type='password' name='password' placeholder='Password' />
                            <ErrorMessage name="password" />
                    
                        <Button  className="LRformsubmit" type="submit">Login</Button>
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

export default React.memo(LoginPage);