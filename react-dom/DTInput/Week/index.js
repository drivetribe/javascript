import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a WeekInput.
 * @author radu.ciocan@drivetribe.com
 */

const WeekInput = (props) => (
  <DefaultInput
    type="week"
    {...props}
  />
);

export default WeekInput;
