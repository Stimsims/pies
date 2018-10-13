import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image";
import styled from 'styled-components';

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
        {/* <p>{frontmatter.ingredients.join()}</p> */}
        <p>calories: {frontmatter.calories}</p>
        
        {/* <Img
            fluid={data.kenImage.childImageSharp.fluid}
            title={`Photo by Ken Treloar on Unsplash`}
            /> */}
        <ImgAnimator>
            <Img
                fluid={frontmatter.thumbnail.childImageSharp.fluid}
                title={`Photo by Ken Treloar on Unsplash`}
                />
        </ImgAnimator>

            {/* <img src={frontmatter.thumbnail.childImageSharp.resize.src} alt={frontmatter.thumbnailAlt} /> */}
        <div
          className="blog-post-content"
          dangerouslySetInnerHTML={{ __html: html }}
        />
      </div>
    </div>
  )
}

const ImgAnimator = styled.div`
    .gatsby-image-wrapper{
        transition: all 1s ease;
        filter: blur(4px) sepia(60%);
        opacity:1;
        &:hover{
            filter: blur(0px) sepia(0%);
            opacity: 1;
            background-size: 105% 70%;
        }
    }
`

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
        slug
        tags
        draft
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