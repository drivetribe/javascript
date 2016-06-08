import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

/**
 * Class representing a DefaultInput.
 * @author julia.sklyar@drivetribe.com
 */

class DefaultInput extends Component {
  constructor(props) {
    super(props);
    this.handleOnChange = this.handleOnChange.bind(this);
    this.state = { value: props.value };
  }

  handleOnChange(event) {
    const value = event.target.value;
    this.setState({ value });
    if (this.props.handleOnChange) {
      this.props.handleOnChange(value);
    }
  }

  render() {
    const { error, valid, disabled, className, value, ...restProps } = this.props;
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
        onChange={this.handleOnChange}
        value={this.state.value}
        {...restProps}
      />
    );
  }
}


DefaultInput.propTypes = {
  type: PropTypes.string.isRequired,
  error: PropTypes.bool,
  valid: PropTypes.bool,
  disabled: PropTypes.bool,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  handleOnChange: PropTypes.func
};

export default DefaultInput;
