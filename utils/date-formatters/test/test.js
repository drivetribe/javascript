import chai from 'chai';
import {
  SECOND_DURATION,
  MINUTE_DURATION,
  HOUR_DURATION,
  DAY_DURATION,
  MONTH_DURATION,
  YEAR_DURATION,
  relativeDate,
  convertSecondsToDuration
} from '../src';

const { expect } = chai;

describe('relativeDate()', () => {
  it('should return a date, relative to the present moment, in plain text', () => {
    const now = new Date();
    const rightNow = now.getTime();

    const halfSecondAgo = rightNow - (SECOND_DURATION / 2);
    expect(relativeDate(halfSecondAgo)).to.equal('Just now');

    const secondAgo = rightNow - (SECOND_DURATION);
    expect(relativeDate(secondAgo)).to.equal('Just now');

    const halfMinuteAgo = rightNow - (MINUTE_DURATION / 2);
    expect(relativeDate(halfMinuteAgo)).to.equal('Just now');

    const minuteAgo = rightNow - (MINUTE_DURATION);
    expect(relativeDate(minuteAgo)).to.equal('1 min ago');

    const fiveMinutesAgo = rightNow - (MINUTE_DURATION * 5);
    expect(relativeDate(fiveMinutesAgo)).to.equal('5 mins ago');

    const oneHourAgo = rightNow - (HOUR_DURATION);
    expect(relativeDate(oneHourAgo)).to.equal('1 hour ago');

    const halfDayAgo = rightNow - (DAY_DURATION / 2);
    expect(relativeDate(halfDayAgo)).to.equal('12 hours ago');

    const dayAgo = rightNow - (DAY_DURATION);
    expect(relativeDate(dayAgo)).to.equal('1 day ago');

    const tenDaysAgo = rightNow - (DAY_DURATION * 10);
    expect(relativeDate(tenDaysAgo)).to.equal('10 days ago');

    const oneMonthAgo = rightNow - (MONTH_DURATION);
    expect(relativeDate(oneMonthAgo)).to.equal('1 month ago');

    const elevenMonthsAgo = rightNow - (MONTH_DURATION * 11.1);
    expect(relativeDate(elevenMonthsAgo)).to.equal('11 months ago');

    const oneYearAgo = rightNow - (YEAR_DURATION);
    expect(relativeDate(oneYearAgo)).to.equal('1 year ago');

    const threeYearsAgo = rightNow - (YEAR_DURATION * 3.3);
    expect(relativeDate(threeYearsAgo)).to.equal('3 years ago');
    // omg shoot me
  });
});

describe('convertSecondsToDuration()', () => {
  it('should convert a time, given in seconds, to a [HH:M]M:SS format', () => {
    expect(convertSecondsToDuration(HOUR_DURATION / 1000 + 60 + 1)).to.equal('1:01:01');
    expect(convertSecondsToDuration(9)).to.equal('0:09');
    expect(convertSecondsToDuration(60)).to.equal('1:00');
    expect(convertSecondsToDuration(90)).to.equal('1:30');
    expect(convertSecondsToDuration(60 * 10)).to.equal('10:00');
    expect(convertSecondsToDuration(HOUR_DURATION / 1000)).to.equal('1:00:00');
    expect(convertSecondsToDuration(HOUR_DURATION / 1000 + 60)).to.equal('1:01:00');
    expect(convertSecondsToDuration((HOUR_DURATION / 1000) * 500)).to.equal('500:00:00');
  });
});
