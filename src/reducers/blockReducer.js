import { GET_BLOCK } from "../actions";

function getTotalValue(t = []) {
  return t.reduce(
    (p, c) => p + (c.prev_out ? c.prev_out.value : c.value || 0),
    0
  );
}

const blockReducer = (state = {}, action) => {
  switch (action.type) {
    case `${GET_BLOCK}_REJECTED`:
      return {};
    case `${GET_BLOCK}_FULFILLED`:
      const {
        hash,
        prev_block,
        next_block,
        time,
        n_tx,
        height,
        tx
      } = action.payload;
      const o = { hash, prev_block, next_block, time, n_tx, height };
      o.tx = tx.map(t => {
        const result = {};
        result.hash = t.hash;
        result.time = t.time;
        result.totalDr = getTotalValue(t.inputs);
        result.totalCr = getTotalValue(t.out);
        return result;
      });
      return o;
    default:
      return state;
  }
};

export default blockReducer;
