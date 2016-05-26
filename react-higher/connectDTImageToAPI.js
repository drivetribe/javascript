import React, { Component, PropTypes } from 'react';
import omit from 'lodash/omit';

const connectDTImageToApi = (DTImageComponent) => {
  const DTImageContainer = class extends Component {
    constructor(props) {
      super(props);
      const { width, height } = this.props.data;
      const ratio = parseFloat(width / height).toFixed(2);

      this.state = { width, height, ratio };
    }

    componentWillMount() {
      let { width, height } = this.props;
      const { ratio } = this.state;

      if (width && !height) height = parseFloat(width / ratio);

      if (!width && height) width = parseFloat(height * ratio);

      if (width && height) this.setState({ width, height });
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

  DTImageContainer.propTypes = {
    data: PropTypes.shape({
      source: PropTypes.string.isRequired,
      width: PropTypes.number,
      height: PropTypes.number,
    }),
    width: PropTypes.number,
    height: PropTypes.number,
  };

  return DTImageContainer;
};

export default connectDTImageToApi;
