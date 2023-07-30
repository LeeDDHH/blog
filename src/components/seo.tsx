"use strict"
/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql, PageProps } from "gatsby"

type DataProps = {
  description?: string
  lang?: string
  meta?: {
    name?: string
    property?: string
    content: string
  }[]
  title?: string
}

const SEO: React.FC<DataProps> = ({ description, lang, meta, title }) => {
  const { site }: GatsbyTypes.SEOQuery = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          title
          description
          social {
            twitter
          }
        }
      }
    }
  `)

  const metaDescription = description || site?.siteMetadata?.description
  const defaultTitle = site?.siteMetadata?.title
  const metaProps = [
    {
      name: `description`,
      content: metaDescription || "",
    },
    {
      property: `og:title`,
      content: title || "",
    },
    {
      property: `og:description`,
      content: metaDescription || "",
    },
    {
      property: `og:type`,
      content: `website`,
    },
    {
      name: `twitter:card`,
      content: `summary`,
    },
    {
      name: `twitter:creator`,
      content: site?.siteMetadata?.social?.twitter || ``,
    },
    {
      name: `twitter:title`,
      content: title || "",
    },
    {
      name: `twitter:description`,
      content: metaDescription || "",
    },
  ]

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : undefined}
      meta={metaProps}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  // meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO
