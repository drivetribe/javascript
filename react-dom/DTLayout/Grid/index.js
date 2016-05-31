import React, { PropTypes } from 'react';
import styles from './styles.css';

const Grid = (props) => {
  const { children, ...restProps } = props;
  return (
    <div className={styles.grid} {...restProps}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
