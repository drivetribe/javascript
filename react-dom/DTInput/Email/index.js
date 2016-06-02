import React from 'react';
import DefaultInput from '../DefaultInput';

/**
 * Class representing a DefaultInput.
 * @author julia.sklyar@drivetribe.com
 * @extends DefaultInput
 */

const EmailInput = (props) => (
  <DefaultInput
    type="email"
    placeholder="Email"
    {...props}
  />
);

export default EmailInput;
