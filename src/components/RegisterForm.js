import React, { lazy, useCallback, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { loadAdminRegisterRequest, loadUserRegisterRequest } from '../reduxsaga/actions';
const MainForm = lazy(() => import('../Helpers/MainForm'));

const RegisterForm = ({ setFlag, role }) => {
    const dispatch = useDispatch()
    const initialValues = { username: '', password: '', phoneNumber: '', emailId: '', sex: '', hometown: '', dob: '' };
    const Validate = useCallback((values) => {
        const errors = {};
        for (let key in values) {
            if (!values[key])
                errors[key] = 'Required'
        }
        return errors;
    }, [])
    const HandleSubmit = useCallback((values) => {
        if (role === 'user')
            dispatch(loadUserRegisterRequest(values))
        else
            dispatch(loadAdminRegisterRequest(values))
        setFlag(false)
    }, [])
    const ArrFields = useMemo(()=>[
        { className: 'LRforminput', type: 'text', name: 'username', placeholder: 'UserName' },
        { className: 'LRforminput', type: 'password', name: 'password', placeholder: 'Password' },
        { className: 'LRforminput', type: 'number', name: 'phoneNumber', placeholder: 'PhoneNumber' },
        { className: 'LRforminput', type: 'email', name: 'emailId', placeholder: 'EmailId' },
        { className: 'LRforminput', type: 'text', name: 'sex', placeholder: 'Gender' },
        { className: 'LRforminput', type: 'text', name: 'hometown', placeholder: 'Address' },
        { className: 'LRforminput', type: 'date', name: 'dob', placeholder: 'Date Of birth' },
    ],[])
    const subObj = { className: 'LRformsubmitR', text: 'Register' }
    return (
        <MainForm initialValues={initialValues} Validate={Validate} HandleSubmit={HandleSubmit} ArrFields={ArrFields} subObj={subObj} />
    )
}

export default RegisterForm;