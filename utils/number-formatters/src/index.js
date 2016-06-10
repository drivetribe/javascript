const MILLION = 1000000;
const THOUSAND = 1000;
const MILLION_THRESHOLD = MILLION * 0.99;

/**
 * Round a number to the given number of decimal places
 * @param  {number} num     Number to round
 * @param  {number} roundTo Round to this many places (Default: 2)
 * @return {number}         Rounded number
 */
export function roundToDecimalPlace(num, roundTo = 2) {
  const factor = 10 * roundTo;
  return Math.round(num * factor) / factor;
}

/**
 * Convert a large number to a display-friendly approximation.
 * @param  {number||string} num Number to convert
 * @return {string} Approximated number
 */
export function approximate(num) {
  const parsedNum = (typeof num === 'string') ? parseInt(num, 10) : num;

  // Between 1,000 and 1,000,000
  if (parsedNum >= THOUSAND && parsedNum < MILLION_THRESHOLD) {
    return roundToDecimalPlace(parsedNum / THOUSAND, 1) + 'K';

  // Above 1,000,000
  } else if (parsedNum >= MILLION_THRESHOLD) {
    return roundToDecimalPlace(parsedNum / MILLION, 1) + 'M';
  }

  return `${parsedNum}`;
}
