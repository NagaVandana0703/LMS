import React from "react";
import { Formik, Form, ErrorMessage } from "formik";
import { Button, FieldBox, LabelDate } from "../AdminView/AVStyles";



const MainForm = ({ initialValues, HandleSubmit, Validate, ArrFields, subObj }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={Validate}
      onSubmit={HandleSubmit}
    >
      {() => (
        <Form>
          {ArrFields.map((field) => (
            <>
              {field.type === 'date' ? <>
                <LabelDate>DOB:</LabelDate>
                <FieldBox className={field.className ? field.className : ''} type={field.type} name={field.name} />
                <ErrorMessage name={field.name} />
              </> :
                <>
                  <FieldBox className={field.className ? field.className : ''} type={field.type} name={field.name} placeholder={field.placeholder} />
                  <ErrorMessage name={field.name} />
                </>}

            </>
          ))}
          <Button className={subObj.className ? subObj.className : ''} type="submit">{subObj.text}</Button>
        </Form>
      )}
    </Formik>
  );
};

export default MainForm;
