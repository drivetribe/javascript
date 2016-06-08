export const SECOND_DURATION = 1000;
export const MINUTE_DURATION = SECOND_DURATION * 60;
export const HOUR_DURATION = MINUTE_DURATION * 60;
export const DAY_DURATION = HOUR_DURATION * 24;
export const YEAR_DURATION = DAY_DURATION * 365.25;
export const MONTH_DURATION = Math.floor(YEAR_DURATION / 12);

function generateTimeSinceLabel(msSinceNow, divisionDuration, label) {
  const readableTime = Math.floor(msSinceNow / divisionDuration);
  const pluralisedLabel = (readableTime === 1) ? label : label + 's';

  return `${readableTime} ${pluralisedLabel} ago`;
}

/**
 * Convert an ISO date string or timestamp into a date relative
 * to the current moment.
 * @param  {string} date ISO date or timestamp
 * @return {string}      Date relative from now, ie "2 days ago"
 */
export function relativeDate(date) {
  const msSinceNow = new Date() - new Date(date);

  if (msSinceNow >= YEAR_DURATION) {
    return generateTimeSinceLabel(msSinceNow, YEAR_DURATION, 'year');
  }

  if (msSinceNow >= MONTH_DURATION) {
    return generateTimeSinceLabel(msSinceNow, MONTH_DURATION, 'month');
  }

  if (msSinceNow >= DAY_DURATION) {
    return generateTimeSinceLabel(msSinceNow, DAY_DURATION, 'day');
  }

  if (msSinceNow >= HOUR_DURATION) {
    return generateTimeSinceLabel(msSinceNow, HOUR_DURATION, 'hour');
  }

  if (msSinceNow >= MINUTE_DURATION) {
    return generateTimeSinceLabel(msSinceNow, MINUTE_DURATION, 'min');
  }

  return 'Just now';
}
