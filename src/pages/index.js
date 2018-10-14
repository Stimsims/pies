import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import {animationMixIn} from './../components/animations/animation';
import { Link } from 'gatsby';

//import PageTransition from 'gatsby-plugin-page-transitions';
const renderMenu = (data) => {
  console.log(`renderMenu `, data);
  return data.allMarkdownRemark.edges.map((n, i) => {
    console.log(`renderMenu item `, n);
    let {node} = n;
    return (
      <Item key={node.frontmatter.path} index={i}>
        <Link key={node.frontmatter.path} to={node.frontmatter.path}>
          <div className="item-image">
            <Img
              fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
              title={`Header image of restaurant`}
              index={i}
              className={i%2===0?'imgleft':'imgright'}
              />
          </div>
        </Link>
        <div className={`textbox ${i%2===0?'textleft':'textright'}`}>
          <h3 className="menu-item-title">{node.frontmatter.title}</h3>
          <p className="menu-item-description">{node.frontmatter.description}</p>
          <p className="menu-item-allergies">{node.frontmatter.allergies.join()}</p>
        </div>
      </Item>
    )
  })
}
const IndexPage = (props) => {
    console.log(`IndexPage props`, props);
  return (
  
      <div>
        <div>
          <Title>Menu</Title>
        </div>
        
        <Menu>
          {renderMenu(props.data)}
        </Menu>
      </div>
    

  )
}

export default IndexPage;
const Title = styled.h1`
  text-align: center;
  margin: 20px 0px 10px 0px;
  opacity: 0;
  animation-name: slideDown;
  ${props => {
    return animationMixIn('1', '1', 'forwards', 'ease-in');
  }}
`
const Menu = styled.div`
  width: 100%;
  min-height: 100px;
  padding: 10px;
`
const Item = styled.div`
  width: 100%; 
  text-align: center;
  margin: 0; padding: 0;
  display: flex;
  flex-direction: column;
  margin: 10px 0 40px 0;
  .textbox{
    flex: 1;
    width: 100%; max-width: 300px;
    text-align: center;
    display: inline;
    margin: auto;
    position: relative;
    transform: translateX(${props=>props.index%2===0?'':'-'}200%);
    animation-name: slideDown;
    ${props => {
      return animationMixIn('1', '1.5', 'forwards', 'ease-in');
    }}
    z-index: 19;
    .menu-item-title{
      margin: 5px;
    }
    .menu-item-allergies{
      position: absolute; width: 100%;
      bottom: 0px; margin: 0;
    }
  }
  .item-image{
    z-index: 999;
    flex: 1;
    text-align:center;
    .gatsby-image-wrapper{
      margin: auto;
      max-width: 300px;
    }
  }
  @media only screen and (min-width: 700px) {
    flex-direction: ${props=>props.index%2===0?'row':'row-reverse'};
    .item-image{
      z-index: 999;
      width: 300px;
    }
    .textbox{
      animation-name: ${props=>props.index%2===0?'slideLeft':'slideRight'};
      max-width: 3000px;
    }
  }
  @keyframes slideTextLarge {
    0% {transform: translateY(-100%); opacity: 0;}
    50% {opacity: 0;}
    100% { transform: translateY(0%); opacity: 1;}
}
`

export const query = graphql`
  query IndexPage {
    site {
      ...SiteInformation
    }
    headerImage: file(relativePath: { regex: "/scandic/" }) {
      childImageSharp{
          fluid {
              ...GatsbyImageSharpFluid
          }
      }
    }
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            path
            title
            description
            allergies
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




/*

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background:  url('https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
  &markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
  &markers=color:red%7Clabel:C%7C40.718217,-73.998284
  &key=AIzaSyAgMUHIS-cbsd4LtKBanx77jidsbZ8eTn0'),
  url('${props => {
    return props.bg;
  }}');
  background-size: auto 100%, cover;
  background-position: center;
  background-repeat: no-repeat;
`
*/