import React, { PropTypes } from 'react';
import styles from './styles.css';
import classnames from 'classnames';

const Input = (props) => {
  let className = styles.default;

  if (props.error) className = styles.error;

  if (props.valid) className = styles.valid;

  if (props.disabled) className = styles.disabled;

  className = classnames(className, props.className);

  return (
    <input
      className={className}
      {...props}
    />);
};

Input.propTypes = {
  type: PropTypes.string,
  error: PropTypes.boolean,
  valid: PropTypes.boolean,
  disabled: PropTypes.boolean,
  className: PropTypes.string,
};

export default Input;
