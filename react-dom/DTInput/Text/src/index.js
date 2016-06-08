import React from 'react';
import DefaultInput from '@drivetribe/react-dom-default-input';

/**
 * Class representing a DefaultInput.
 * @author julia.sklyar@drivetribe.com
 * @extends DefaultInput
 */

const TextInput = (props) => (
  <DefaultInput type="text" {...props} />
);

export default TextInput;
