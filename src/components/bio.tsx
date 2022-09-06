"use strict"
/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

import ATag from "./ATag"

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/kamo-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(width: 50, height: 50, quality: 95, layout: FIXED)
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
            rcp
            rod
            designrssbot
          }
        }
      }
    }
  `)

  // Set these values by editing "siteMetadata" in gatsby-config.js
  const author = data.site.siteMetadata?.author
  const social = data.site.siteMetadata?.social
  const subOutput = data.site.siteMetadata?.subOutput

  const avatar = data?.avatar?.childImageSharp?.gatsbyImageData

  return (
    <div className="bio">
      {avatar && (
        <GatsbyImage
          image={avatar}
          alt={author?.name || ``}
          className="bio-avatar"
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
      )}
      {author?.name && (
        <div>
          {author?.summary || null} <strong>{author.name}</strong>
          <br />
          {` `}
          <AppealLink>
            {social.twitter ? (
              <TwitterBtn>
                <ATag
                  link={`https://twitter.com/${social.twitter}`}
                  text="Twitter"
                />
              </TwitterBtn>
            ) : (
              ``
            )}
            {social.twitter ? (
              <FacebookBtn>
                <ATag
                  link={`https://facebook.com/${social.facebook}`}
                  text="Facebook"
                />
              </FacebookBtn>
            ) : (
              ``
            )}
            {subOutput.ywt ? (
              <YWTBtn>
                <ATag
                  link={`https://${subOutput.ywt}.expfrom.me`}
                  text="YWT"
                  color="black"
                />
              </YWTBtn>
            ) : (
              ``
            )}
            {subOutput.todoList ? (
              <TodoListBtn>
                <ATag
                  link={`https://${subOutput.todoList}.expfrom.me`}
                  text="TodoList"
                />
              </TodoListBtn>
            ) : (
              ``
            )}
            {subOutput.rcp ? (
              <RCPBtn>
                <ATag
                  link={`https://${subOutput.rcp}.expfrom.me`}
                  text="RandomColor"
                />
              </RCPBtn>
            ) : (
              ``
            )}
            {subOutput.rod ? (
              <RoDBtn>
                <ATag
                  link={`https://${subOutput.rod}.expfrom.me`}
                  text="ResourceOfDevelop"
                />
              </RoDBtn>
            ) : (
              ``
            )}
            {subOutput.designrssbot ? (
              <DesignRSSBotBtn>
                <ATag
                  link={`https://twitter.com/${subOutput.designrssbot}`}
                  text="DesignRSSBot"
                />
              </DesignRSSBotBtn>
            ) : (
              ``
            )}
            {subOutput.sshkeygen ? (
              <SSHKeyGenBtn>
                <ATag
                  link={`https://${subOutput.sshkeygen}.expfrom.me`}
                  text="SSHKeyGen"
                  color="black"
                />
              </SSHKeyGenBtn>
            ) : (
              ``
            )}
          </AppealLink>
        </div>
      )}
    </div>
  )
}

const AppealLink = styled.div`
  width: 100%;

  > div {
    border-radius: 10px;
    padding: 5px 10px;
    margin-right: 10px;
    margin-top: 5px;
  }

  > div:last-child {
    margin-right: 0;
  }
`

const Button = styled.div`
  display: inline-block;
  height: 36px;
`

const TwitterBtn = styled(Button)`
  background-color: #19a3ef;
`

const FacebookBtn = styled(Button)`
  background-color: #3e5a93;
`

const YWTBtn = styled(Button)`
  background-color: gold;
`

const TodoListBtn = styled(Button)`
  background-color: royalblue;
`

const RCPBtn = styled(Button)`
  background: linear-gradient(
    -45deg,
    #a12df9,
    #23a6d5,
    #23d5ab,
    #fff94b,
    #ff8a26,
    #ff267a
  );
  background-size: 400% 400%;
  animation: gradient 1s ease infinite;

  @keyframes gradient {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`

const RoDBtn = styled(Button)`
  background-color: goldenrod;
`

const DesignRSSBotBtn = styled(Button)`
  background: linear-gradient(-45deg, #48e6ed, #7e1bb5, #ff00f7);
`

const SSHKeyGenBtn = styled(Button)`
  background-color: #ff7f50;
`

export default Bio
