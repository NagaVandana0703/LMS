import React, { useState } from "react";
import RegisterForm from "./RegisterForm";
import { FlexContainer, FlexContainerDiv } from "./Styles";
import { AlterOption } from "../AdminView/AVStyles";
import Loginform from "./LoginForm";




const LoginPage = () => {
    const [flag1, setFlag1] = useState(false);
    const [flag2, setFlag2] = useState(false);

    return (
        <div>
            <FlexContainer>
                <FlexContainerDiv>
                    <h4>Admin Login</h4>
                    {flag1 ? <RegisterForm setFlag={setFlag1} role='admin' /> : <>
                        <Loginform />
                    </>}
                    {flag1 ? '' : <p>New Admin?<AlterOption onClick={() => setFlag1(true)} >Register</AlterOption></p>}
                </FlexContainerDiv>
                <FlexContainerDiv>
                    <h4>Customer Login</h4>
                    {flag2 ? <RegisterForm setFlag={setFlag2} role='user' /> : <>
                        <Loginform />
                    </>}
                    {flag2 ? '' : <p>New User?<AlterOption onClick={() => setFlag2(true)} >Register</AlterOption></p>}
                </FlexContainerDiv>
            </FlexContainer>
        </div>
    )
}

export default React.memo(LoginPage);