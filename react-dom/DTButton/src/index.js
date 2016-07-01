import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

/**
 * class Button is a simple button component with disabled & active calss
 * @author olivier.colonna@drivetribe.com
 */
class Button extends Component {
  constructor(props) {
    super(props);
    this.onClickButton = this.onClickButton.bind(this);
  }

  onClickButton() {
    if (this.props.disabled) {
      return;
    }

    this.props.onClick();
  }

  render() {
    const {
      className,
      active,
      disabled,
      primary,
      success,
      error,
      warning,
      secondary,
      children
    } = this.props;
    const buttonClass = classNames({
      [styles.buttonDefault]: true,
      [styles.button]: true,
      [styles.primary]: primary,
      [styles.success]: success,
      [styles.error]: error,
      [styles.warning]: warning,
      [styles.secondary]: secondary,
      [styles.active]: active,
      [styles.disabled]: disabled,
      [className]: className
    });

    return (
      <button className={buttonClass} onClick={this.onClickButton}>
        { children }
      </button>
    );
  }
}

Button.propTypes = {
  active: PropTypes.bool,
  disabled: PropTypes.bool,
  onClick: PropTypes.func
};

Button.defaultProps = {
  active: false,
  disabled: false
};

export default Button;
