import React from 'react'
import styled from 'styled-components';
import Img from 'gatsby-image';

//import PageTransition from 'gatsby-plugin-page-transitions';
const renderMenu = (data) => {
  console.log(`renderMenu `, data);
  return data.allMarkdownRemark.edges.map((n, i) => {
    console.log(`renderMenu item `, n);
    let {node} = n;
    return (
      <Item>

        <Img
          fluid={node.frontmatter.thumbnail.childImageSharp.fluid}
          title={`Header image of restaurant`}
          style={{height: '200px', width: '300px', float: i%2===0?'left':'right'}}
          className={i%2===0?'imgleft':'imgright'}
          />
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
        <h1 style={{textAlign: 'center'}}>Menu</h1>
        <Menu>
          {renderMenu(props.data)}
        </Menu>
    </div>
    

  )
}

export default IndexPage;

const Menu = styled.div`
  width: 100%;
  animation-name: slideUp;
  animation-duration: 2s;
  animation-fill-mode: forwards;
  animation-timing-function: ease-in;
  min-height: 100px;
  padding: 10px;

  @keyframes slideUp {
    from {
      transform: translateY(100%);
      opacity: 0;
    }
    to {transform: translateY(0%);
      opacity: 1;
    }
  }
`
const Item = styled.div`
  width: 100%; height: 200px;
  text-align: center;
  margin: 0; padding: 0;
  .textbox{
    background-color: transparent;
    height: 100%;
    padding: 0;
    margin: 0;
    transform: translateX(100%);
    animation-name: abc;
    animation-duration: 1s;
    animation-delay: 1s;
    animation-fill-mode: forwards;
    animation-timing-function: ease-in;
    z-index: 19;
  }
  .gatsby-image-wrapper{
    z-index: 999;
  }
  @keyframes abc {
    from {transform: translateX(100%);}
    to { transform: translateX(0%);}
}
`
/*
  .imgleft picture img{
    animation-name: imglefts:
    animation-duration: 5s;
    animation-fill-mode: forwards;
  }
  @keyframes imglefts {
    from{
      filter: opacity(0%);
    }
    to{
      filter: opacity(100%);
    }
  }
*/
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