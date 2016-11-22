import React, {PropTypes} from "react"

import ImageLink from "components/ImageLink"
import Title from "components/Title"

const Offers = ({image, text, url}) => {
  return (
    <div>
      <Title id="titles.our_offers" theme="yellow" />
      <ImageLink
        image={image}
        text={text}
        url={url}
      />
    </div>
  )
}

Offers.propTypes = {
  image: PropTypes.shape({
    alt: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }),
  text: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default Offers
