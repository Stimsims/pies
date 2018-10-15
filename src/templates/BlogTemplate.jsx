import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image";
import styled from 'styled-components';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  console.log(`BlogTemplate data`, data);
  return (
    <div className="blog-post-container">
        Blog post
    </div>
  )
}


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
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
                  }
            }
          }
        thumbnailAlt
        menu
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