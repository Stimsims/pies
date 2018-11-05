import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';
import {animationMixIn} from './../components/animations/animation';
import MenuItem from './../components/MenuItem.jsx';
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
      <Title>Blog</Title>
      <List>
        {edges.map(({node}, i) => {
          console.log(`blog item `, node);
          return           <MenuItem path={node.frontmatter.path} index={i}
          title={node.frontmatter.title} subtitle={node.frontmatter.date}
          image={node.frontmatter.thumbnail.childImageSharp.fixed}
          alt={node.frontmatter.thumbnailAlt} />
        })}
      </List>
    </div>
  )
}

export default SecondPage;
const List = styled.div`
  margin-top: 40px;
  transform: translateY(50%);
  opacity: 0;
  animation-name: slideUp;
  ${props => {
    return animationMixIn('1', '1.5', 'forwards', 'ease-in');
  }}
`
const Title = styled.h1`
  text-align: center;
  margin: 0px 0px 10px 0px;
  opacity: 0;
  animation-name: slideDown;
  ${props => {
    return animationMixIn('1', '1', 'forwards', 'ease-in');
  }}

`
const Item = styled.div`
  border-bottom: 2px solid grey;
  margin-bottom: 20px;
  padding: 5px 5px 0px 5px;
  .blog-date{margin: 8px 0 0 0; float: none; text-align: center; display: block; }
  .blog-title{ text-align: center; display: block; margin: 0;}
  .blog-desc{ text-align: center; margin: 10px 0 0px 0;}
  p{
    color: hsla(0,0%,0%,0.87);
  }
  transition: all 0.5s ease-out;
  transform: scale(1);
  &:hover{
    background-color: lightgrey;
    transform: scale(1.03);
  }
  @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
    .blog-date{margin: 0; float: right; display: inline-block; }
    .blog-title{ text-align: left; display: inline-block;}
  }
`

export const query = graphql`
  query BlogPage {
    site {
      ...SiteInformation
    }
    headerImage: file(relativePath: { regex: "/fieldcroptomatoes/" }) {
      childImageSharp{
          fluid(sizes: "100vw") {
              ...GatsbyImageSharpFluid
          }
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {layout: {eq: "blog"}}}
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            thumbnail {
              childImageSharp {
                fixed(width: 300, height: 187) {
                  ...GatsbyImageSharpFixed
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