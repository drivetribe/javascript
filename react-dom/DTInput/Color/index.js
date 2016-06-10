import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a ColorInput.
 * @author radu.ciocan@drivetribe.com
 */

const ColorInput = (props) => (
  <DefaultInput
    type="color"
    {...props}
  />
);

export default ColorInput;
