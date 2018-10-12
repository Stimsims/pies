import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image";

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark
  console.log(`constructing post, data:`, data);
  return (
    <div className="blog-post-container">
      <div className="blog-post">
        <h1>{frontmatter.title}</h1>
        <p>{frontmatter.date}</p>
        <p>{frontmatter.ingredients.join()}</p>
        <p>calories: {frontmatter.calories}</p>
        
        <Img
            fluid={data.kenImage.childImageSharp.fluid}
            title={`Photo by Ken Treloar on Unsplash`}
            />
        <Img
            fluid={frontmatter.thumbnail.childImageSharp.fluid}
            title={`Photo by Ken Treloar on Unsplash`}
            />
            {/* <img src={frontmatter.thumbnail.childImageSharp.resize.src} alt={frontmatter.thumbnailAlt} /> */}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

export const pageQuery = graphql`
  query($path: String!) {
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
        calories
        ingredients
      }
      
    }
    kenImage: file(relativePath: { regex: "/gatsby-icon/" }) {
        childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
        }
    }
  }
`