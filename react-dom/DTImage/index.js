import React from 'react';
import connectDTImageToApi from 'connectDTImageToApi';

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

export default connectDTImageToApi(DTImage);
