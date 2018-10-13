import React from 'react'
import { Link } from 'gatsby'
import styled from 'styled-components';


import Layout from '../components/layout'

const IndexPage = (props) => {
  console.log(`IndexPage props`, props);
  return (
    <Layout>
      <Banner bg={props.data.mapImage.childImageSharp.fluid.src} />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <Link to="/page-2/">Go to page 2</Link>
      {/* <img src={`https://maps.googleapis.com/maps/api/staticmap?center=Brooklyn+Bridge,New+York,NY&zoom=13&size=600x300&maptype=roadmap
&markers=color:blue%7Clabel:S%7C40.702147,-74.015794&markers=color:green%7Clabel:G%7C40.711614,-74.012318
&markers=color:red%7Clabel:C%7C40.718217,-73.998284
&key=AIzaSyAgMUHIS-cbsd4LtKBanx77jidsbZ8eTn0`} 
alt={'a google map of the restaurant location'} /> */}
    <img
      src={props.data.mapImage.childImageSharp.fluid.src}
      alt="blurry map"
    />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query IndexPage {
    site {
      ...SiteInformation
    }
    mapImage: file(relativePath: { regex: "/googlestaticmap/" }) {
      childImageSharp {
          fluid {
              ...GatsbyImageSharpFluid
          }
      }
    }
  }
`

const Banner = styled.div`
  width: 100%;
  height: 300px;
  background:  url('${props => {
    return props.bg;
  }}');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
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