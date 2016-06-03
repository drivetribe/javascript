import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a MonthInput.
 * @author radu.ciocan@drivetribe.com
 */

const MonthInput = (props) => (
  <DefaultInput
    type="month"
    {...props}
  />
);

export default MonthInput;
