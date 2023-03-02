import React, { useCallback } from "react";
import MainForm from "../Helpers/MainForm";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Loginform = () => {
    const navigate = useNavigate();
    const initialValues = { username: '', password: '' };
    const Validate =useCallback((values) => {
        const errors = {};
        for (let key in values) {
            if (!values[key])
                errors[key] = 'Required'
        }
        return errors;
    },[])
    const HandleSubmit = async (values, actions) => {
        localStorage.setItem('name', values.username)
        axios.get(`http://localhost:8081/user/${values.username}`)
            .then((response) => {
                localStorage.setItem('user_details', JSON.stringify(response.data[0]))
                const user = JSON.parse(localStorage.getItem('user_details'))
                axios.post('http://localhost:8081/authenticate', values)
                    .then((response) => {
                        localStorage.setItem('authtoken', response.data.token)
                        { user.role === 'ADMIN' ? navigate('/AddBooks') : navigate('/AllBooks') }
                    })
                    .catch(() => {
                        alert('Admin Approval is in pending!')
                        actions.resetForm()
                    })
            })
            .catch(() => {
                alert('No Account Found')
                actions.resetForm()
            })
    }
    const ArrFields = [
        { className: 'LRforminput', type: 'text', name: 'username', placeholder: 'UserName' },
        { className: 'LRforminput', type: 'password', name: 'password', placeholder: 'Password' },
    ]
    const subObj = { className: 'LRformsubmit', text: 'Login' }
    return (
        <MainForm initialValues={initialValues} Validate={Validate} HandleSubmit={HandleSubmit} ArrFields={ArrFields} subObj={subObj} />
    )
}

export default Loginform;