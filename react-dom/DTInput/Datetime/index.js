import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a DatetimeInput.
 * @author radu.ciocan@drivetribe.com
 */

const DatetimeInput = (props) => (
  <DefaultInput
    type="datetime"
    {...props}
  />
);

export default DatetimeInput;
