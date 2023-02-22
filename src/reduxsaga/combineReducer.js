import { combineReducers } from "@reduxjs/toolkit";
import { AVReducer } from "./reducers";


const rootReducer=combineReducers(
    {
      AdminView:AVReducer
    }
)
export default rootReducer;