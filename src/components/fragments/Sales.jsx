import React from "react"
import { graphql } from "gatsby"

// export const query = graphql`
//   fragment Sales on MarkdownRemark{
//         id
//         frontmatter {
//             path
//         }
//     }

// `

/*
allMarkdownRemark(
        filter: {frontmatter: {layout: {eq: "sale"}}}
        sort: { order: DESC, fields: [frontmatter___date] }
      ) {
        edges {
          node {
            id
            frontmatter {
              startdate(formatString: "MMMM DD, YYYY")
              enddate(formatString: "MMMM DD, YYYY")
              path
            }
          }
        }
      }
    }
*/