import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {animationMixIn} from './animations/animation';
import Img from 'gatsby-image';

export default class MenuItem extends React.Component{

    render(){
        console.log(`MenuItem props`, this.props);
        let {node, index} = this.props;
        return (       
                <Link to={this.props.path} style={{textDecoration: 'none', color: 'black', margin: '20px 10px'}}>
                    <Container index={this.props.index}>

                        <div className="box">                                    
                            <Img
                                    fixed={this.props.image}
                                    title={this.props.title}
                                    alt={this.props.alt}
                                    index={index}
                                    />
                        </div>
                        <div className="title">
                            <div>
                                <h2>{this.props.title}</h2>
                                <h4>{this.props.subtitle}</h4>
                            </div>
                        </div>
                        {this.props.details && <div className="c2"> 
                            <p id="menutext">{this.props.details}</p>
                        </div>}
                    </Container>
                </Link>

    )
    }
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  .box{
      order: 0;
      min-height: 100%;
      margin-left: auto;
      margin-right: auto;
      position: relative;
      .gatsby-image-wrapper{
          position: relative;
          top: 50%;
         
          transform: translateY(-50%);
          img{
            margin: 0 !important;
          }
      }
  }
  
  .title{
    order: 1;
    width: 100%;
    position: relative;
      div{
        position: relative;
        top: 50%;
        transform: translateY(-50%);
        text-align: center;
        width: 100%;
        h2, h4{
            margin-bottom: 15px;
            margin-top: 0px;
        }
      }
  }
  .c2{
      order: 2;
      text-align: center;
      padding-top: 10px;
      width: 300px;
      margin-left: auto;
      margin-right: auto;
  }
  @media screen and (min-width: 700px){
      .box{
        ${props => {
            console.log(`MenuItem Container props`, props);
            return props.index % 2 === 0? 'order:0; margin-left: 10px;':'order:1; margin-right: 10px;'}}
      }
      .title{width: 50%; flex-grow: 1;
        ${props => {return props.index % 2 === 0? 'order:1;':'order:0;'}}
        }
      .c2{width: 100%;}
  }

`
/*
  .gatsby-image-wrapper{
      order: 0;
      width: 50% !important;
    margin: 7px 5px 5px 0px;
    img, picture img {
      margin: 0 !important;
    }
  }
*/
// const Item = styled.div`
//   width: 100%; 
//   text-align: center;
//   margin: 0; padding: 0;
//   display: flex;
//   flex-direction: column;
//   margin: 10px 0 40px 0;
//   .textbox{
//     flex: 1;
//     width: 100%; max-width: 300px;
//     text-align: center;
//     display: inline;
//     margin: auto;
//     position: relative;
//     background: yellow;
//     transform: translateX(${props=>props.index%2===0?'':'-'}200%);
//     animation-name: slideDown;
//     ${props => {
//       return animationMixIn('1', '1.5', 'forwards', 'ease-in');
//     }}
//     z-index: 19;
//     .menu-item-title{
//       margin: 5px;
//     }
//     .menu-item-allergies{
//       position: absolute; width: 100%;
//       bottom: 0px; margin: 0;
//     }
//   }
//   .item-image{
//     z-index: 999;
//     flex: 1;
//     text-align:center;
//     .gatsby-image-wrapper{
//       margin: auto;
//     }
//   }
//   @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
//     flex-direction: ${props=>props.index%2===0?'row':'row-reverse'};
//     .item-image{
//       z-index: 999;
//     }
//     .textbox{
//       animation-name: ${props=>props.index%2===0?'slideLeft':'slideRight'};
//       max-width: 3000px;
//     }
//   }
//   @keyframes slideTextLarge {
//     0% {transform: translateY(-100%); opacity: 0;}
//     50% {opacity: 0;}
//     100% { transform: translateY(0%); opacity: 1;}
// }
// `