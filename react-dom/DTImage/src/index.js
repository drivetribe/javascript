import React from 'react';
import wrapImageInApiParser from '@drivetribe/react-higher-wrap-image-in-api-parser';

const DTImage = (props) => (
  <img
    {...props}
    role="presentation"
  />
);

DTImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};

export default wrapImageInApiParser(DTImage);
