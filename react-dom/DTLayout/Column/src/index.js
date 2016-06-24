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

  const columnClassNames = classNames({
    [styles.column]: true,
    [styles[`column-${unit}`]]: unit,
    [styles[`columnSm-${unitSm}`]]: unitSm,
    [styles[`columnMd-${unitMd}`]]: unitMd,
    [styles[`columnLg-${unitLg}`]]: unitLg,
    [styles[`columnXL-${unitXl}`]]: unitXl,
    [className]: className,
  });

  return (
    <div className={columnClassNames} {...restProps}>
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
