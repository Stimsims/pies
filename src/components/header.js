import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from "gatsby-image";
//import './transition.css';

class Header extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      open:true,
      image: props.image.src
    }
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
        <Img
            fluid={image}
            title={`Header image of restaurant`}
            style={{height: '200px', position: 'relative', width: '100%'}}
            />
        <Heading>
          <h1 className="insetshadow">Gekko</h1>
          <Menu>
            {links.map(e=> {
              return <Link key={e.to} to={e.to} activeClassName="active" >
                <p className="menu-link">{e.text}</p>
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
  width: 100%; height: 200px; position: relative; z-index: 9999; background-color: green;
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
    margin: 10px;
    transform: translateY(-200%);
    opacity: 0;
    animation-name: drop;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 2s;
    p{
      margin: 0;
      color: white;
    }
  }
  a:hover, a.active{
    background-color: ${props => {return props.theme.neutralDarkL}};
  }
  a:active{
    transition: all 0s ease;
    background-color: black;
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
