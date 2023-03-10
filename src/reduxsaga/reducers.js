
import {REDUCER_OPERATIONS } from "./StringConstants";



const initialState={
    loading: false,
    error: '',
    userRegReqResponse:'',
    userdata:'',
    allbooksdetailsdata: [],
    allusersdata:[],
    addbookdata:[],
    addcategorydata:[],
    category:[],
    getallbookissues:[],
    getapprovedbooks:[],
    getoverduebooks:[],
    getcategoryagebooks:[],
    addressuccess:'',
    returnsuccess:'',
  
};
export function AVReducer(state = initialState, action) {
    
   switch (action.type) {
    
        case REDUCER_OPERATIONS.LOAD_USERS_LOADING: {
            return {
                ...state,
                loading: true,
                error:''
            };
        }

        case REDUCER_OPERATIONS.LOAD_USER_REGISTER_SUCCESS: {
            return {
                ...state,
                userRegReqResponse: action.data,
                loading: false
            }
        }

        case REDUCER_OPERATIONS.LOAD_ALL_BOOKS_DETAILS_SUCCESS: {
            return {
                ...state,
                allbooksdetailsdata: action.data,
                loading: false
            }
        }
        case REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_SUCCESS: {
            return {
                ...state,
                allusersdata: action.data,
                loading: false
            }
        }
        case REDUCER_OPERATIONS.LOAD_ADD_BOOK_SUCCESS: {
            return {
                ...state,
                addbookdata: action.data,
                loading: false
            }
        }
        case REDUCER_OPERATIONS.LOAD_ADD_CATEGORY_SUCCESS: {
            return {
                ...state,
                allcategorydata: action.data,
                loading: false
            }
        }
        // case REDUCER_OPERATIONS.LOAD_ADD_RESPONSE_SUCCESS: {
        //     return {
        //         ...state,
        //         addressuccess: action.data,
        //         loading: false
        //     }
        // }
        case REDUCER_OPERATIONS.LOAD_RETURN_BOOK_SUCCESS: {
          
            return {
                ...state,
                returnsuccess: action.data,
                loading: false
            }
        }

        case REDUCER_OPERATIONS.LOAD_GET_ALLBOOK_ISSUES_SUCCESS: {
    
            const newarr=[];
            for(let obj of action.data){
                if(obj.responseStatus!=='APPROVED')
                    newarr.push(obj)
            }
            
            return {
                ...state,
                getallbookissues: newarr,
                loading: false
            }
        }
        case REDUCER_OPERATIONS.LOAD_GET_APPROVEDBOOKS_SUCCESS: {
            return {
                ...state,
                getapprovedbooks: action.data,
                loading: false
            }
        }
        case REDUCER_OPERATIONS.LOAD_GET_OVERDUE_SUCCESS: {
            
            return {
                ...state,
                getoverduebooks: action.data,
                loading: false
            }
        }
        case REDUCER_OPERATIONS.LOAD_CATEGORY_SUCCESS: {
            
            return {
                ...state,
                category: action.data,
                loading: false
            }
        }
        // case REDUCER_OPERATIONS.LOAD_CATEGORYAGE_SUCCESS: {
            
        //     return {
        //         ...state,
        //         getcategoryagebooks: action.data,
        //         loading: false
        //     }
        // }
        case REDUCER_OPERATIONS.LOAD_USERS_ERROR: {
            return {
                ...state,
                loading: false,
                error: action.error
            };
        }
      default:
         return state;
    }
   
}