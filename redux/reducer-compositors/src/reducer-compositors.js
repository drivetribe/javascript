/**
 * Given a key/value map of reducers, where the key is an action type,
 * will return a new reducer. This new reducer will take the `type` of
 * a provided action, look for it in `map`, and fire that reducer if present.
 * If no reducer is found, it will return the current state.
 * @param  {object}
 * @return {reducer}
 */
export function createReducerFromMap(map) {
  return function (state, action) {
    return (map[action.type]) ? map[action.type](state, action) : state;
  };
}

/**
 * Given any number of reducers, will return a new reducer.
 * This new reducer will loop through each of the given reducers,
 * firing each one in turn until a new state is generated.
 * @param  {...reducers} reducers List of reducers
 * @return {reducer}               New reducer
 */
export function composeReducers(...reducers) {
  const numReducers = reducers.length;

  return function (state, action) {
    let newState = state;

    for (let i = 0; i < numReducers; i++) {
      newState = reducers[i](state, action);

      if (newState !== state) {
        return newState;
      }
    }

    return state;
  }
}
