import { GET_LATEST } from "../actions";

const latestReducer = (state = {}, action) => {
  switch (action.type) {
    case `${GET_LATEST}`:
      return {};
    case `${GET_LATEST}_REJECTED`:
      return {};
    case `${GET_LATEST}_FULFILLED`:
      return action.payload;
    default:
      return state;
  }
};

export default latestReducer;
