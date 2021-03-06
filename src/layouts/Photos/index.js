import PropTypes from "prop-types"
import React from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import CarouselImages from "components/CarouselImages"
import Content from "components/Content"
import Page from "layouts/Page"
import Title from "components/Title"

const Photos = ({body, head, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Breadcrumb head={head} />
      {body &&
        <Content childrenIsText>
          <BodyContainer>
            {body}
          </BodyContainer>
        </Content>
      }
      <Content>
        {head.gallery &&
          head.gallery.map((gallery, i) => {
            const theme = i % 2 === 0 ? "yellow" : "green"
            return (
              <div key={i}>
                {gallery.title &&
                  <Title id={gallery.title} theme={theme} />
                }
                <CarouselImages images={gallery.images} theme={theme} />
              </div>
            )
          })
        }
      </Content>
    </Page>
  )
}

Photos.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default Photos
