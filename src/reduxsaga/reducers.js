import {REDUCER_OPERATIONS } from "./StringConstants";



const initialState={
    loading: false,
    error: '',

    tokendata:'',
    userRegReqResponse:'',
    userdata:'',
    allbooksdetailsdata: [],
    allusersdata:[],
    addbookdata:[],
    addcategorydata:[],

    getallbookissues:[],
    getapprovedbooks:[],
    getoverduebooks:[]
  
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

        case REDUCER_OPERATIONS.LOAD_AUTHENTICATE_TOKEN_SUCCESS: {
            localStorage.setItem('authtoken',action.data.token)
            return {
                ...state,
                tokendata: action.data,
                loading: false
            }
        }
        case REDUCER_OPERATIONS.LOAD_USER_REGISTER_SUCCESS: {
            return {
                ...state,
                userRegReqResponse: action.data,
                loading: false
            }
        }
        case REDUCER_OPERATIONS.LOAD_USER_BY_NAME_SUCCESS: {
            console.log(action.data[0])
            localStorage.setItem('user_details',JSON.stringify(action.data[0]))
            return {
                ...state,
                userdata: action.data[0],
                loading: false
            }
        }

        case REDUCER_OPERATIONS.LOAD_ALL_BOOKS_DETAILS_SUCCESS: {
            console.log(action.data)
            return {
                ...state,
                allbooksdetailsdata: action.data,
                loading: false
            }
        }
        case REDUCER_OPERATIONS.LOAD_ALL_USERS_DETAILS_SUCCESS: {
            console.log(action.data)
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