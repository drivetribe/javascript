import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a DefaultInput.
 * @author julia.sklyar@drivetribe.com
 * @extends DefaultInput
 */

const PasswordInput = (props) => (
  <DefaultInput
    type="password"
    placeholder="Password"
    {...props}
  />
);

export default PasswordInput;
