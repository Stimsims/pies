import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';
import {animationMixIn} from './../components/animations/animation';
// import Icon from './../components/Icons/Icon.jsx';
// import IconButton from './../components/Icons/IconButton.jsx';
import SocialMedia from './../components/SocialMedia.js';
import { Link } from 'gatsby';
import Helmet from 'react-helmet';

const getGoogleData = (title, img, alt) => {
  return {
      "@context": "http://schema.org/",
          "@type": "Article",
          "name": title,
          "headline": "aricle headline",
          "author": "Elaine Smith",
          "publisher": {
              "@type": "Organization",
              "email": "test@gmail.com",
              "name": "IoH",
              "url": img,
              "logo": {
                  "@type": "ImageObject",
                  "thumbnail": img,
                  "url": img
              }
          },
          "mainEntityOfPage":{
              "@type": "CreativeWork",
              "name": "my creative vid",
              "about": "solving resident evil armor key puzzle"
          },
          "image": img,
          "thumbnailUrl": img,
          "description": "A classic apple pie.",
          "about": "How people solve problems",
          "articleSection":"People are a mystery. We break mysteries down by analyzing their simpeles examples. So, we're analyzing video game puzzles",
          "timeRequired": "P30M",
          "dateModified": "20181009T050200Z",
          "datePublished": "20181009T050200Z"
  }
}
const renderMenu = (data) => {
  console.log(`renderMenu `, data);
  return data.allMarkdownRemark.edges.map((n, i) => {
    console.log(`renderMenu item `, n);
    let {node} = n;
    return (
      <div key={node.frontmatter.path} >
        <hr />
        <Item index={i}>
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
      </div>
    )
  })
}
const IndexPage = (props) => {
    console.log(`IndexPage props`, props);
  return (
  
      <div>
        <Helmet>
        <meta name="description" content="Gekko is a restaurant, here is its menu" />

          <meta property="og:title" content={props.data.site.siteMetadata.title} />
          <meta property="og:image" content={props.data.headerImage.childImageSharp.fluid.src}  />
          <meta property="og:description" content="Gekko is a restaurant, here is its menu" />
          <meta property="og:type" content="website" />
          <meta property="og:site_name" content={props.data.site.siteMetadata.title} />

          <meta name="twitter:card" content="summary"/>
          <meta name="twitter:site" content="@Paygevii1"/>
          <meta name="twitter:creator" content="@Paygevii1"/>
          <meta name="twitter:title" content={props.data.site.siteMetadata.title}/>
          <meta name="twitter:description" content={"Gekko is a restaurant, here is its menu"} />
          <meta name="twitter:image" content={props.data.headerImage.childImageSharp.fluid.src}/>
          <meta name="twitter:image:alt" content={'the restaurant interior'} />

          <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(getGoogleData(props.data.site.siteMetadata.title,
                  props.data.headerImage.childImageSharp.fluid.src, 'the restaurant interior')) }}
            />
        </Helmet>
        <Title>What's on the Menu?</Title>
        <SocialMedia url={props.location.href} />
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