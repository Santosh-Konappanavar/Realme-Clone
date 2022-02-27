import {combineReducers} from "redux";
import userReducer from "./userReducer/reducer";
import dataReducer from './dataReducer/reducer';


const rootReducer = combineReducers({
    user: userReducer,
    data: dataReducer
});

export default rootReducer;