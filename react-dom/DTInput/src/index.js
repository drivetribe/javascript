import React, { PropTypes } from 'react';
import styles from './styles.css';
import classnames from 'classnames';

const DTInput = (props) => {
  let className = styles.default;

  if (props.error) className = styles.error;

  if (props.valid) className = styles.valid;

  if (props.disabled) className = styles.disabled;

  className = classnames(className, props.className);

  switch (props.type) {
    case 'password':
      return (<input
        className={className}
        placeholder="Password"
        {...props}
      />);
    case 'email':
      return (<input
        className={className}
        placeholder="Email"
        {...props}
      />);
    default:
      return (
        <input
          className={className}
          {...props}
        />);
  }
};

DTInput.propTypes = {
  type: PropTypes.string,
  error: PropTypes.boolean,
  valid: PropTypes.boolean,
  disabled: PropTypes.boolean,
  className: PropTypes.string,
};

export default DTInput;
