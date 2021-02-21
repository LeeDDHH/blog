/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

import ATag from "./ATag"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/kamo-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50, quality: 95) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
            facebook
          }
          subOutput {
            ywt
            todoList
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const subOutput = data.site.siteMetadata?.subOutput

  const avatar = data?.avatar?.childImageSharp?.fixed

  return (
    <div className="bio">
      {avatar && (
        <Image
          fixed={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <p>
          {author?.summary || null} <strong>{author.name}</strong>
          <br/>
          {` `}
          <AppealLink>
              { 
                social.twitter
                ? <TwitterBtn>
                    <ATag
                      link={`https://twitter.com/${social.twitter}`}
                      text="Twitter"
                    />
                  </TwitterBtn>
                : ``
              }
              { 
                social.twitter
                ? <FacebookBtn>
                    <ATag
                      link={`https://facebook.com/${social.facebook}`}
                      text="Facebook"
                    />
                  </FacebookBtn>
                : ``
              }
              { 
                subOutput.ywt
                ? <YWTBtn>
                    <ATag
                      link={`https://${subOutput.ywt}.expfrom.me`}
                      text="YWT"
                      color="black"
                    />
                  </YWTBtn>
                : ``
              }
              { 
                subOutput.todoList
                ? <TodoListBtn>
                    <ATag
                      link={`https://${subOutput.todoList}.expfrom.me`}
                      text="TodoList"
                    />
                  </TodoListBtn>
                : ``
              }
          </AppealLink>
        </p>
      )}
    </div>
  )
}

const AppealLink = styled.div`
	display: flex;

  >div {
    border-radius: 10px;
    padding: 5px 10px;
    margin-right: 10px;
  }

  >div:last-child {
    margin-right: 0;
  }
`

const Button = styled.div`
  display: block;
`

const TwitterBtn = styled(Button)`
  background-color: #19A3EF;
`

const FacebookBtn = styled(Button)`
  background-color: #3E5A93;
`

const YWTBtn = styled(Button)`
  background-color: gold;
`

const TodoListBtn = styled(Button)`
  background-color: royalblue;
`

export default Bio
