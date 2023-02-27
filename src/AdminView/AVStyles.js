import { AgGridReact } from "ag-grid-react";
import { Field } from "formik";
import styled from "styled-components";
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';

export const FormContainer = styled.div`
position: relative;
top:20%;
left: 15%;
border: 2px solid #eee;
width: 55%;
height: 400px;
&.popup{
    border:none;
}


`
export const FormHeader=styled.div`
text-align: center;
    margin: 30px;
`
export const FieldBox=styled(Field)`
width: 600px;
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
export const Button=styled.button`
position: relative;
left:5%;
margin-top: 20px;
width: 610px;
background-color: #134ee3;
color: white;
border: 1px solid #134ee3;
padding: 5px;
cursor:pointer;
&.popupsubmit{
    width:100%
}
&.LRformsubmit{
    width:30%
}

`
export const AButton=styled.button`
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

//DataTable styling

export const TableHeader=styled.h3`
text-align: center;
    padding: 20px;
    position:fixed;
    left:45%;

   
`
export const DataTable = styled.div`
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
export const StyledAgGridReact=styled(AgGridReact)`
.ag-theme-alpine.ag-header{
    color:red
}
`