import React from 'react';
import styled from 'styled-components';
import iFacebook from './icons/iconmonstr-facebook-4.svg';
import iGooglePlus from './icons/iconmonstr-google-plus-4.svg';
import iTwitter from './icons/iconmonstr-twitter-4.svg';


class Icon extends React.Component {
    constructor(props) {
      super(props);
      //console.log("IconButton constructor props", props)
    }
    render() {
       // return <Container><ImgWrapper><Img src={this.getImg(this.props.icon)}/></ImgWrapper></Container>
        return <Container icon={this.props.icon} rotate={this.props.rotate} round={this.props.round} 
            colorKey={this.props.colorKey} color={this.props.color} hoverKey={this.props.hoverKey} hover={this.props.hover}/>
    }
}

export default Icon;

const Container = styled.div`
    position:relative;
    display: inline-block;
    text-align: center;
    outline: 0;
    border: none;
    vertical-align: middle;
    background-image: url(${
        props => {
            switch(props.icon){
                case 'fb':
                    return iFacebook;
                case 'gp':
                    return iGooglePlus;
                case 'twitter':
                    return iTwitter;
                default:
                    return iTwitter;
            }
        }
    });
    background-repeat: no-repeat;
    background-position: center;
    width:${props=>props.width?props.width+"px":'44px'};
    height:${props=>props.height?props.height+"px":'44px'};
    border-radius: ${
        props => {
            if(props.round === true){
                return '50%';
            }else if(props.round){
                return props.round;
            }else{
                return '0';
            }
        }
    };
    background-color: transparent;
    transition: all 1s ease;
    &:hover{
        background-color: pink;
    }
    transform: rotate(${props=>props.rotate?props.rotate:'0'}deg);

`
/*
    background-color: ${props=>{
        if(props.colorKey){
            return props.theme[props.colorKey]
        }else if(props.color){
            return props.color;
        }else{
            return props.theme.neutral;
        }
        //return 'transparent';
        //return props.theme.neutral;
        //props.colorKey?props.color:props.theme.neutralL
    }};


    &:hover{
        ${props=>{
            if(props.hoverKey){
                return 'background-color: ' + props.theme[props.hoverKey] + ";"
            }
        }};
    }
*/