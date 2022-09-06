"use strcit"
import React from "react"

const ATag: React.FC<ATagProps> = ({ link, text, color }) => {
  const style = {
    color: `${color ? color : "white"}`,
    textDecoration: "none",
  }
  return (
    <a href={link} style={style} target="_blank" rel="noopener noreferrer">
      {text}
    </a>
  )
}

export default ATag
