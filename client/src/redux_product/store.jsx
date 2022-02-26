import { createStore, applyMiddleware } from 'redux'; 
import thunk from 'redux-thunk'; 
import {rootReducers} from "./react_redux/index";
import {additems} from "./react_redux/reducer"

export const store = createStore(additems);
console.log(store)

