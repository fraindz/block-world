import { fetchApi } from "../utils";

const GET_TRANSACTION = "GET_TRANSACTION";
const GET_BLOCK = "GET_BLOCK";
const GET_LATEST = "GET_LATEST";
const SEARCH_PENDING = "SEARCH_PENDING";
const SEARCH_SUCCESSFULL = "SEARCH_SUCCESSFULL";
const SEARCH_FAILED = "SEARCH_FAILED";

const getTransaction = hash => ({
  type: GET_TRANSACTION,
  payload: fetchApi(`https://blockchain.info/rawtx/${hash}?cors=true`)
});

const getBlock = hash => ({
  type: GET_BLOCK,
  payload: fetchApi(`https://blockchain.info/rawblock/${hash}?cors=true`)
});

const getLatest = hash => ({
  type: GET_LATEST,
  payload: fetchApi(`https://blockchain.info/latestblock?cors=true`)
});

const searchSuccessful = response => ({
  type: SEARCH_SUCCESSFULL,
  payload: response
});

const searchFailed = response => ({
  type: SEARCH_FAILED,
  payload: response
});

const searchBlock = query => {
  return dispatch => {
    dispatch(getBlock(query))
      .then(() => dispatch(searchSuccessful({ searchType: "BLOCK" })))
      .catch(e => dispatch(searchFailed(e)));
  };
};

const search = query => {
  return dispatch => {
    dispatch({ type: SEARCH_PENDING, payload: { query } });
    dispatch(getTransaction(query))
      .then(() => dispatch(searchSuccessful({ searchType: "TX" })))
      .catch(() => dispatch(searchBlock(query)));
  };
};

export {
  search,
  getTransaction,
  getBlock,
  getLatest,
  GET_TRANSACTION,
  GET_BLOCK,
  GET_LATEST,
  SEARCH_PENDING,
  SEARCH_SUCCESSFULL,
  SEARCH_FAILED
};
