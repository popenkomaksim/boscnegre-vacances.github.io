import PropTypes from "prop-types"
import React from "react"
import {BodyContainer} from "phenomic"

import Breadcrumb from "components/Breadcrumb"
import Content from "components/Content"
import Page from "layouts/Page"
import AllServices from "components/Services"

const Services = ({body, head, ...props}) => {
  return (
    <Page {...props} head={head}>
      <Breadcrumb head={head} />
      <Content>
        <AllServices />
      </Content>
      {body &&
        <Content childrenIsText>
          <BodyContainer>
            {body}
          </BodyContainer>
        </Content>
      }
    </Page>
  )
}

Services.propTypes = {
  body: PropTypes.string,
  head: PropTypes.object.isRequired,
}

export default Services
