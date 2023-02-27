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
            return {
                ...state,
                userdata: action.data,
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