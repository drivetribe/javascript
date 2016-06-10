import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a CheckboxInput.
 * @author radu.ciocan@drivetribe.com
 */

const CheckboxInput = (props) => (
  <DefaultInput
    type="checkbox"
    {...props}
  />
);

export default CheckboxInput;
