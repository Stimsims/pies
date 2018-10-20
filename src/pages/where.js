import React from 'react';
import Img from "gatsby-image";
import styled from 'styled-components';
import {animationMixIn} from './../components/animations/animation';

const WherePage = (props) => {
    //console.log(`WherePage props`, props);
    return (
        <div>
            <Title>Where are we?</Title>
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
            <Map>
                <div className="map">
                    <Img
                    fixed={props.data.mapImage.childImageSharp.fixed}
                    title={`Map of the restaurant`}
                    />
                </div>

                <div className='map-address'>
                    <div>
                        <div className="center-vert">
                            <p className={'heading'}>Address</p>
                            <p className={'address'}>1 Infi Loop</p>
                            <p className={'address'}>Mercedes Park</p>
                            <p className={'address'}>CA 400293</p>
                            <p className={'address'}>USA</p>
                        </div>
                    </div>
                </div>
            </Map>
 
        </div>
    )

}


export default WherePage;

export const query = graphql`
  query WherePage {
    site {
      ...SiteInformation
    }
    headerImage: file(relativePath: { regex: "/restaurant/" }) {
      childImageSharp {
          fixed(width: 300, height: 200) {
              ...GatsbyImageSharpFixed
          }
      }
    }
    mapImage: file(relativePath: { regex: "/googlestaticmap/" }) {
        childImageSharp {
            fixed(width: 300, height: 187){
                ...GatsbyImageSharpFixed
            }
        }
      }
  }
`
//TODO, DRY make title seperate component
const Title = styled.h1`
  text-align: center;
  margin: 20px 0px 10px 0px;
  opacity: 0;
  animation-name: slideDown;
  ${props => {
    return animationMixIn('1', '1', 'forwards', 'ease-in');
  }}
`
const Heading = styled.h4`
  text-align: center;
  font-weight: bold;
  font-size: 1.5em;
  margin: 30px 0px 15px 0px;
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
  flex-direction: column;
  .phone, .email{
      flex: 1;
      display: inline-block
      background-color: #ffffffff;
      box-shadow: 0px 1px 1px 0px;
      padding-top: 23px;
      margin: 10px;
  }
  .phone{
    animation-name: slideRight;
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
  }
  .email{
    animation-name: slideLeft;
    animation-duration: 1.5s;
    animation-timing-function: ease-in;
  }
  @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
    flex-direction: row;
  }
`
const Map = styled.div`
  text-align: center;
  .map{
      width: 100%;
      text-align: center;
      margin-bottom: 0px;
  }
  .map-address{
        width: 100%; height: 187px;
        text-align: center;
        z-index: 999;
        div{
            background-color: #ffffffcc;
            box-shadow: 0px 1px 1px 0px;
            height: 100%;
            position: relative;
            .center-vert{
                height: auto;
                top: 50%;
                transform: translateY(-50%);
                box-shadow: 0px 0px 0px 0px;
            }
        }
        .heading{
            font-weight: bold;
            margin: 0;
        }
        .address{
            margin: 0;
        }
        animation-name: slideDown;
        animation-duration: 1s;
        animation-timing-function: ease-out;
        @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
          flex-direction: row;
        }
  }
  @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
    text-align: left;
    .map{
        float: left;
        width: 50%;
    }
    .map-address{
        float: right;
        width: 50%;
        
        div{
            margin: auto; width: 300px;
            box-shadow: 0px 0px 0px 0px;
        }
    }
  }
`

/*
  @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
    position: absolute;
    max-width: 300px;
    bottom: 10px;
    left: 10px;
  }
*/