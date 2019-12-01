import axios from "axios";
import { GET_ERRORS, SET_MATCHES } from "./types";

export const fetchData = ()=>{
    return{type: 'FETCH_DATA',}
};

// Login - Get User Token
export const getMatches = () => dispatch => {
    axios
      .get("/api/matches")
      .then(res => {
        dispatch(setMatches(res.data));
      })
      .catch(err =>
        dispatch({
          type: GET_ERRORS,
          payload: err
        })
      );
  };
  
  // Set logged in user
  export const setMatches = data => {
    return {
      type: SET_MATCHES,
      payload: data
    };
  };