import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from "gatsby-image";
import './transition.css';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:true,
      image: props.image.src
    }
  }
  componentDidMount(){
    console.log(`Header did mount`);
  }
  componentDidUpdate(prevProps){
    console.log(`Header did update`, prevProps);
    //if()
  }
  render(){
   
        let image = this.props.image;
        console.log(`Header did render state img: ${this.state.image} props img: ${image.src} 
        equal? ${this.state.image !== image.src}`, this.props);
        let links = [
                {text: 'where', to: '/where'},
                {text: 'menu', to: '/'},
                {text: 'blog', to: '/blog'},
                {text: 'privacy', to: '/privacy'}
              ];
    return (
      <Banner>
            {/* <ImgWrapper>
                  <Img
                      fixed={image}
                      title={`Header image of restaurant`}
                      style={{height: '200px'}}
                      />
                  <div className="overlay" style={{height: '200px'}}>

                  </div>
                  <Img
                      className="mirror"
                      fixed={image}
                      title={`Header image of restaurant`}
                      style={{height: '200px'}}
                      />
                  <div className="overlaymirror" style={{width: '300px', height: '200px'}}>

                  </div>
            </ImgWrapper> */}
                  <Img
                      fixed={image}
                      title={`Header image of restaurant`}
                      style={{height: '200px', position: 'relative', width: '100%', maxWidth:"800px", margin: 'auto'}}
                      />
        <Heading>
          <h1 className="insetshadow">Gekko</h1>
          <Menu>
            {links.map(e=> {
              return <Link key={e.to} to={e.to} activeClassName="active" >
                <p>{e.text}</p>
              </Link>
            })}
          </Menu>
        </Heading>
      </Banner>
    )
  }
}

export default Header;
const Banner = styled.div`
  width: 100%; height: 200px; position: relative; z-index: 9999;
`
const ImgWrapper = styled.div`
  background-color: white;
  width: 100%;
  .mirror.gatsby-image-wrapper, .overlaymirror{
    display: none !important; width: 300px; 
  }
  .overlay{
    background: linear-gradient(to left, white 15%, transparent 50%,  white 85%);
    position: fixed; height: 100%; top: 0; left: 0; right: 0; width: 100%;
    display: inline-block;
  }
  .gatsby-image-wrapper{
    margin: auto !important;
    display: block !important;
    img{
      filter: saturate(100%);
      transition: all 1s ease;
      animation-name: filters;
      animation-duration: 2s;
      animation-fill-mode: forwards;
    }
  }
  @media only screen and (min-width: 650px) {
    .mirror.gatsby-image-wrapper{
      display: inline-block !important;
    }
    .mirror{
      position: absolute !important; right: 0; top:0; 
      transform: scaleX(-1);  display: inline-block !important;
    }
    .overlaymirror{
      background: radial-gradient(ellipse at top left, transparent, white 80%);
      position: absolute; top: 0; right: 0; float: right;
      display: inline-block !important;
      transform: scaleX(-1);  
    }
    .overlay{
      background: radial-gradient(ellipse at top left, transparent, white 80%);
      position: absolute; top: 0;
      width: 300px; display: inline-block;
    }
    .gatsby-image-wrapper{
      margin: none !important; display: inline-block !important;
    }
  }
  @keyframes filters {
    0%{
      filter: brightness(0.5);
      filter: contrast(50%);
      opacity: 0;
    }
    10%{
      filter: brightness(0.5);
      filter: contrast(50%);
      opacity: 1;
    }
    60%{
      filter: brightness(5);
      filter: contrast(300%);
      opacity: 1;
    }
    100%{
      filter: brightness(1);
      filter: contrast(100%);
      opacity: 1;
    }
  }

`
const Menu = styled.div`
  display: flex;
  width: 100%;
  a{
    flex: 1;
    display: inline-block;
    text-align: center;
    text-decoration:none;
    text-transform: capitalize;
    background-color: ${props => {return props.theme.neutralDarkD}};
    transition: all 1s ease;
    color: ${props => {
      console.log(`menu theme props ` + props.theme.neutralLightD, props);
      return props.theme.neutralLightL}
    };
    border-bottom: 2px solid ${props => {return props.theme.neutralDarkD}};
    margin: 10px;
    transform: translateY(-200%);
    opacity: 0;
    animation-name: drop;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    p{
      margin: 0;
    }
  }
  a:hover, a.active{
    background-color: ${props => {return props.theme.neutralDarkL}};
    border-bottom: 2px solid ${props => {return props.theme.neutralDarkL}};
  }
  a:active{
    transition: all 0s ease;
    background-color: black;
    border-bottom: 2px solid black;
  }
  a:nth-child(2){
    animation-delay: 2.5s;
  }
  a:nth-child(3){
    animation-delay: 3s;
  }
  a:last-child{
    animation-delay: 3.5s;
  }
  @keyframes drop {
   from{
     transform: translateY(-200%);
     opacity: 0;
   }
   to{
     transform: translateY(0%);
     opacity: 1;
   }
  }
`
const Heading = styled.div`
  width: 100%;
  height: 100px;
  background-color: white;
  position: relative;
  transform: translateY(-50%);
  transition: all 1s ease;
  box-shadow: 0px 1px 1px 1px #777777;
  animation-name: example;
  animation-duration: 2s;
  animation-timing-function: ease-in;
  h1{
    line-height: 100px;
    text-align: center;
    margin: 0;
    text-transform: uppercase;
  }
  @keyframes example {
      from {
        transform:scale(5) translateY(20%);
        opacity: 0;
        box-shadow: 0px 0px 0px 0px #777777;
      }
      to {
        transform:scale(1) translateY(-50%);
        opacity: 1;
        box-shadow: 0px 1px 1px 1px #777777;
      }
  }
  @media only screen and (min-width: 500px) {
    width: 500px;
    margin: auto;
  }
`
