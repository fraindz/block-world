import { GET_TRANSACTION } from "../actions";

const txReducer = (state = {}, action) => {
  switch (action.type) {
    case `${GET_TRANSACTION}_REJECTED`:
      return {};
    case `${GET_TRANSACTION}_FULFILLED`:
      return action.payload;
    default:
      return state;
  }
};

export default txReducer;
