import { ErrorMessage, Field, Formik ,Form} from "formik";
import React from "react";
// import { useNavigate } from "react-router-dom";
import styled from "styled-components";


const LoginForm=()=>{
    
    //  const Formik=styled.div`
    //  text-align:center;
    //  border:2px solid bllack;
    //  padding:10px;
    //  `
    

    return(

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
                  onSubmit={(e,values)=>{ e.preventDefault();console.log(values);}}
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
                        

                    </Form>
                )}
            </Formik>
       

    )
}
export default LoginForm;