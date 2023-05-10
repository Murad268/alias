import { COLLABARATORSDDATAS, COLLABARATORSDDATAS__SUCCESS, COLLABARATORSDDATAS_FAILURE } from "../types/types";

const initialState = {
   collabarators: []
}

const collabaratorReducer = (state = initialState, action) => {
   switch(action.type) {
      case COLLABARATORSDDATAS__SUCCESS:
         return {
            ...state,
            collabarators: action.payload
         }
      default:
         return state  
   }
}

export default collabaratorReducer