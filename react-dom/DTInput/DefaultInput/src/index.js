import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

/**
 * Class representing a DefaultInput.
 * @author julia.sklyar@drivetribe.com
 */

const DefaultInput = (props) => {
  const { error, valid, disabled, className, ...restProps } = props;
  const inputClass = classNames({
    [styles.defaultInput]: true,
    [styles.error]: error,
    [styles.valid]: valid,
    [styles.disabled]: disabled,
    [className]: className,
  });

  return (
    <input
      className={inputClass}
      {...restProps}
    />
  );
};


DefaultInput.propTypes = {
  type: PropTypes.string.isRequired,
  error: PropTypes.bool,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

export default DefaultInput;
