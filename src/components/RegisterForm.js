import React from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import './style.css';
import { useDispatch } from 'react-redux';
import { loadUserRegisterRequest } from '../reduxsaga/actions';

const RegisterForm = ({setFlag}) => {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const initialValues = { username: '',password: '',phoneNumber:'',emailId: '', sex: '', hometown:'',dob: '' };
    const validate = (values) => {
        const errors = {};
        if (!values.username)
            errors.username= 'Required';
        if (!values.password)
            errors.password = 'Required';

        if (!values.phonenumber)
            errors.phonenumber = 'Required';
        const phoneNumLength=String(values.phonenumber)
        if(values.phonenumber&&phoneNumLength.length>10){
                console.log(phoneNumLength.length)
                errors.phonenum = 'Minimum length 10';
        }   
        if (!values.emailid)
            errors.emailid = 'Required';
        if (!values.gender)
            errors.gender = 'Required';  
        if (!values.address)
            errors.address= 'Required';
        if (!values.dob)
            errors.dob = 'Required';
        
        return errors;
    }
    const HandleSubmit = (e,values) => {
        console.log(values);
        const errors = {};
        console.log(e);
        const phoneNumLength=String(e.phonenumber)
        if(phoneNumLength.length>10){
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
                onSubmit={(values ) => HandleSubmit(values)}
            >
                {() => (
                    <Form >
                    <div className="inputBox">
                        
                        <Field id='username' type='text' name='username' placeholder='UserName'/>
                        <ErrorMessage  name='username' />
                    </div>
                    <div className="inputBox">
                        <Field id='password' type='password' name='password' placeholder='Password'/>
                        <ErrorMessage  name='password' />
                    </div>
                    <div className="inputBox">
                    
                        <Field id='phonenumber' type='number' name='phoneNumber' placeholder='PhoneNumber'/>
                        <ErrorMessage  name='phonenumber' />
                    </div>
                    <div className="inputBox">
                 
                        <Field id='emailid' type='email' name='emailId' placeholder='EmailId'/>
                        <ErrorMessage  name='emailid' />
                    </div>
                    <div className="inputBox">
                        
                        <Field id='gender' type='gender' name='sex'placeholder='Gender' />
                        <ErrorMessage  name='gender' />
                    </div>
                    <div className="inputBox">
                        
                        <Field id='address' type='text' name='hometown' placeholder='Address'/>
                        <ErrorMessage  name='address' />
                    </div>
                    <div className="inputBox">
                        <label>DOB : &nbsp;</label>
                        <Field id='dob' type='date' name='dob' />
                        <ErrorMessage  name='dob' />
                    </div>
                    <div className="btn">
                        <button type='submit'  className='regBtn'>Register</button><span><a onClick={()=>setFlag(false)}>Login</a></span>
                    </div>
                    <div>
                        <p></p>
                        </div>
                </Form>
                )}
            </Formik>
        </div>
    )
}

export default RegisterForm;