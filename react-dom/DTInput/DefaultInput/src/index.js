import React, { PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

/**
 * Class representing a DefaultInput.
 * @author julia.sklyar@drivetribe.com
 */

const DefaultInput = () => {
  const { error, valid, disabled, className, ...restProps } = this.props;
  const inputClass = classNames({
    [styles.defaultInput]: true,
    [styles.error]: error,
    [styles.valid]: valid,
    [styles.disabled]: disabled,
    [styles.className]: className,
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
