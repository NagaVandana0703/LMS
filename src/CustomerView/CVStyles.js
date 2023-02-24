import styled from "styled-components";

export const FormC=styled.div`

margin-top: 85px;
    margin-left: 115px;
`
export const StyledButton=styled.button`
   background-color: #007bff;
    color: #fff;
    border: none;
    padding: 10px 20px;
    border-radius: 5px;
    font-size: 14px;
    cursor: pointer;
    &:hover{
        background-color: #0069d9;
    }
    &:disabled{
         background-color: #ccc;
    cursor: not-allowed;
    }
    &:disabled:hover{
        background-color: #ccc;
    }
    `
export const FormGroup = styled.div`
  margin-bottom: 20px;
  display: flex;

  flex-direction: column;
  label {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    font-weight: 500;
  }
  .popup input[type="text"],input[type="date"] {
    width: 100%;
    padding: 10px;
    padding-right: 0px;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 14px;
  }
  `
export const DateWrapper = styled.div`
width: 50%;
margin-left: ${props => (props.isReturnDate ? '70px' : '0')};
`;
export const DatesWrapper = styled.div`
  display: flex;
  width: 100%;
`;
export const PopupWrapper = styled.div`
 position: relative;
    left: 15px;
    padding-top: 13px; 
    margin-top: 135px; 
    width: 85%;
    z-index: 100;
    background-color: white;
    height: 300px;
    border-bottom-right-radius: 6px;
     h2 {
    text-align: center;
  }
`;
export const PopupInnerWrapper = styled.div`

    width: 100%;
    height: 375px;
    /* border: 1px solid #D7D7D7; */
    border-bottom-right-radius: 6px;
    border-bottom-left-radius: 6px;
    padding-left: 72px;
    /* margin-top: -156px;
    margin-left: -500px; */
    padding-top: 7px;
    margin-top: -130px;
    overflow-y: hidden;
    overflow-x: hidden;
    align-items: center;
`;