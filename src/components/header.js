import React from 'react'
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from "gatsby-image";

const Header = (data) => {
    console.log(`header data`, data);
    let {siteTitle} = data;
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
      <Img
        fluid={data.image}
        title={`Header image of restaurant`}
        style={{height: '200px'}}
        />
      <Heading>
        <h1>Gekko</h1>
        <Menu>
          {links.map(e=> {
            return <Link key={e.to} to={e.to} >
              {e.text}
            </Link>
          })}
        </Menu>
      </Heading>
    </div>
  )
}

export default Header
const Menu = styled.div`
  display: flex;
  width: 100%;
  a{
    flex: 1;
    display: inline-block;
    text-align: center;
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
  }
  @keyframes example {
      from {
        transform:scale(5) translateY(-100%);
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