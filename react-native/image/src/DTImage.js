import React from 'react';
import { Image } from 'react-native';
import wrapImageInApiParser from '@drivetribe/react-higher-connect-image-to-api';

const DTImage = (props) => {
  const { src } = props;
  return <Image source={{ uri: src }} {...props}>{this.props.children}</Image>;
}

DTImage.propTypes = {
  src: React.PropTypes.string.isRequired,
  width: React.PropTypes.number.isRequired,
  height: React.PropTypes.number.isRequired,
};

export default wrapImageInApiParser(DTImage);
