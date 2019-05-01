import axiosAuth from "../utils/axiosAuth";

export const EXERCISE_START = "EXERCISE_START";
export const EXERCISE_SUCCESS = "EXERCISE_SUCCESS";
export const EXERCISE_FAILURE = "EXERCISE_FAILURE";
export const exercise = (goalID, input) => dispatch => {
  dispatch({ type: EXERCISE_START });
  axiosAuth()
    .post(`https://jump-tracker.herokuapp.com/exercises/${goalID}`, input)
    .then(res => {
      console.log("exercise", res);
      dispatch({ type: EXERCISE_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
