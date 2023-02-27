import React, { useCallback } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUserRegisterRequest } from '../reduxsaga/actions';
import { Btn, FieldBox1 } from './Styles';
import { AlterOption, Button, ErrorMessageDiv, FieldBox, LabelDate } from '../AdminView/AVStyles';

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
                            
                            <FieldBox className='LRforminput' id='username' type='text' name='username' placeholder='UserName' />
                            <ErrorMessageDiv name='username' component='span'/>
                     
                            <FieldBox className='LRforminput' id='password' type='password' name='password' placeholder='Password' />
                            <ErrorMessage name='password' />
                

                            <FieldBox className='LRforminput' id='phonenumber' type='number' name='phoneNumber' placeholder='PhoneNumber' />
                            <ErrorMessage name='phonenumber' />
                     

                            <FieldBox className='LRforminput' id='emailid' type='email' name='emailId' placeholder='EmailId' />
                            <ErrorMessage name='emailid' />
                  

                            <FieldBox className='LRforminput' id='gender' type='gender' name='sex' placeholder='Gender' />
                            <ErrorMessage name='gender' />
                      

                            <FieldBox className='LRforminput' id='address' type='text' name='hometown' placeholder='Address' />
                            <ErrorMessage name='address' />
                            <div>
                            <LabelDate>DOB : &nbsp;</LabelDate>
                            <FieldBox className='LRforminput'  type='date' name='dob' />
                            <ErrorMessage name='dob' />
                            </div>
                        <Button type='submit' className="LRformsubmitR">Register</Button><span><AlterOption onClick={() => setFlag(false)} >Login</AlterOption></span>
                    </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm;