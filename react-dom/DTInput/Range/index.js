import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a RangeInput.
 * @author radu.ciocan@drivetribe.com
 */

const RangeInput = (props) => (
  <DefaultInput
    type="range"
    placeholder="Range"
    {...props}
  />
);

export default RangeInput;
