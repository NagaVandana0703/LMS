import { Field, Form, Formik } from "formik";
import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { ButtonC, FieldC, FormC } from "../CustomerView/CVStyles";
import { loadAdminSearchFilterRequest, loadAllBooksRequest, loadAllUsersDetailsRequest, loadCategoryAgeRequest, loadCustomerSearchFilterRequest } from "../reduxsaga/actions";

const FilterForm = ({ initialValues, FieldsArr, role }) => {
    const dispatch = useDispatch();
    let [F, setF] = useState(false);
    const Validate = useCallback((values) => {
        const errors = {};
        for (let key in values) {
            if (!values[key])
                errors[key] = 'Required'
        }
        return errors;
    }, [])
    const HandleSubmit = useCallback((values, actions) => {
        console.log(values);
        if (!F) {
            if (role === 'customer')
                dispatch(loadCustomerSearchFilterRequest(values.search))
            if (role === 'admin')
                dispatch(loadAdminSearchFilterRequest(values.search))
            if (role === 'allbooks') {
                dispatch(loadCategoryAgeRequest(values.category, values.age))
            }
        }

        console.log(F)
        if (F)
            actions.resetForm()
    }, [])
    const ClearFilterAction = useCallback(() => {
        F = true
        console.log(F)
        if (role === 'customer')
            dispatch(loadAllUsersDetailsRequest())
        if (role === 'admin')
            dispatch(loadAllUsersDetailsRequest())
        if (role === 'allbooks') {
            dispatch(loadAllBooksRequest())
        }

    }, [])

    return (
        <>
            <FormC>
                <Formik initialValues={initialValues} onSubmit={HandleSubmit}
                    validate={Validate}>
                    {() => (<Form>
                        {FieldsArr.map(field => <FieldC type={field.type} name={field.name} placeholder={field.placeholder}></FieldC>)}
                        <ButtonC type='submit' >Search</ButtonC><ButtonC style={{ marginLeft: '20px' }} onClick={ClearFilterAction} >Clear Filter</ButtonC></Form>)}
                </Formik>
                
            </FormC>

        </>
    )
}
export default FilterForm;