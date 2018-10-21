import React from 'react';

export default class Privacy extends React.Component{
    render(){
        console.log(`Privacy page props`, this.props);
        return <p>Privacy</p>
    }
}