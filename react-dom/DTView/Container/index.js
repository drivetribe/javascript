import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './container.css'

/**
 * Class representing a container.
 * @author olivier.colonna@drivetribe.com
 * @extends Component
 */
class Container extends Component {

  render() {
    const { children, direction } = this.props;
    const { dtContainer, dtContainerScrollX, dtContainerScrollY } = styles;
    const containerCls = classNames({
      dtContainer: true,
      dtContainerScrollY: (direction === 'vertical'),
      dtContainerScrollX: (direction === 'horizontal')
    });

    return (
      <div className={containerCls}>
        {children}
      </div>
    );
  }
}

Container.propTypes = {
  children: React.PropTypes.node.isRequired,
  direction: React.PropTypes.oneOf([
    'vertical', 'horizontal'
  ])
};

export default Container;
