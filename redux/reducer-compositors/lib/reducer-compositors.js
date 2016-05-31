"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReducerFromMap = createReducerFromMap;
/**
 * Given a key/value map of reducers, where the key is an action type,
 * will return a new reducer. This new reducer will take the `type` of
 * a provided action, look for it in `map`, and fire that reducer if present.
 * If no reducer is found, it will return the current state.
 * @param  {object}
 * @return {reducer}
 */
function createReducerFromMap(map) {
  return function (state, action) {
    return map[action.type] ? map[action.type](state, action) : state;
  };
}