
import { allbooks, allusers, issuereq, issues } from "./jsondata"
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
export const loadAdminRegisterRequest=(obj)=>{  
    return{
        type:REDUCER_OPERATIONS.LOAD_ADMIN_REGISTER_REQUEST,
        payload:obj,
        link:'adminRequest',
        success:REDUCER_OPERATIONS.LOAD_ADMIN_REGISTER_SUCCESS

    }
}

export const approveUserRegisterAction=(id,status)=>{
    return{
        type:REDUCER_OPERATIONS.LOAD_APPROVE_USER_REQUEST,
        // payload1:id,
        // payload2:status,
        link:`userRequestStatus?userid=${id}&responseStatus=${status}`,
        success: REDUCER_OPERATIONS.LOAD_APPROVE_USER_SUCCESS
    }
}

export const loadUserByNameRequest=(uname)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_USER_BY_NAME_REQUEST,
        link:`user/${uname}`,
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

//CVView
export const loadissueBookRequest=(bookid,userid)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_ISSUE_BOOK_REQUEST,
        // payload1:bookid,
        // payload2:userid,
        link:`issueBook/?bookid=${bookid}&userid=${userid}`,
        success:REDUCER_OPERATIONS.LOAD_ISSUE_BOOK_SUCCESS

    }
}
export const loadgetAllBookIssuesRequest=()=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_GET_ALLBOOK_ISSUES_REQUEST,
        link:'getAllIssues',
        success:REDUCER_OPERATIONS.LOAD_GET_ALLBOOK_ISSUES_SUCCESS,
        dummydata:issues

    }
}
export const loadAddResponseRequest=(issueid,resStatus)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_ADD_RESPONSE_REQUEST,
        link:`addResponse?issueId=${issueid}&responseStatus=${resStatus}`,
        success:REDUCER_OPERATIONS.LOAD_ADD_RESPONSE_SUCCESS,
        // payload1:issueid ,
        // payload2:resStatus

    }
}
export const loadgetApprovedBooksRequest=()=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_GET_APPROVEDBOOKS_REQUEST,
        link:'getApprovedIssues',
        success:REDUCER_OPERATIONS.LOAD_GET_APPROVEDBOOKS_SUCCESS,
        dummydata:issuereq

    }
}
export const loadreturnBookRequest=(issueid)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_RETURN_BOOK_REQUEST,
        // payload1:issueid,
        link:`returnBook?issueId=${issueid}`,
        success:REDUCER_OPERATIONS.LOAD_RETURN_BOOK_SUCCESS

    }
}
export const loadgetOverDueRequest=()=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_GET_OVERDUE_REQUEST,
        link:'allOverdue',
        success:REDUCER_OPERATIONS.LOAD_GET_OVERDUE_SUCCESS,
      

    }
}

export const loadgetCategoryRequest=()=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_CATEGORY_REQUEST,
        link:'category',
        success:REDUCER_OPERATIONS.LOAD_CATEGORY_SUCCESS,
    
    }
}
export const loaddeleteCategoryRequest=(id)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_DELETE_CATEGORY_REQUEST,
        link:`deleteCategory/${id}`,
        success:REDUCER_OPERATIONS.LOAD_DELETE_CATEGORY_SUCCESS,
    
    }
}
export const loaddeleteBookRequest=(id)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_DELETE_BOOK_REQUEST,
        link:`deleteBook/${id}`,
        success:REDUCER_OPERATIONS.LOAD_DELETE_BOOK_SUCCESS,
    
    }
}
export const loadCategoryAgeRequest=(category,minAge)=>{
  
    return{
        type:REDUCER_OPERATIONS.LOAD_CATEGORYAGE_REQUEST,
        link:`searchBooksByCategory&Age/?category=${category}&minAge=${minAge}`,
        success:REDUCER_OPERATIONS.LOAD_CATEGORYAGE_SUCCESS,
    
    }
}