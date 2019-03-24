import { combineReducers } from "redux";
import searchReducer from "./searchReducer";
import blockReducer from "./blockReducer";
import txReducer from "./txReducer";
import latestReducer from "./latestReducer";

const rootReducer = combineReducers({
  search: searchReducer,
  tx: txReducer,
  block: blockReducer,
  latest: latestReducer
});

export default rootReducer;
