import axios from "axios";

export const LOGIN_START = "LOGIN_START";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const login = creds => dispatch => {
  dispatch({ type: LOGIN_START });
  return axios
    .post("https://jump-tracker.herokuapp.com/users/login", creds)
    .then(res => {
      localStorage.setItem("token", res.data);
      dispatch({ type: LOGIN_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
