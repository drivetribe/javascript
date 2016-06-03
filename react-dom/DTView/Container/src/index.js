import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

/**
 * Class representing a container.
 * @author olivier.colonna@drivetribe.com
 */
class Container extends Component {

  render() {
    const { children, vertical, horizontal, className } = this.props;
    const containerClass = classNames({
      [styles.container]: true,
      [styles.containerScrollY]: vertical,
      [styles.containerScrollX]: horizontal,
      [className]: className,
    });

    return (
      <div className={containerClass}>
        {children}
      </div>
    );
  }
}

Container.propTypes = {
  children: PropTypes.node.isRequired,
  vertical: PropTypes.bool,
  horizontal: PropTypes.bool,
  className: PropTypes.string,
};

export default Container;
