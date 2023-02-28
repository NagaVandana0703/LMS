import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import RegisterForm from "./RegisterForm";
import { useDispatch } from "react-redux";
import { loadTokenRequest ,loadUserByNameRequest} from "../reduxsaga/actions";
import {  FlexContainer, FlexContainerDiv } from "./Styles";
import { AlterOption } from "../AdminView/AVStyles";
import MainForm from "../Helpers/MainForm";

const Loginform = ({ path, dispatch, navigate }) => {
    const initialValues={ username: '', password: '' };
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
     localStorage.setItem('name',values.username)
                    dispatch(loadTokenRequest(values))
                    dispatch(loadUserByNameRequest(values.username))
                    navigate(`${path}`)   
    }
    const ArrFields=[
        {className:'LRforminput',type:'text',name:'username',placeholder:'UserName'},
        {className:'LRforminput',type:'password',name:'password',placeholder:'Password'},
    ]
    const subObj={className:'LRformsubmit',text:'Login'}
    return (
        <>
            <MainForm initialValues={initialValues} Validate={Validate} HandleSubmit={HandleSubmit} ArrFields={ArrFields} subObj={subObj} />
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
                    {flag ? '' : <p>New User?<AlterOption onClick={() => setFlag(true)} >Register</AlterOption></p>}
                </FlexContainerDiv>
            </FlexContainer>
        </div>
    )
}

export default React.memo(LoginPage);