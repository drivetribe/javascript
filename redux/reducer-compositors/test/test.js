import chai from 'chai';
import { createReducerFromMap } from '../src/reducer-compositors';

const { expect } = chai;

const EXAMPLE_ACTION_A = 'a';
const EXAMPLE_ACTION_B = 'b';
const createActionA = () => ({ type: EXAMPLE_ACTION_A });
const createActionB = () => ({ type: EXAMPLE_ACTION_B });

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
