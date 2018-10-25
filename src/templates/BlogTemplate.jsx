import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image";
import styled from 'styled-components';
import Social from './../components/social/SocialMedia.js';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <Container className="blog-post-container">
        <h1>{frontmatter.title}</h1>
        <hr />
        <h5>{frontmatter.date}</h5>
        <Markdown>
          <div className="c1">
            <Img 
              fixed={frontmatter.thumbnail.childImageSharp.fixed}
              title={frontmatter.title}
              alt={frontmatter.thumbnailAlt}
              />
            <div className="blog-content"
              dangerouslySetInnerHTML={{ __html: html }}
              />
          </div>
        </Markdown>
        <Social />
    </Container>
  )
}
const Container = styled.div`
  h1, h5{text-align: center;}
  hr{margin-bottom: 5px;}
`
const Markdown = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 20px;
  .c1{
    position: relative;
    .blog-content p{
      margin-top:0px;
    }
    .gatsby-image-wrapper{
      float: left !important; 
      margin: 5px 10px 0px 10px;
      img, picture img {
        margin: 0 !important;
      }
    }
  }
`

export const pageQuery = graphql`
  query BlogTemplate ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail {
            childImageSharp {
                fixed(height: 250) {
                    ...GatsbyImageSharpFixed
                  }
            }
          }
        thumbnailAlt
        menuitem {
            menuitemtitle
            menuitemdesc
            menuitempath
        }
      }
      
    }
  }
`

/*
    kenImage: file(relativePath: { regex: "/gatsby-icon/" }) {
        childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
        }
    }
*/