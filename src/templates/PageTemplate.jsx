import React from 'react';
import styled from 'styled-components';
import {animationMixIn} from './../components/animations/animation';

export default class Page extends React.Component{
    render(){
        console.log(`Page Template props`, this);
        let page = this.props.pageContext;
        return (
            <Container>
                <Title>{page.title}</Title>
                <p>{page.body}</p>
            </Container>
        )
    }
}

const Container = styled.div`
opacity: 0;
text-align: center;
    animation-name: slideDown;
    ${props => {
    return animationMixIn('1', '1', 'forwards', 'ease-in');
    }}
`
const Title = styled.h1`
  text-align: center;
  margin: 0px 0px 10px 0px;

`
