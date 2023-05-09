import { LOADARTICLES, LOADARTICLES_SUCCESS, LOADCOUNTARTICLES, LOADCOUNTARTICLES_SUCCESS, LOADARTICLES_FAILURE, LOADPAGINATEDDATAS, LOADPAGINATEDDATAS__SUCCESS, LOADPAGINATEDDATAS_FAILURE } from "../types/types"

const initialState = {
   articles: [],
   start: false,
   countOfArticles: 0
}


const articleReducers = (state=initialState, action) => {
   switch (action.type) {
      case LOADARTICLES:
         const started = true;
         return {
            ...state,
            start: started
         }
      case LOADARTICLES_SUCCESS:
         const articles = action.payload;
         const start = false
         return {
            ...state,
            start,
            articles
         }
      case LOADCOUNTARTICLES_SUCCESS:
         let count = action.payload
         return {
            ...state,
            countOfArticles:count
         }
      case LOADPAGINATEDDATAS: 
         return {
            ...state,
            start: true
         }
      case LOADPAGINATEDDATAS__SUCCESS:
         let paginatedArticles = action.payload;
         return {
            ...state,
            start: false,
            articles: paginatedArticles
         }
      default: 
         return state
   }
}

export default articleReducers