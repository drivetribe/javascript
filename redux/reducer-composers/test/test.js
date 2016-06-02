import chai from 'chai';
import {
  composeReducers,
  createReducerFromMap
} from '../src/reducer-composers';

const { expect } = chai;

const EXAMPLE_ACTION_A = 'a';
const EXAMPLE_ACTION_B = 'b';
const EXAMPLE_ACTION_C = 'c';
const createActionA = () => ({ type: EXAMPLE_ACTION_A });
const createActionB = () => ({ type: EXAMPLE_ACTION_B });

describe('composeReducers()', () => {
  
  it ('should return a new reducer that calls each provided reducer in order', () => {
    const reducer = composeReducers([() => EXAMPLE_ACTION_A, () => EXAMPLE_ACTION_B]);

    expect(reducer(EXAMPLE_ACTION_A)).to.equal(EXAMPLE_ACTION_B);
    expect(reducer(EXAMPLE_ACTION_B)).to.equal(EXAMPLE_ACTION_A);
    expect(reducer(EXAMPLE_ACTION_C)).to.equal(EXAMPLE_ACTION_A);
  });

});

describe('createReducerFromMap()', () => {

  it('should return a new reducer that calls the correct reducer according to the provided map', () => {

    const reducerMap = {
      [EXAMPLE_ACTION_A]: () => EXAMPLE_ACTION_A,
      [EXAMPLE_ACTION_B]: () => EXAMPLE_ACTION_B
    };

    expect(createReducerFromMap(reducerMap)({}, createActionA())).to.equal(EXAMPLE_ACTION_A);
    expect(createReducerFromMap(reducerMap)({}, createActionB())).to.equal(EXAMPLE_ACTION_B);
  });

});
