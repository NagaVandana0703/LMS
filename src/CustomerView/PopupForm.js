import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
import { Button, FieldBox, FormContainer, FormHeader } from "../AdminView/AVStyles";
const PopupForm = ({ setShowPopup, handleClose }) => {
  return (
    <>
      <FormContainer className="popup">

          <FormHeader>
            <h3>Issue Book</h3>
            </FormHeader>
          <Formik
            initialValues={{ bookName: "", issueDate: "", returnDate: "" }}
            onSubmit={(values, { setSubmitting, resetForm }) => {
              console.log(values);
              setSubmitting(false);
              resetForm();
              setShowPopup(false);
            }}
          >
            {({ isSubmitting }) => (
              <Form>

                  <FieldBox className='popupinput' type="text" name="bookName" placeholder="Book Name" />
                  <ErrorMessage name="bookName" />

                  <label htmlFor="issueDate">Issue Date:</label>
                  <FieldBox className='popupinput' type="date" name="issueDate" />
                  <ErrorMessage name="issueDate" />
          
                  <label htmlFor="returnDate">Return Date:</label>
                  <FieldBox className='popupinput' type="date" name="returnDate" />
                  <ErrorMessage name="returnDate" />

                <Button className='popupsubmit' type="submit" disabled={isSubmitting}>Submit</Button>

              </Form>
            )}
          </Formik>
      </FormContainer>
    </>
  );
};

export default PopupForm;
