import { COLLABARATORSDDATAS, COLLABARATORSDDATAS__SUCCESS, COLLABARATORSDDATAS_FAILURE } from "../types/types";
export function loadCollabarators(page) {
   return dispatch => {
     dispatch({ type: COLLABARATORSDDATAS });
 
     fetch('https://itmuraddev.com/aliasserver/datas/getCollabarators.php')
       .then(response => response.json())
       .then(data => dispatch({
         type: COLLABARATORSDDATAS__SUCCESS,
         payload: data
       }))
       .catch(error => dispatch({
         type: COLLABARATORSDDATAS_FAILURE,
         payload: error.message
       }));
   };
 }