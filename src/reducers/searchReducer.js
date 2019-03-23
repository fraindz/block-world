const searchReducer = (state = [], action) => {
  switch (action.type) {
    case "ACTM":
      console.log("Action ACTM caugth");
      return state;
    case `ACTM_PENDING`:
      console.log("Action ACTM pending");
      return state;
    case `ACTM_FULFILLED`:
      console.log("Action ACTM fulfilled");
      return state;
    default:
      return state;
  }
};

export default searchReducer;
