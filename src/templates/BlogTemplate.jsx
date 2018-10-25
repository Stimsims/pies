import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image";
import styled from 'styled-components';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  return (
    <div className="blog-post-container">
        <h1>{frontmatter.title}</h1>
        <hr />
        <h5>{frontmatter.date}</h5>
        <Container>
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
        </Container>
    </div>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  .c1{
    position: relative;

    .gatsby-image-wrapper{
      float: left !important; 
      margin: 7px 5px 5px 0px;
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
                fixed(height: 106) {
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