import { Field, Form, Formik } from "formik";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";
import { FormC } from "../CustomerView/CVStyles";
import { loadAdminSearchFilterRequest, loadCategoryAgeRequest, loadCustomerSearchFilterRequest } from "../reduxsaga/actions";

const FilterForm=({initialValues,FieldsArr,role})=>{
    const dispatch=useDispatch();
    const Validate =useCallback( (values) => {
        const errors = {};
        for (let key in values) {
            if (!values[key])
                errors[key] = 'Required'
        }
        return errors;
    },[])
    const HandleSubmit = useCallback((values, actions) => {
        console.log(values)
        if(role==='customer')
            dispatch(loadCustomerSearchFilterRequest(values.search))
        if(role==='admin')
            dispatch(loadAdminSearchFilterRequest(values.search))
        if(role==='allbooks'){
            dispatch(loadCategoryAgeRequest(values.category,values.age))
        }   
        const errors = Validate(values)
         if (!Object.keys(errors).length) {
             actions.resetForm(); 
         }
     },[])
   
    return(
        <FormC>
                <Formik initialValues={initialValues} onSubmit={HandleSubmit}
                    validate={Validate}>
                    {() => (<Form>
                                {FieldsArr.map(field=><Field type={field.type} name={field.name} placeholder={field.placeholder}></Field>)}
                                <button type='submit'>Submit</button></Form>)}
                </Formik>
            </FormC>
    )
}
export default FilterForm;