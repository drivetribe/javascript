import React from 'react';
import Input from '../Input';

const EmailInput = (props) => (
  <Input
    type="email"
    placeholder="Email"
    {...props}
  />
);

export default EmailInput;
