import React, { PropTypes } from 'react';
import styles from './styles.css';
import classNames from 'classnames';

const Column = (props) => {
  const {
    children,
    unit,
    unitSm,
    unitMd,
    unitLg,
    unitXl,
    className,
    ...restProps,
  } = props;

  const jointClassNames = classNames(
    styles[`column-${unit}`],
    styles[`columnSm-${unitSm}`],
    styles[`columnMd-${unitMd}`],
    styles[`columnLg-${unitLg}`],
    styles[`columnXL-${unitXl}`],
    className
  );

  return (
    <div className={jointClassNames} {...restProps}>
      {children}
    </div>
  );
};

Column.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  unit: PropTypes.string.isRequired,
  unitSm: PropTypes.string,
  unitMd: PropTypes.string,
  unitLg: PropTypes.string,
  unitXl: PropTypes.string,
};

export default Column;
