import React from "react"
import { graphql } from "gatsby";
import styled from 'styled-components';
import Img from 'gatsby-image';
import {animationMixIn} from './../components/animations/animation';
import SocialMedia from '../components/social/SocialMedia';
import Meta from './../components/social/Meta.jsx';

/*
        "@type": "MenuItem",
        "name": item.frontmatter.title,
        "description": item.frontmatter.description,
        "image": "https://goofy-archimedes-763914.netlify.com" + item.frontmatter.path,
        "suitableForDiet": [item.frontmatter.glutenfree?"http://schema.org/GlutenFreeDiet":null],
        "offers": {
            "@type": "Offer",
                    "price": item.frontmatter.price,
                    "priceCurrency": "AUD"
        }
*/
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds our post data
  const { frontmatter, html } = markdownRemark;
  console.log(`MenuTemplate data`, data);
  let allergies = [];
  if(frontmatter.glutenfree) allergies.push('GLUTEN FREE');
  if(frontmatter.dairyfree) allergies.push('DAIRY FREE');
  if(frontmatter.vegan) allergies.push('VEGAN');
  if(frontmatter.nutfree) allergies.push('NUT FREE');
  if(frontmatter.refinedsugarfree) allergies.push('REFINED SUGAR FREE');
  console.log(`MenuTemplate allergies`, allergies);
  let schema = { 
      "@context": "http://schema.org/",
      "name": "pie",
      "image": "https://goofy-archimedes-763914.netlify.com/static/scandic-c90942cfae912bb38f91d18b04b9ba6d-566f0.jpg"
  }
  let sJson = JSON.stringify(schema);
  console.log(`Meta json `, sJson);
  return (
    <div>
          {/* <Meta title={frontmatter.title} description={'on the menu: ' + frontmatter.description}
              image={frontmatter.thumbnail.childImageSharp.fluid.src} 
              imageAlt={frontmatter.thumbnailAlt}
              type="restaurant.menu_section" twitterCard="summary"
               />
        <Heading>
           <h1>{frontmatter.title}</h1>
            <hr />
            {allergies.length > 0 && <Allergies>
              {allergies.map((e, i) => {
                return <p>{e}</p>
              })}
            </Allergies>}
        </Heading>
        <Container>
          <div className="menu-picture">

            <Img
                fluid={frontmatter.thumbnail.childImageSharp.fluid}
                alt={frontmatter.thumbnailAlt}
                title={frontmatter.title}
                />
            
          </div>
          <div className="menu-description">
              <span>
                <p className="description">{frontmatter.description}</p>
                <p className="price">${frontmatter.price}</p>  
              </span>
              
          </div>
        </Container>
        <Soc><SocialMedia  /></Soc> */}
        <div>
        <script type="application/ld+json">{JSON.stringify(schema)}</script>
        </div>
        
    </div>
    
  )
}

/*

*/


export const pageQuery = graphql`
  query MenuTemplate($path: String!) {
    headerImage: file(relativePath: { regex: "/boardplate/" }) {
      childImageSharp{
          fluid {
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
                fluid(maxWidth: 600) {
                    ...GatsbyImageSharpFluid
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
const Container = styled.div`
  display: flex;
  width: 100%; height: 100%;
  padding: 10px 0px;
  flex-direction: column;

  .menu-picture{
    flex: none;
    h1, p, hr{ text-align: center; margin: 0;}
    h1{padding: 3px;}
  }
  .menu-description{
    flex: none;
    padding-top: 10px;
    display: flex; flex-direction: column; 
    position: relative;
    animation-name: slideDown;
    opacity: 0;
    transform: translate(0%, -100%);
    ${props => {
      return animationMixIn('1', '0.5', 'forwards', 'ease-out');
    }}
    span{
      width: 100%;  position: relative;
      p{text-align: center; margin: 0; padding: 10px;}
    }
    .description {
      position: static; 
    }
    .price{
      font-size: 1.4em;
      text-decoration: underline;
    }
  }

  @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
    flex-direction: row;
    .menu-picture, .menu-description{ flex: 1}
    .menu-description{
      animation-name: slideLeft;
      transform: translate(100%, 0%);
    }
    .menu-description span{
      top: 50%; 
      transform: translateY(-50%);
    }
  }
`
const Allergies = styled.div`
  display: flex; width: 100%;
  flex-direction: row; flex-wrap: wrap;
  p{ 
    display: inline; padding: 0px 7px; margin: 0;
    font-size: 0.8em; color: grey;
    text-align: center; 
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