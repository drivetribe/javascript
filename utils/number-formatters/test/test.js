import chai from 'chai';
import {
  approximate,
  roundToDecimalPlace
} from '../src';

const { expect } = chai;

describe('approximate()', () => {
  it('should accept both strings and numbers', () => {
    expect(approximate("0")).to.equal("0");
    expect(approximate(0)).to.equal("0");
  });

  it('should not approximate numbers under a thousand', () => {
    expect(approximate(100)).to.equal("100");
    expect(approximate(999)).to.equal("999");
  });

  it('should approximate numbers above 1000 and under 990000 to the closest thousand', () => {
    expect(approximate(1000)).to.equal("1K");
    expect(approximate(989999)).to.equal("990K");
  });

  it('should approximate numbers above 990000 to the closest million', () => {
    expect(approximate(990000)).to.equal("1M");
  });

  it('should round up to one decimal place and not show that decimal if it is a zero', () => {
    expect(approximate(1449)).to.equal("1.4K");
    expect(approximate(1450)).to.equal("1.5K");
    expect(approximate(10560000)).to.equal("10.6M");
    expect(approximate(10990000)).to.equal("11M");
  });
});

describe('roundToDecimalPlace()', () => {
  const TEST_NUMBER = 12.34567;

  it('should round a number to the given number of decimal places', () => {
    expect(roundToDecimalPlace(TEST_NUMBER, 1)).to.equal(12.3);
    expect(roundToDecimalPlace(TEST_NUMBER, 2)).to.equal(12.35);
  });
  
  it('should round to 2 decimal places by default', () => {
    expect(roundToDecimalPlace(TEST_NUMBER)).to.equal(12.35);
  });
});
