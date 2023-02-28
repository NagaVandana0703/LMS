import React, { useCallback } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadUserRegisterRequest } from '../reduxsaga/actions';
import { Btn, FieldBox1 } from './Styles';
import { AlterOption, Button, ErrorMessageDiv, FieldBox, LabelDate } from '../AdminView/AVStyles';
import MainForm from '../Helpers/MainForm';

const RegisterForm = ({ setFlag }) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const initialValues = { username: '', password: '', phoneNumber: '', emailId: '', sex: '', hometown: '', dob: '' };
    const Validate = useCallback((values) => {
   
        const errors = {};
        for (let key in values) {
            if (!values[key])
                errors[key] = 'Required'
        }

        return errors;
    },[])
    const HandleSubmit = ( values) => {
        console.log(values);
        const errors = {};
        // console.log(e);
        // const phoneNumLength = String(e.phonenumber)
        // if (phoneNumLength.length > 10) {
        //     console.log(phoneNumLength.length)
        //     errors.phonenum = 'Minimum length 10';
        // }
        dispatch(loadUserRegisterRequest(values))
        // e.preventDefault()
        navigate('/AllBooks')

    }
    const ArrFields=[
        {className:'LRforminput',type:'text',name:'username',placeholder:'UserName'},
        {className:'LRforminput',type:'password',name:'password',placeholder:'Password'},
        {className:'LRforminput',type:'number',name:'phoneNumber',placeholder:'PhoneNumber'},
        {className:'LRforminput',type:'email',name:'emailId',placeholder:'EmailId'},
        {className:'LRforminput',type:'text',name:'sex',placeholder:'Gender'},
        {className:'LRforminput',type:'text',name:'hometown',placeholder:'Address'},
        {className:'LRforminput',type:'date',name:'dob',placeholder:'Date Of birth'},
    ]
    const subObj={className:'LRformsubmitR',text:'Register'}
    return (
        <div>
        
            <MainForm initialValues={initialValues} Validate={Validate} HandleSubmit={HandleSubmit} ArrFields={ArrFields} subObj={subObj} /><span> <AlterOption onClick={() => setFlag(false)} >Login</AlterOption></span>
           
        </div>
    )
}

export default RegisterForm;