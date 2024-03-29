"use strict"
import React from "react"
import { graphql, PageProps } from "gatsby"

import Layout from "../components/layout"
import SearchConsole from "../components/searchConsole"
import SEOComponent from "../components/seo"

const NotFoundPage: React.FC<PageProps<GatsbyTypes.NotFoundPageQuery>> = ({
  data,
  location,
}) => {
  const siteTitle = data.site?.siteMetadata?.title ?? ""

  return (
    <Layout location={location} title={siteTitle}>
      <SearchConsole title="404: Not Found" />
      <SEOComponent title="404: Not Found" />
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
  query NotFoundPage {
    site {
      siteMetadata {
        title
      }
    }
  }
`
