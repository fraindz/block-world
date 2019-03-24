import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import blockReducer from "./blockReducer";
import txReducer from "./txReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  tx: txReducer,
  block: blockReducer
});

export default rootReducer;
