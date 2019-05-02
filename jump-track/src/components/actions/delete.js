import axiosWithAuth from "../utils/axiosAuth";
export const DELETE_START = "DELETE_START";
export const DELETE_SUCCESS = "DELETE_SUCCESS";
export const DELETE_FAILURE = "DELETE_FAILURE";

export const deleteGoal = goalID => dispatch => {
  dispatch({ type: DELETE_START });
  axiosWithAuth()
    .delete(`https://jump-tracker.herokuapp.com/goals/${goalID}`)
    .then(res => {
      dispatch({ type: DELETE_SUCCESS, payload: res.data });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({ type: DELETE_FAILURE, payload: err.response });
    });
};
