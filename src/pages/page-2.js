import React from 'react'
import { Link } from 'gatsby'
//import PageTransition from 'gatsby-plugin-page-transitions';


const PostLink = ({post}) => {
  return <div>
  <Link to={post.frontmatter.path}>
    {post.frontmatter.title} ({post.frontmatter.date})
  </Link>
</div>
}

const SecondPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => {
  const Posts = edges
  .filter(edge => !!edge.node.frontmatter.date) // You can filter your posts based on some criteria
  .map(edge => <PostLink key={edge.node.id} post={edge.node} />)
  return (
    <div>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 3</p>
    <Link to="/">Go back to the homepage</Link>
    <div>{Posts}</div>
    </div>
  )
}

export default SecondPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            thumbnail {
              childImageSharp {
                  fluid(maxWidth: 300) {
                      ...GatsbyImageSharpFluid
                  }
              }
            }
            thumbnailAlt
          }
        }
      }
    }
  }
`