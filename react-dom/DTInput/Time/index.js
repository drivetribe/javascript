import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a TimeInput.
 * @author radu.ciocan@drivetribe.com
 */

const TimeInput = (props) => (
  <DefaultInput
    type="time"
    {...props}
  />
);

export default TimeInput;
