import axiosAuth from "../utils/axiosAuth";

export const EXERCISE_GET_START = "EXERCISE_GET_START";
export const EXERCISE_GET_SUCCESS = "EXERCISE_GET_SUCCESS";
export const EXERCISE_GET_FAILURE = "EXERCISE_GET_FAILURE";
export const exerciseGet = goalID => dispatch => {
  dispatch({ type: EXERCISE_GET_START });
  axiosAuth()
    .get(`https://jump-tracker.herokuapp.com/exercises/${goalID}`)
    .then(res => {
      dispatch({ type: EXERCISE_GET_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
