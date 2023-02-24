import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { StyledButton, FormGroup, DateWrapper, DatesWrapper, PopupWrapper, PopupInnerWrapper } from "./CVStyles";
import "primeicons/primeicons.css";
import "primereact/resources/themes/lara-light-indigo/theme.css";
import "primereact/resources/primereact.css";
const PopupForm = ({ setShowPopup, handleClose }) => {
  return (
    <>
      <PopupWrapper>
        <PopupInnerWrapper>
          <h2>Issue Book</h2>
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

                <FormGroup>
                  <label htmlFor="bookName">Book Name:</label>
                  <Field type="text" name="bookName" />
                  <ErrorMessage name="bookName" />
                </FormGroup>
                <DatesWrapper>
                  <DateWrapper>
                    <FormGroup>
                      <label htmlFor="issueDate">Issue Date:</label>
                      <Field type="date" name="issueDate" />
                      <ErrorMessage name="issueDate" />
                    </FormGroup>
                  </DateWrapper>
                  <DateWrapper isReturnDate>
                    <FormGroup id='returnDate'>
                      <label htmlFor="returnDate">Return Date:</label>
                      <Field type="date" name="returnDate" />
                      <ErrorMessage name="returnDate" />
                    </FormGroup>
                  </DateWrapper>
                </DatesWrapper>
                <StyledButton type="submit" disabled={isSubmitting}>Submit</StyledButton>

              </Form>
            )}
          </Formik>
        </PopupInnerWrapper>
      </PopupWrapper>
    </>
  );
};

export default PopupForm;
