import React from "react";
import { Formik, Form, Field } from "formik";



const MainForm = ({ initialValues, HandleSubmit,Validate,ArrFields }) => {
  return (
    <Formik
      initialValues={initialValues}
      validate={Validate}
      onSubmit={HandleSubmit}
    >
      {(formik) => (
        <Form>
          {ArrFields.map((field) => (
            <div key={field.name}>
              <label htmlFor={field.name}>{field.label}</label>
              
                <Field type={field.type} name={field.name} />
              
              {formik.touched[field.name] && formik.errors[field.name] ? (
                <div className="error">{formik.errors[field.name]}</div>
              ) : null}
            </div>
          ))}
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default MainForm;
