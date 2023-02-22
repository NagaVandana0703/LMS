import { REDUCER_OPERATIONS } from "./StringConstants"

//token generate on giving username,pwd for /authenticate post api
export const loadTokenRequest=(obj)=>{  
    return{
        type:REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_REQUEST,
        payload:obj

    }
}
 //on customer registration request--/userRequest post api
 export const loadUserRegisterRequest=(obj)=>{  
    return{
        type:REDUCER_OPERATIONS.LOAD_USER_REGISTER_REQUEST,
        payload:obj

    }
}
export const loadUserByNameRequest=(uname)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_REQUEST,
        payload:uname

    }
}

export const loadAllBooksRequest=()=>{
   
    return{
        type:REDUCER_OPERATIONS.LOAD_ALL_BOOKS_DETAILS_REQUEST
    }
}
export const loadAllUsersDetailsRequest=()=>{
   
    return{
        type:REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_REQUEST
    }
}
export const loadAddBookRequest=(obj)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_ADD_BOOK_REQUEST,
        payload:obj

    }
}
export const loadAddCategoryRequest=(obj)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_ADD_CATEGORY_REQUEST,
        payload:obj

    }
}
