import React from 'react';
import Input from '../Input';

const PasswordInput = (props) => (
  <Input
    type="password"
    placeholder="Password"
    {...props}
  />
);

export default PasswordInput;
