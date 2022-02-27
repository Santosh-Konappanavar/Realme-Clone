import {
  GET_DATA,
  GET_DATA_SUCCESS
 
} from "./actionTypes.js";

const init = {
  homeData: {
    data: [],
  }
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_DATA:
      return {
        ...store,
        homeData: {
          ...store.homeData,
          data: payload,
        },
      };
      case GET_DATA_SUCCESS:
        return {
          ...store,
          homeData: {
            ...store.homeData,
            data: payload,
          },
        };
        
    
    default:
      return { ...store };
  }
};

export const additem=[];
export const additems = (state=additem,action)=>{
    switch(action.type){
        case "ADD_ITEM": 
        return[
            ...state,
            action.payload
        ]
     
      case "DELETE_ITEM":
          return state = state.filter((x)=>{
              return x.id!==action.payload.id
          })
       
        default:
            return state;
         
    }
}
