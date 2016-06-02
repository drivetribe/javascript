import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

const Input = ({ errorCls, validCls, disabledCls, className }) => {
  const { defaultCls, error, valid, disabled } = styles;

  const InputClass = classNames({
    defaultCls: true,
    error: errorCls,
    valid: validCls,
    disabled: disabledCls
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
