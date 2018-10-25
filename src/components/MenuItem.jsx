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
        // <Item index={index}>

        //     <div className="item-image">
        //     <Img
        //                 fixed={node.frontmatter.thumbnail.childImageSharp.fixed}
        //                 title={node.frontmatter.thumbnailAlt}
        //                 alt={node.frontmatter.thumbnailAlt}
        //                 index={index}
        //                 style={{width: '300px', height: '187px'}}
        //                 className={index%2===0?'imgleft':'imgright'}
        //                 />
        //     </div>
         
        //   <p className={`textbox ${index%2===0?'textleft':'textright'}`}>
        //     <p>{node.frontmatter.description}
        //     {node.frontmatter.description}
        //     {node.frontmatter.description}
        //     {node.frontmatter.description}
        //     {node.frontmatter.description}
        //     {node.frontmatter.description}
        //     </p>

        //   </p>
          
        // </Item>
                <Link to={node.frontmatter.path} style={{textDecoration: 'none', color: 'black', margin: '20px 10px'}}>
                    <Container>

                        <div className="box">                                    
                            <Img
                                    fixed={node.frontmatter.thumbnail.childImageSharp.fixed}
                                    title={node.frontmatter.thumbnailAlt}
                                    alt={node.frontmatter.thumbnailAlt}
                                    index={index}
                                    />
                        </div>
                        <div className="title">
                            <div>
                                <h2>{node.frontmatter.title}</h2>
                                <p>{node.frontmatter.date}</p>
                            </div>
                        </div>
                        {this.props.details && <div className="c2"> 
                            <p id="menutext">{node.frontmatter.description}</p>
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
      .title{width: 50%; flex-grow: 1;}
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