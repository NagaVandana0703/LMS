import React, { useCallback } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUserRegisterRequest } from '../reduxsaga/actions';
import { Btn, FieldBox1 } from './Styles';

const RegisterForm = ({ setFlag }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const initialValues = { username: '', password: '', phoneNumber: '', emailId: '', sex: '', hometown: '', dob: '' };
    const validate = useCallback((values) => {
   
        const errors = {};
        for (let key in values) {
            if (!values[key])
                errors[key] = 'Required'
        }

        return errors;
    },[])
    const HandleSubmit = (e, values) => {
        console.log(values);
        const errors = {};
        console.log(e);
        const phoneNumLength = String(e.phonenumber)
        if (phoneNumLength.length > 10) {
            console.log(phoneNumLength.length)
            errors.phonenum = 'Minimum length 10';
        }
        dispatch(loadUserRegisterRequest(values))
        // e.preventDefault()
        navigate('/AllBooks')

    }

    return (
        <div>
            <Formik
                initialValues={initialValues}
                validate={(values) => validate(values)}
                onSubmit={(values) => HandleSubmit(values)}
            >
                {() => (
                    <Form >
                        <FieldBox1>
                            <Field id='username' type='text' name='username' placeholder='UserName' />
                            <ErrorMessage name='username' />
                        </FieldBox1>
                        <FieldBox1>
                            <Field id='password' type='password' name='password' placeholder='Password' />
                            <ErrorMessage name='password' />
                        </FieldBox1>
                        <FieldBox1>

                            <Field id='phonenumber' type='number' name='phoneNumber' placeholder='PhoneNumber' />
                            <ErrorMessage name='phonenumber' />
                        </FieldBox1>
                        <FieldBox1>

                            <Field id='emailid' type='email' name='emailId' placeholder='EmailId' />
                            <ErrorMessage name='emailid' />
                        </FieldBox1>
                        <FieldBox1>

                            <Field id='gender' type='gender' name='sex' placeholder='Gender' />
                            <ErrorMessage name='gender' />
                        </FieldBox1>
                        <FieldBox1>

                            <Field id='address' type='text' name='hometown' placeholder='Address' />
                            <ErrorMessage name='address' />
                        </FieldBox1>
                        <FieldBox1>
                            <label>DOB : &nbsp;</label>
                            <Field id='dob' type='date' name='dob' />
                            <ErrorMessage name='dob' />
                        </FieldBox1>
                        <Btn type='submit' className='regBtn'>Register</Btn><span><a onClick={() => setFlag(false)}>Login</a></span>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm;