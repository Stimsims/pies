import React from 'react';
import Img from "gatsby-image";
import styled from 'styled-components';
//import PageTransition from 'gatsby-plugin-page-transitions';

const WherePage = (props) => {
    console.log(`WherePage props`, props);
    return (
        <div>
            <Heading>Contact us</Heading>
            <Contact>
                <div className="phone">
                    <Label>Phone</Label>
                    <p>232-2323-232</p>
                </div>
                <div className="email">
                    <Label>E-mail</Label>
                    <p>gekko@gmaik.com</p>
                </div>
            </Contact>
            <Heading>Or visit us in person</Heading>
            <div style={{position: 'relative'}}>
                <Img
                fluid={props.data.mapImage.childImageSharp.fluid}
                title={`Map of the restaurant`}
                />
                <Address>
                    <p className={'heading'}>Address</p>
                    <p className={'address'}>1 Infi Loop</p>
                    <p className={'address'}>Mercedes Park</p>
                    <p className={'address'}>CA 400293</p>
                    <p className={'address'}>USA</p>
                </Address>
            </div>
 
        </div>
    )

}


export default WherePage;

export const query = graphql`
  query WherePage {
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
const Heading = styled.p`
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  margin: 30px 0px 15px 0px;
  color: grey;
`
const Label = styled.p`
text-align: center;
fint-size: 1.2em;
margin: 0;
`
const Contact = styled.div`
  width: 100%;
  display: flex;
  text-align: center;
  padding: 10px;
  
  .phone, .email{
      flex: 1;
      display: inline-block
      background-color: #ffffffff;
      box-shadow: 0px 1px 1px 0px;
      padding-top: 23px;
      margin: 10px;
  }
  .phone{
    animation-name: right;
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
  }
  .email{
    animation-name: left;
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
  }
  @keyframes left {
    from {
        transform:translateX(100%);
      opacity: 0;
    }
    to {
      transform:translateX(0%);
      opacity: 1;
    }
    }
    @keyframes right {
        from {
            transform:translateX(-100%);
          opacity: 0;
        }
        to {
          transform:translateX(0%);
          opacity: 1;
        }
        }
`
const Address = styled.div`
  text-align: center;
  position: absolute;
  z-index: 999;
  left: 10px;
  bottom: 10px;
  background-color: #ffffffcc;
  box-shadow: 0px 1px 1px 0px;
  padding: 10px;
  .heading{
      font-weight: bold;
      margin: 0;
  }
  .address{
      margin: 0;
  }
  animation-name: address;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  @keyframes address {
    from {
        transform:translateY(-100%);
      opacity: 0;
    }
    to {
      transform:translateY(0%);
      opacity: 1;
    }
    }
`