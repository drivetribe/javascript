import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

const Input = (props) => {
  const { className } = props;
  const { defaultCls, error, valid, disabled } = styles;

  const InputClass = classNames({
    defaultCls: true,
    error: props.error,
    valid: props.valid,
    disabled: props.disabled,
    className
  });

  return (
    <input
      className={InputClass}
      {...props}
    />
  );
};

Input.propTypes = {
  type: PropTypes.string,
  error: PropTypes.boolean,
  valid: PropTypes.boolean,
  disabled: PropTypes.boolean,
  className: PropTypes.string,
};

export default Input;
