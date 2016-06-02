# Reducer Compositors

Functions for compositing reducers. These functions are then composable with other reducers, for instance with Redux's `combineReducers`.

## Install

```js
npm install @drivetribe/reducer-compositors --save-dev
```

## Compositors

### Compose reducers

```js
composeReducers(reducers: array, defaultState: object);
```

When given an indefinite number of reducers, it will return a new reducer that calls each reducer in sequence until a new state is returned.

### Create reducer from map

```js
createReducerFromMap(map: object, defaultState: object);
```

When given a map of reducers, with action strings as keys, it will return a new reducer that calls the appropriate reducer when that action is received.

This approach should prevent the long string of `switch` statements common to reducers.

#### Example

```js
import { createStore } from 'redux';
import { createReducerFromMap } from 'reducer-compositors';

const ACTION_FOO = 'foo';
const ACTION_BAR = 'bar';

const reducerMap = {
  [ACTION_FOO]: (state, action) => { ...newState }
};

const store = createStore(createReducerFromMap(reducerMap));

store.dispatch({ type: ACTION_FOO }); // State is updated
store.dispatch({ type: ACTION_BAR }); // State is not updated
```
