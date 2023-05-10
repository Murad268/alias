import { LOADARTICLES, LOADARTICLES_SUCCESS, LOADARTICLES_FAILURE, LOADCOUNTARTICLES, LOADCOUNTARTICLES_SUCCESS, LOADCOUNTARTICLES_FAILURE, LOADPAGINATEDDATAS, LOADPAGINATEDDATAS__SUCCESS, LOADPAGINATEDDATAS_FAILURE  } from "../types/types";

export function loadArticles() {
   return dispatch => {
     dispatch({ type: LOADARTICLES });
 
     fetch('https://itmuraddev.com/aliasserver/datas/getArticles.php')
       .then(response => response.json())
       .then(data => dispatch({
         type: LOADARTICLES_SUCCESS,
         payload: data
       }))
       .catch(error => dispatch({
         type: LOADARTICLES_FAILURE,
         payload: error.message
       }));
   };
 }


 export function loadCount() {
  return dispatch => {
    dispatch({ type: LOADCOUNTARTICLES });

    fetch('https://itmuraddev.com/aliasserver/datas/getCountOfArticles.php')
      .then(response => response.json())
      .then(data => dispatch({
        type: LOADCOUNTARTICLES_SUCCESS,
        payload: data
      }))
      .catch(error => dispatch({
        type: LOADCOUNTARTICLES_FAILURE,
        payload: error.message
      }));
  };

 }

export function loadPage(page) {
    return dispatch => {
      dispatch({ type: LOADPAGINATEDDATAS });
  
      fetch('https://itmuraddev.com/aliasserver/datas/getArticles.php?page='+page)
        .then(response => response.json())
        .then(data => dispatch({
          type: LOADPAGINATEDDATAS__SUCCESS,
          payload: data
        }))
        .catch(error => dispatch({
          type: LOADPAGINATEDDATAS_FAILURE,
          payload: error.message
        }));
    };
}



