import React from 'react'
import { Helmet } from 'react-helmet'

const SearchConsole = ({ title }) => {
  return (
    <Helmet
      title={title}
      meta={[
        {
          name: 'google-site-verification',
          content:
            'google-site-verification=6UDCWkc29RS3iz3cM5My90zC4EArgN-fwLnB4Cc3sy0',
        },
      ]}
    />
  )
}

export default SearchConsole
