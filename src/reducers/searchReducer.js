import { SEARCH_PENDING, SEARCH_SUCCESSFULL, SEARCH_FAILED } from "../actions";

const searchReducer = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_PENDING:
      return { query: action.payload.query, loading: true };
    case SEARCH_SUCCESSFULL:
      return {
        query: state.query,
        success: true,
        loading: false,
        searchType: action.payload.searchType
      };
    case SEARCH_FAILED:
      return { query: state.query, loading: false, error: true };
    case `GET_TRANSACTION_FULFILLED`:
      return state;
    default:
      return state;
  }
};

export default searchReducer;
