import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import { FlexContainer, FlexContainerDiv, LoginHeader } from "./Styles";
import { AlterOption } from "../AdminView/AVStyles";
import Loginform from "./LoginForm";




const LoginPage = () => {
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);

    return (
        <div>
            <FlexContainer>
            <LoginHeader> Library Management System</LoginHeader>

                <FlexContainerDiv>
                                    <h4>Admin Login</h4>
                    {flag1 ?<> <RegisterForm setFlag={setFlag1} role='admin' /><AlterOption onClick={() => setFlag1(false)} >Login</AlterOption></> : <>
                        <Loginform role='ADMIN'/>
                    </>}<br/>
                    {flag1 ? '' : <p>New Admin?<AlterOption onClick={() => setFlag1(true)} >Register</AlterOption></p>}
                </FlexContainerDiv>
                <FlexContainerDiv>
                    <h4>Customer Login</h4>
                    {flag2 ?<> <RegisterForm setFlag={setFlag2} role='user' /> <AlterOption onClick={() => setFlag2(false)} >Login</AlterOption></>: <>
                        <Loginform role='USER'/>
                    </>}<br/>
                    {flag2 ? '' : <p>New User?<AlterOption onClick={() => setFlag2(true)} >Register</AlterOption></p>}
                </FlexContainerDiv>
            </FlexContainer>
        </div>
    )
}

export default LoginPage;