import axiosAuth from "../utils/axiosAuth";

export const COMPLETED_START = "COMPLETED_START";
export const COMPLETED_SUCCESS = "COMPLETED_SUCCESS";
export const COMPLETED_FAILURE = "COMPLETED_FAILURE";

export const completed = goal => dispatch => {
  console.log("input", goal);
  dispatch({ type: COMPLETED_START });
  axiosAuth()
    .put(`https://jump-tracker.herokuapp.com/goals/${goal.id}`, goal)
    .then(res => {
      console.log("res", res);
      dispatch({ type: COMPLETED_SUCCESS, payload: res.data });
    })
    .catch(err => console.log(err));
};
