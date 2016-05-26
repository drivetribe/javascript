import React, { Component, PropTypes } from 'react';
import omit from 'lodash/omit';

const wrapImageInApiParser = (DTImageComponent) => {
  class ImageApiParser extends Component {
    constructor(props) {
      super(props);
      let { width, height } = props.data;
      const ratio = parseFloat(width / height).toFixed(2);

      if (props.width && props.height) {
        width = props.width;
        height = props.height;
      }

      if (props.width && !props.height) {
        width = props.width;
        height = parseFloat(width / ratio);
      }

      if (!props.width && props.height) {
        height = props.height;
        width = parseFloat(height * ratio);
      }

      this.state = { width, height };
    }

    render() {
      const { width, height } = this.state;
      // TODO: Width and height params should added to image source
      const { source } = this.props.data;
      const props = omit(this.props, ['width', 'height', 'data']);
      return (
        <DTImageComponent src={source} width={width} height={height} {...props} />
      );
    }
  };

  ImageApiParser.propTypes = {
    data: PropTypes.shape({
      source: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    width: PropTypes.number,
    height: PropTypes.number,
  };

  return ImageApiParser;
};

export default wrapImageInApiParser;
