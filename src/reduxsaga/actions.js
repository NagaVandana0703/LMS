
import { allbooks, allusers } from "./jsondata"
import { REDUCER_OPERATIONS } from "./StringConstants"

//token generate on giving username,pwd for /authenticate post api
export const loadTokenRequest=(obj)=>{  
    return{
        type:REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_REQUEST,
        payload:obj,
        link:'authenticate',
        success:REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_SUCCESS

    }
}
 //on customer registration request--/userRequest post api
 export const loadUserRegisterRequest=(obj)=>{  
    return{
        type:REDUCER_OPERATIONS.LOAD_USER_REGISTER_REQUEST,
        payload:obj,
        link:'userRequest',
        success:REDUCER_OPERATIONS.LOAD_USER_REGISTER_SUCCESS

    }
}
export const loadUserByNameRequest=(uname)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_REQUEST,
        payload:uname,
        link:'username',
        success: REDUCER_OPERATIONS.LOAD_USER_BY_NAME_SUCCESS

    }
}

export const loadAllBooksRequest=()=>{
   
    return{
        type:REDUCER_OPERATIONS.LOAD_ALL_BOOKS_DETAILS_REQUEST,
        link:'book',
        success:REDUCER_OPERATIONS.LOAD_ALL_BOOKS_DETAILS_SUCCESS,
        dummydata:allbooks
    }
}

export const loadAllUsersDetailsRequest=()=>{
    return{
        type:REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_REQUEST,
        link:'user',
        success:REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_SUCCESS,
        dummydata:allusers
    }
}
export const loadAddBookRequest=(obj)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_ADD_BOOK_REQUEST,
        payload:obj,
        link:'saveBook',
        success:REDUCER_OPERATIONS.LOAD_ADD_BOOK_SUCCESS

    }
}
export const loadAddCategoryRequest=(obj)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_ADD_CATEGORY_REQUEST,
        payload:obj,
        link:'createCategory',
        success:REDUCER_OPERATIONS.LOAD_ADD_CATEGORY_SUCCESS

    }
}
