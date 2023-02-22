import { ErrorMessage, Field, Formik ,Form} from "formik";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { loadTokenRequest } from "../reduxsaga/actions";


const MainPageForm=()=>{
    //  const Formik=styled.div`
    //  text-align:center;
    //  border:2px solid bllack;
    //  padding:10px;
    //  `
    const navigate=useNavigate()
    const dispatch=useDispatch();
    const t=useSelector(state=>state.AdminView)
    // const t=useSelector(state=>state.AdminView)
    // const token=t.tokendata;
    // console.log(token)
   
    // localStorage.setItem('authtoken', token)

    return(
        <div className="">
            <Formik 
                initialValues={{username:'',password:''}}
                validate={values => {
                    const errors = {};
                    if (!values.username) {
                      errors.username = 'Required';
                    } 
                    if(!values.password){
                        errors.password='Required'
                    }
                    return errors;
                  }}
                  onSubmit={(values)=>{
                    console.log(values);

                    dispatch(loadTokenRequest(values));

                     navigate('/AllBooks')
                    
                }}
            >
                {()=>(
                    <Form >
                        <div className="inputBox">
                           
                            <Field id='username' type='text' name='username' placeholder='UserName' />
                            <ErrorMessage name="username" />
                        </div>
                        <div className="inputBox">
                            
                            <Field id='password' type='password' name='password'placeholder='Password'/>
                            <ErrorMessage name="password" />
                        </div>
                        <div className="btn">
                                    <button type="submit">Login</button>
                                </div>
                        

                    </Form>
                )}
            </Formik>
            </div>
       

    )
}
export default MainPageForm;