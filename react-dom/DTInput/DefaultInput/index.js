import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

/**
 * Class representing a DefaultInput.
 * @author julia.sklyar@drivetribe.com
 */

const DefaultInput = ({ error, valid, disabled, className, ...restProps }) => {
  const InputClass = classNames({
    [styles.defaultInput]: true,
    [styles.error]: error,
    [styles.valid]: valid,
    [styles.disabled]: disabled,
    className,
  });

  return (
    <input
      className={InputClass}
      {...restProps}
    />
  );
};

DefaultInput.propTypes = {
  type: PropTypes.string.isRequired,
  error: PropTypes.boolean,
  valid: PropTypes.boolean,
  disabled: PropTypes.boolean,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default DefaultInput;
