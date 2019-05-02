import axiosAuth from "../utils/axiosAuth";

export const POST_START = "POST_START";
export const POST_SUCCESS = "POST_SUCCESS";
export const POST_FAILURE = "POST_FAILURE";
export const post = input => dispatch => {
  dispatch({ type: POST_START });
  axiosAuth()
    .post("https://jump-tracker.herokuapp.com/goals/", input)
    .then(res => {
      console.log(res);
      dispatch({ type: POST_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
