import React from 'react'
import styled from 'styled-components';

import {animationMixIn} from './../components/animations/animation';
import SocialMedia from '../components/social/SocialMedia';
import {getGoogleArticle, getGoogleRestaurant} from './../components/social/GoogleData';
import Sales from './../components/Sales.jsx';
import { Link } from 'gatsby';
import Meta from './../components/social/Meta.jsx';
import MenuItem from './../components/MenuItem.jsx';


const IndexPage = (props) => {
    console.log(`IndexPage props `, props);
  return (
      <div>
        <Meta title={props.data.site.siteMetadata.title} description="Gekko is a restaurant, here is its menu"
              image={props.data.site.siteMetadata.siteRoot + props.data.headerImage.childImageSharp.fluid.src} 
              imageAlt={"Gekko is a restaurant, here is its menu"}
              type="restaurant.menu" twitterCard="summary"
              other={[{property: 'restaurant:menu', content:'Gekko Menu'}]}
               />
        <Title>What's on the Menu?</Title>
        <SocialMedia url={props.location.href} />
       
        <Sales  />
        <Menu>
          {props.data.allMarkdownRemark.edges.map((n, i) => {
            console.log(`Index page menuItem `, n);
                return (
                  <div key={n.node.frontmatter.path} >
                    <hr />
                    <MenuItem node={n.node} index={i} />
            
                  </div>
                )
          })}
        </Menu>
        <script type="application/ld+json">{JSON.stringify(getGoogleRestaurant(props.data.allMarkdownRemark.edges))}</script>
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


export const query = graphql`
  query IndexPage {
    site {
      ...SiteInformation
    }
    headerImage: file(relativePath: { regex: "/scandic/" }) {
      childImageSharp{
          fluid(sizes: "100vw") {
              ...GatsbyImageSharpFluid
          }
      }
    }
    allMarkdownRemark(
      filter: {frontmatter: {layout: {eq: "menu"}}}
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
            glutenfree
            price
            outofstock
            menusection
          }
        }
      }
    }
  }
`
//($path: String!)
//frontmatter: { path: { eq: $path } }


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