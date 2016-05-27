import React from 'react';
import Input from '../Input';

const EmailInput = (props) => {
  return (
    <Input
      type="email"
      placeholder="Email"
      {...props}
    />);
};

export default EmailInput;
