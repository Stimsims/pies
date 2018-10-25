import React from 'react';
import styled from 'styled-components';
// import Icon from './Icon';
const SIZE = 55;
export default class IcoMoon extends React.Component{
    render(){
        return (
            <Wrapper bg={this.props.bg} size={SIZE}>
                <Icon className={`icon-${this.props.icon}`} size={SIZE} />
                <Button onClick={this.props.onInput}/>
            </Wrapper>
        )
    }
}

const Wrapper = styled.div`
    position: relative;
    display: inline-block;
   margin: 5px; padding: 0;
    background: ${props => {
        return props.bg?props.bg:'pink';
    }};
    width: ${props => {
        return props.size + "px";
    }}; 
    height: ${props => {
        return props.size + "px";
    }}; 
    text-align: center;
`
const Icon = styled.a`
    font-size: 1.8em !important;
    text-align: center;
    line-height: ${props => {
        return props.size + "px";
    }}; 
    padding: 0px !important;
    color: white;
    position: relative; 
    display: block;
`
const Button = styled.button`
    outline: 0; border: none;
    background-color: white;
    transition: opacity 0.5s ease-in;
    opacity: 0;
    position: absolute;
    top: 0; left: 0;
    width: 100%; 
    height: 100%;
    &:hover{
        opacity: 0.5;
    }
`