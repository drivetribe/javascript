import React, { PropTypes } from 'react';
import styles from './styles.css';
import classNames from 'classnames';

const Grid = (props) => {
  const { children, className, ...restProps } = props;
  return (
    <div className={classNames(styles.grid, className)} {...restProps}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
};

export default Grid;
