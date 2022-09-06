"use strict"
import React, { useEffect } from "react"
import { Helmet } from "react-helmet"

const Iframely: React.FC = () => {
  // 古いブログ記事に遷移したときにもiframelyがロードされるように、rendering後loadする
  useEffect(() => {
    if (window && window.iframely) {
      window.iframely.load()
    }
  }, [])

  return (
    <Helmet>
      <script type="text/javascript" src="https://cdn.iframe.ly/embed.js" />
    </Helmet>
  )
}

export default Iframely
