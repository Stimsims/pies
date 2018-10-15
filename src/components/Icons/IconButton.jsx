import React from 'react';
import styled from 'styled-components';
import Icon from './Icon';

const WIDTH = '44';
class IconBtn extends React.Component {
    constructor(props) {
      super(props);
      //console.log("IconButton constructor props", props)
    }
    getColor(img){
        switch(img){
            case 'delete':
                return 'black';
            case 'done':
                return 'green';
            default:
                return 'orange';
        }
    }
    wrapButton(icon){
     //   console.log(`IconButton TextBtn wrapButton props`, this.props);
        let disabled = {};
        if(this.props.disabled) disabled.disabled=true;
        if(this.props.text){
            return (
                <TextBtn round={this.props.round} bgColor={this.props.bgColor} 
                color={this.props.color} colorKey={this.props.colorKey}
                hover={this.props.hover} hoverKey={this.props.hoverKey}
                className={this.props.classes} {...disabled} onClick={this.props.onInput}>
                        <Overlay hover={this.props.hover} hoverKey={this.props.hoverKey}/>
                        {icon}
                        <Label>{this.props.text}</Label>
                </TextBtn>
            )
        }else{
            return (
                <Btn round={this.props.round} hover={this.props.hover} hoverKey={this.props.hoverKey} 
                color={this.props.color} colorKey={this.props.colorKey} 
                bgColor={this.props.bgColor} className={this.props.classes} {...disabled} 
                onClick={(this.props.onInput)} >
                        <Overlay width={`${WIDTH}px`} round={'50%'} hover={this.props.hover} hoverKey={this.props.hoverKey} />
                        {icon}
                </Btn>
            )

        }
    }
    render() {
        return (
            this.wrapButton(<Icon width={`${WIDTH}px`} height={`${WIDTH}px`} icon={this.props.icon}  
            colorKey={this.props.colorKey} 
            color={this.props.color} />)
        )
    }
}

export default IconBtn;
const Overlay = styled.span`
    
    text-align: center;
    vertical-align: middle;
    z-index: 999; 
    position: absolute;
    top: 0; 
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%; 
    height: 100%;
    margin: auto;

`
const Label=styled.p`
    display: block;
    position: relative;
    height: ${props => props.height?props.height+'px':props.theme.menuHeight};
`
/*

    transition: all 1s ease;
    background-color: ${props=>{
        if(props.colorKey){
            return props.theme[props.hoverKey]
        }else if(props.color){
            return props.hover;
        }else{
            return props.theme.primary;
        }
    }};
    opacity: 0;
    &:hover{
        opacity: 0.3;
    }


border-radius: ${props => props.round?props.round:'0'}

    transition:visibility 0.3s linear,opacity 0.3s linear;
    transition: all 1s ease;
    @media only screen and (min-width: ${props => props.theme.mediaMinWidth}) {
        visibility: visible;
        opacity:1;
    }
        &:hover{
        background-color: ${props => props.theme.neutralL};
    }
    background-color: ${props=>props.theme.neutral}
*/
const TextBtn = styled.button`
    height: 100%;
    width: ${props => props.width?props.width:'auto'};
    display:table-cell;
    position: relative;
    border: none;
    outline: 0;
    padding: 0;
    margin: 0;
    p{
        padding: 0px 10px;
        display: inline;
    }
    transition: all 1s ease;
    background-color: ${props=>{
        // console.log(`IconButton TextBtn Btn props`, props);
         if(props.colorKey){
             return props.theme[props.colorKey]
         }else if(props.color){
             return props.color;
         }else{
             return 'transparent';
         }
     }};
     &:hover{
        transform: scale(1.1);
    }
`
   //${props => props.primary ? 'blue' : props.theme.main}
const Btn = styled.button`
    height: 100%;
    position: relative;
    display:table-cell;
    
    border: none;
    outline: 0;
    padding: 0 5px;
    margin: 0;
    transition: all 1s ease;
    background-color: ${props=>{
        // console.log(`IconButton TextBtn Btn props`, props);
         if(props.colorKey){
             return props.theme[props.colorKey]
         }else if(props.color){
             return props.color;
         }else{
             return 'transparent';
         }
     }};
    &:hover{
        transform: scale(1.1);
    }
    `
//  background-color:${props => props.bgColor?props.bgColor:'transparent'};
//background-color: ${props=>props.bgColor? props.bgColor:props.theme.neutral}