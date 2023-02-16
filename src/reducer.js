import {
  USERNAME_FORM_SUBMITTED,
  USERS_FETCH_SUCCESS,
  USERS_FETCH_FAILURE,
} from "./actions";

const initialState = {
  loading: false,
  error: false,
  query: "",
  users: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case USERNAME_FORM_SUBMITTED:
      return {
        ...state,
        loading: true,
        error: false,
        query: action.value,
      };
    case USERS_FETCH_SUCCESS:
      return {
        ...state,
        error: false,
        loading: false,
        users: action.value,
      };
    case USERS_FETCH_FAILURE:
      return {
        ...state,
        error: true,
        loading: false,
        users: [],
      };
    default:
      return state;
  }
};

export default reducer;
