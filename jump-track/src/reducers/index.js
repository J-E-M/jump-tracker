import {
  LOGIN_START,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  REGISTER_START,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  FETCH_DATA_START,
  FETCH_DATA_SUCCESS,
  FETCH_DATA_FAILURE,
  POST_START,
  POST_SUCCESS,
  POST_FAILURE,
  DELETE_START,
  DELETE_SUCCESS,
  DELETE_FAILURE,
  COMPLETED_START,
  COMPLETED_SUCCESS,
  COMPLETED_FAILURE,
  EXERCISE_START,
  EXERCISE_SUCCESS,
  EXERCISE_FAILURE,
  EXERCISE_GET_START,
  EXERCISE_GET_SUCCESS,
  EXERCISE_GET_FAILURE
} from "../actions";

const initialState = {
  error: "",
  goals: [],
  loggingIn: false,
  signingUp: false,
  fetchingData: false,
  postingData: false,
  deletingGoal: false,
  completing: false,
  updatingExercise: false,
  gettingExercise: false
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case POST_START:
      return {
        ...state,
        error: "",
        posting: true
      };
    case POST_SUCCESS:
      return {
        ...state,
        goals: [...action.payload],
        posting: false
      };
    case POST_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    case FETCH_DATA_START:
      return {
        ...state,
        error: "",
        fetchingData: true
      };
    case FETCH_DATA_SUCCESS:
      return {
        ...state,
        fetchingData: false,
        goals: [...action.payload]
      };
    case FETCH_DATA_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    case COMPLETED_START:
      return {
        ...state,
        error: "",
        completing: true
      };
    case COMPLETED_SUCCESS:
      return {
        ...state,
        error: "",
        goals: [...action.payload]
      };
    case COMPLETED_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    case EXERCISE_START:
      return {
        ...state,
        error: "",
        updatingExercise: true
      };
    case EXERCISE_SUCCESS:
      return {
        ...state,
        error: "",
        updatingExercise: false,
        goals: [...action.payload]
      };
    case EXERCISE_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    case EXERCISE_GET_START:
      return {
        ...state,
        error: "",
        gettingExercise: true
      };
    case EXERCISE_GET_SUCCESS:
      return {
        ...state,
        error: "",
        gettingExercise: false,
        goals: [...action.payload]
      };
    case EXERCISE_GET_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    case DELETE_START:
      return {
        ...state,
        error: "",
        deletingGoal: true
      };
    case DELETE_SUCCESS:
      return {
        ...state,
        error: "",
        goals: [...action.payload],
        deletingGoal: false
      };
    case DELETE_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    case REGISTER_START:
      return {
        ...state,
        error: "",
        signingUp: true,
        loggingIn: false
      };
    case REGISTER_SUCCESS:
      return {
        ...state,
        error: "",
        signingUp: false
      };
    case REGISTER_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    case LOGIN_START:
      return {
        ...state,
        error: "",
        errorStatusCode: null,
        loggingIn: true
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        error: "",
        loggingIn: false
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        error: "try again"
      };
    default:
      return state;
  }
};

export default reducer;
