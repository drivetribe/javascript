import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';
import styles from './styles.css';

/**
 * @author Olivier Colonna <olivier.colonna@drivetribe.com>
 * 
 * @class DTImage
 * @extends {Component}
 */
class DTImage extends Component {
  /**
   * Creates an instance of DTImage.
   * @param {object} props
   */
  constructor(props) {
    super(props);
    this.onImageLoad = this.onImageLoad.bind(this);
    this.onImageError = this.onImageError.bind(this);
    this.state = {
      loaded: false,
      error: false
    }
  }

  /**
   * onImageLoad
   * set the state.loaded to true when the image.onload is triggered
   */
  onImageLoad() {
    this.setState({ loaded: true });
  }

  /**
   * onErrorImage
   * set the state.error to true when the image.onerror is triggered
   */
  onErrorImage() {
    this.setState({ error: true });
  }

  /**
   * render an image with props
   * @return {img} html img element
   */
  render() {
    const { error, loaded } = this.state;
    const { className, alt, height, width } = this.props;
    const rootClassName = classNames({
      [styles.defaultImageCls]: true,
      [styles.onImageError]: error,
      [styles.onImageLoaded]: loaded,
      [className]: className3
    });

    return (
      <img
        className={rootClassName}
        onLoad={this.onImageLoad}
        onError={this.onImageError}
        alt={alt}
        height={height}
        width={width}
        role="image"
        {...this.props}
      />
    );
  }
}

DTImage.propTypes = {
  onLoad: PropTypes.func,
  onError: PropTypes.func,
  alt: PropTypes.string,
  role: PropTypes.string,
  src: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
  height: PropTypes.number.isRequired,
};

export default DTImage;
