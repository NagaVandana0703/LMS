import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, FieldBox, LabelDate } from "../AdminView/AVStyles";



const MainForm = ({ initialValues, HandleSubmit,Validate,ArrFields,subObj }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={Validate}
      onSubmit={HandleSubmit}
    >
      {(formik) => (
        <Form>
          {ArrFields.map((field) => (
            
            <>
            {field.type==='date'?<div>

             <LabelDate>DOB:</LabelDate>
              
                <FieldBox className={field.className?field.className:''} type={field.type} name={field.name} />
                <ErrorMessage name={field.name}/>
              </div>:
              <>
                <FieldBox className={field.className?field.className:''} type={field.type} name={field.name} placeholder={field.placeholder} />
                <ErrorMessage name={field.name}/>
              </>}
              
            </>
          ))}
          <Button className={subObj.className?subObj.className:'' } type="submit">{subObj.text}</Button>
        </Form>
      )}
    </Formik>
  );
};

export default MainForm;
