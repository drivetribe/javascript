import React, { PropTypes } from 'react';

const Grid = (props) => {
  const { children, ...restProps } = props;
  return (
    <div {...restProps}>
      {children}
    </div>
  );
};

Grid.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Grid;
