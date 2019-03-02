import React from "react"
import { graphql } from "gatsby";
import styled from 'styled-components';
import {animationMixIn} from './../components/animations/animation';
import SocialMedia from '../components/social/SocialMedia';
//import Meta from './../components/social/Meta.jsx';
import Img from 'gatsby-image';
import {allergies} from './../components/utils/utilities.js';

export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { site, markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter} = markdownRemark;
  let aller = allergies(frontmatter.glutenfree, frontmatter.dairyfree, frontmatter.vegan,
    frontmatter.nutfree, frontmatter.refinedsugarfree);
  return (
    <div>
          {/* <Meta title={frontmatter.title} description={'on the menu: ' + frontmatter.description}
              image={site.siteMetadata.siteRoot + frontmatter.thumbnail.childImageSharp.fixed.src} 
              imageAlt={frontmatter.thumbnailAlt}
              type="restaurant.menu_section" twitterCard="summary"
               /> */}
        <Heading>
           <h1>{frontmatter.title}</h1>
            <hr />
            {allergies.length > 0 && <Allergies><h4>{aller}</h4></Allergies>}
        </Heading>
        <Article>
          <Img
            fixed={frontmatter.thumbnail.childImageSharp.fixed}
            title={frontmatter.thumbnailAlt}
            alt={frontmatter.thumbnailAlt}
            />
          <p>{frontmatter.description}</p>
        </Article>
        <Soc><SocialMedia  /></Soc>
        {/* <script type="application/ld+json">{JSON.stringify({ 
              "@context": "http://schema.org/",
              "@type": "MenuItem",
              "name": "pie",
              "description": "a pie",
              "image": "https://goofy-archimedes-763914.netlify.com" + frontmatter.thumbnail.childImageSharp.fixed.src,
              "suitableForDiet": ["http://schema.org/GlutenFreeDiet"],
              "offers": {
                  "@type": "Offer",
                  "price": "9.00",
                  "priceCurrency": "AUD"
              }
          })}</script> */}
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: 
              JSON.stringify({ 
                "@context": "http://schema.org/",
                "@type": "MenuItem",
                "name": "pie",
                "description": "a pie",
                "image": "https://goofy-archimedes-763914.netlify.com" + frontmatter.thumbnail.childImageSharp.fixed.src,
                "suitableForDiet": ["http://schema.org/GlutenFreeDiet"],
                "offers": {
                    "@type": "Offer",
                    "price": "9.00",
                    "priceCurrency": "AUD"
                }
            })}}/>
    </div>
    
  )
}

export const pageQuery = graphql`
  query MenuTemplate($path: String!) {
    site {
      ...SiteInformation
    }
    headerImage: file(relativePath: { regex: "/boardplate/" }) {
      childImageSharp{
        fluid(sizes: "100vw") {
            ...GatsbyImageSharpFluid
        }
    }
    }
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
        thumbnail {
            childImageSharp {
                fixed(width: 300) {
                    ...GatsbyImageSharpFixed
                  }
            }
          }
        thumbnailAlt
        slug
        draft
        menusection
        price
        discount
        glutenfree
        outofstock
        description
        
      }
    }
  }
`


const Soc = styled.div`
  animation-name: slideUp;
  opacity: 0;
  transform: translateY(100%);
  ${props => {
    return animationMixIn('1', '0', 'forwards', 'ease-out');
  }}
`
const Heading = styled.div`
  width: 100%;
  text-align: center;
  padding-bottom: 10px;
  h1, hr, p { margin: 0;}
  h1{
    padding: 3px;
  }
`
const Article = styled.div`
  width: 100%;
  min-height: 200px;
  p{
    display: inline;
    width: 50%;
  }
  .gatsby-image-wrapper{
    float: left !important;
    margin: 5px 10px 0px 20px;
  }
`
const Allergies = styled.div`
  display: flex; width: 100%;
  flex-direction: row; flex-wrap: wrap;
  padding 10px 0px;
  h4{ 
    display: inline; padding: 0px 7px; margin: 0;
    font-size: 0.8em; color: grey;
    text-align: center; 
    text-transform: uppercase;
    flex-grow: 1;
    animation-name: slideDown;
    opacity: 0; transform: translateY(-100%);
    ${props => {
      return animationMixIn('0.8', '0', 'forwards', 'ease-out');
    }}
    &:nth-child(2){ animation-delay: 0.5s}
    &:nth-child(3){ animation-delay: 1s}
    &:nth-child(4){ animation-delay: 1.5s}
    &:nth-child(5){ animation-delay: 2s}
  }

`

/*
  - name: "menu" # Used in routes, e.g., /admin/collections/blog
    label: "Menu" # Used in the UI
    folder: "src/pages/menu" # The path to the folder where the documents are stored
    create: true # Allow users to create new documents in this collection
    slug: "{{year}}-{{month}}-{{day}}-{{slug}}" # Filename template, e.g., YYYY-MM-DD-title.md
    fields: # The fields for each document, usually in front matter
      - {label: "Path", name: "path", widget: "string"}
      - {label: "Layout", name: "layout", widget: "hidden", default: "menu"}
      - {label: "Title", name: "title", widget: "string"}
      - {label: "Slug", name: "slug", widget: "string"}
      - {label: "Description", name: "description", widget: "string"}
      - {label: "Publish Date", name: "date", widget: "datetime"}
      - {label: "Draft", name: "draft", widget: "boolean", default: true}
      - {label: "MenuSection", name: "menusection", widget: "select", options: ["entrees", "mains", "specials"], required: false}
      - {label: "Price", name: "price", widget: "string"}
      - {label: "Discount", name: "discount", widget: "string"}
      - {label: "GlutenFree", name: "glutenfree", widget: "boolean", default: false}
      - {label: "OutofStock", name: "outofstock", widget: "boolean", default: false}
      - {label: "Featured Image", name: "thumbnail", widget: "image"}
      - {label: "Featured Image Alt Text", name: "thumbnailAlt", widget: "string"}
      - {label: "Body", name: "body", widget: "markdown"}



    kenImage: file(relativePath: { regex: "/gatsby-icon/" }) {
        childImageSharp {
            fluid(maxWidth: 600) {
                ...GatsbyImageSharpFluid
              }
        }
    }
*/