import { AgGridReact } from "ag-grid-react";
import { ErrorMessage, Field } from "formik";
import styled from "styled-components";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const FormContainer = styled.div`
position: relative;
top:20%;
left: 15%;
height: 450px;
&.popup{
    border:none;
}


`
export const FormHeader = styled.div`
// text-align: center;
    margin: 30px;
`
export const FieldBox = styled(Field)`
width: 300px;
    margin: 5px;
    position: relative;
    left:5%;
    border: 1px solid #ebe3e3;
    padding: 5px;
  &.popupinput{
    width: 100%;
  }
  &.LRforminput{
 
width: 50%;
  }
`
export const Button = styled.button`
position: relative;
left:5%;
margin-top: 40px;
width: 310px;
background-color: #134ee3;
color: white;
border: 1px solid #134ee3;
padding: 5px;
cursor:pointer;
&.addBtn{
  margin-top: 60px;
  margin-left:900px;
  width:150px;
}
&.popupsubmit{
    width:100%
}
&.LRformsubmit{
    width:50%
}
&.LRformsubmitR{
  width:52%;
  margin-top:10px
}

`
export const AButton = styled.button`
height: 30px;
    border: none;
    background-color: green;
    color: white;
    width: 80px;
    margin: 5px;
    cursor:pointer;

    &.Rbutton{
        background-color: red;
        margin-left:20px
    }
`
export const AlterOption = styled.a`

cursor:pointer;
color:blue;
margin-left:30px
// margin-right:-30px
`
export const ErrorMessageDiv = styled(ErrorMessage)`
color:red;
margin-left:12px
`
export const LabelDate = styled.label`
margin-left:-40px

`
//DataTable styling

export const TableHeader = styled.h3`
text-align: center;
    padding: 20px;
    position:fixed;
    left:45%;

   
`
export const DataTableDiv = styled.div`
  position: fixed;
  top: 30%;
  left: 20%;
  height: 393px;
  width: 1000px;
  overflow: auto;

  .ag-theme-alpine .ag-header-container .ag-header-cell-label  .ag-header-cell-text{
    color: red;
  }

`
export const StyledAgGridReact = styled(AgGridReact)`
.ag-theme-alpine.ag-header{
    color:red
}
`