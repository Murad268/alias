import { combineReducers } from "redux";
import articleReducers from "./articlesReducer";
import collabaratorReducer from "./collabaratorReducers";
const rootReducer = combineReducers({
   articleReducers,
   collabaratorReducer
})

export default rootReducer