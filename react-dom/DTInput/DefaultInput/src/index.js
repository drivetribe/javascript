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
    this.handleChangeInput = this.handleChangeInput.bind(this);
    this.state = { value: props.value };    
  }

  handleChangeInput(ev) {
    const value = ev.target.value;
    this.setState({ value });
    if(this.props.onVauelChange) {
      this.props.onVauelChange(value);
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
        onChange={this.handleChangeInput}
        value={this.state.value}
        {...restProps}
      />
    );
  }
}


DefaultInput.propTypes = {
  type: PropTypes.string.isRequired,
  error: PropTypes.boolean,
  valid: PropTypes.boolean,
  disabled: PropTypes.boolean,
  className: PropTypes.string,
  placeholder: PropTypes.string,
};

export default DefaultInput;
