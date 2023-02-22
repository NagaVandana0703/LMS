import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './PopupForm.css';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';



const PopupForm = ({ setShowPopup, handleClose }) => {

  return (
    <div>
      <div className="popup">
        <div className="popup_inner">
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
              <Form >
                <div className="form-group">
                  <label htmlFor="bookName">Book Name:</label>
                  <Field type="text" name="bookName" />
                  <ErrorMessage name="bookName" component="div" />
                </div>
                <div id='dates'>
                  <div className="form-group">
                    <label htmlFor="issueDate">Issue Date:</label>
                    <Field type="date" name="issueDate" />
                    <ErrorMessage name="issueDate" component="div" />
                  </div>
                  <div className="form-group" id='returnDate'>
                    <label htmlFor="returnDate">Return Date:</label>
                    <Field type="date" name="returnDate" />
                    <ErrorMessage name="returnDate" component="div" />
                  </div>
                </div>
                <button type="submit" disabled={isSubmitting}>
                  Submit
                </button>
              </Form>
            )}
          </Formik>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
