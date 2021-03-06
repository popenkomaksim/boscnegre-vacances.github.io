import PropTypes from "prop-types"
import React, {Component} from "react"
import classNames from "classnames"

import styles from "./index.css"

import {getUrl} from "utils/urls"

class Image extends Component {
  constructor() {
    super()

    this.state = {
      loaded: false,
    }

    this.handleLoaded = this.handleLoaded.bind(this)
  }

  handleLoaded() {
    this.setState({
      loaded: true
    })
  }

  getUrl() {
    return this.props.src
  }

  getResizeUrl() {
    const {metadata: {pkg}} = this.context
    const {defaultWidth, src} = this.props
    const options = [
      `w_${defaultWidth}`,
      "q_70",
    ]

    return `${getUrl("cloudinary_fetch")}/${options.join(",")}/${pkg.homepage}${src}`
  }

  getSrc() {
    return process.env.NODE_ENV === "production"
      ? this.getResizeUrl()
      : this.getUrl()
  }

  getSrcSet() {
    const {metadata: {pkg}} = this.context
    const {sizes, src} = this.props

    if (process.env.NODE_ENV === "production") {
      return sizes
        .map(size =>
          `${getUrl("cloudinary_fetch")}/w_${size},q_70/${pkg.homepage}${src} ${size}w`
        )
        .join(", ")
    }

    return null
  }

  render() {
    const {loaded} = this.state
    const {alt, className} = this.props
    return (
      <div className={classNames(styles.wrapper, className)}>
        <img
          className={classNames(styles.image, loaded && styles.image_loaded)}
          src={this.getSrc()}
          srcSet={this.getSrcSet()}
          sizes="100vw"
          alt={alt}
          onLoad={this.handleLoaded}
        />
      </div>
    )
  }
}

Image.contextTypes = {
  metadata: PropTypes.object.isRequired,
}

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  className: PropTypes.string,
  defaultWidth: PropTypes.oneOf(["256", "512", "1024", "2048"]),
  sizes: PropTypes.array,
  src: PropTypes.string.isRequired,
}

Image.defaultProps = {
  defaultWidth: "512",
  sizes: ["256", "512", "1024"],
}

export default Image
