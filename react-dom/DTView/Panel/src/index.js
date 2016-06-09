import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

/**
 * Class representing a container.
 * @author olivier.colonna@drivetribe.com
 */
class Panel extends Component {

  renderHeader() {
    if (!this.props.header) {
      return null;
    }

    return (
      <div className={styles.panelHeader}>
        {this.props.header}
      </div>
    );
  }

  renderFooter() {
    if (!this.props.footer) {
      return null;
    }

    return (
      <div className={styles.panelFooter}>
        {this.props.footer}
      </div>
    );
  }

  render() {
    const { children, className } = this.props;
    const panelClass = classNames({
      [styles.panel]: true,
      [styles.panelDefault]: true,
      [className]: className
    });

    return (
      <div className={panelClass}>
        {this.renderHeader()}
        <div className={styles.panelBody}>
          {children}
        </div>
        {this.renderFooter()}
      </div>
    );
  }
}

Panel.propTypes = {
  footer: PropTypes.node,
  header: PropTypes.node,
  className: PropTypes.string,
  children: PropTypes.node.isRequired
};

export default Panel;
