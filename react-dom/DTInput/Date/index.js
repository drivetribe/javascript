import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a DateInput.
 * @author radu.ciocan@drivetribe.com
 */

const DateInput = (props) => (
  <DefaultInput
    type="date"
    {...props}
  />
);

export default DateInput;
