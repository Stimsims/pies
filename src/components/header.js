import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from "gatsby-image";
import { CSSTransition } from 'react-transition-group';
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
                {text: 'about', to: '/page-2'}
              ];
    return (
      <div
        style={{
          width: '100%', height: '200px', position: 'relative', zIndex: '9999'
        }}
      >
        {/* <CSSTransition
                        in={this.state.open}
                        timeout={300}
                        classNames="message"
                        key={image.src}
                        onExited={() => {
                          console.log(`Header did transition`);
                          this.setState({
                            image: image.src
                          });
                        }}
                      >
                      <div key={image.src} id={image.src} style={{height: '300px', backgroundColor:'red', padding:'10px'}}>
                      <Img
                fluid={image}
                title={`Header image of restaurant`}
                style={{height: '200px'}}
                />
                      </div>
        </CSSTransition> */}
            <ImgWrapper>
                  <Img
                      fluid={image}
                      title={`Header image of restaurant`}
                      style={{height: '200px'}}
                      />
            </ImgWrapper>

        <Heading>
          <h1>Gekko</h1>
          <Menu>
            {links.map(e=> {
              return <Link key={e.to} to={e.to} activeClassName="active" >
                {e.text}
              </Link>
            })}
          </Menu>
        </Heading>
      </div>
    )
  }
}

export default Header;
const ImgWrapper = styled.div`
  background-color: white;
  .gatsby-image-wrapper{
    img{
      filter: saturate(100%);
      transition: all 1s ease;
      animation-name: filters;
      animation-duration: 2s;
      animation-fill-mode: forwards;
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
    background-color: grey;
    transition: all 1s ease;
    color: white;
    border-bottom: 2px solid grey;
    margin: 10px;
    transform: translateY(-200%);
    opacity: 0;
    animation-name: drop;
    animation-duration: 1s;
    animation-fill-mode: forwards;
    animation-delay: 2s;
  }
  a:hover{
    background-color: lightgrey;
    border-bottom: 2px solid black;
  }
  a.active{
    background-color: lightgrey;
  }
  a:active{
    transition: all 0s ease;
    background-color: black;
    border-bottom: 2px solid grey;
  }
  a:nth-child(2){
    animation-delay: 2.5s;
  }
  a:last-child{
    animation-delay: 3s;
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

/*
box-shadow: 0px 1px 1px 1px #777777;
box-shadow: 0px 2px 4px 2px #888888;
    <div
      style={{
        background: 'rebeccapurple',
        marginBottom: '1.45rem',
      }}
    >
      <div
        style={{
          margin: '0 auto',
          maxWidth: 960,
          padding: '1.45rem 1.0875rem',
        }}
      >
        <h1 style={{ margin: 0 }}>
          <Link
            to="/"
            style={{
              color: 'white',
              textDecoration: 'none',
            }}
          >
            {siteTitle}
          </Link>
        </h1>
      </div>
    </div>
*/