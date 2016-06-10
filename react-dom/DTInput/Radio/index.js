import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a RadioInput.
 * @author radu.ciocan@drivetribe.com
 */

const RadioInput = (props) => (
  <DefaultInput
    type="radio"
    {...props}
  />
);

export default RadioInput;
