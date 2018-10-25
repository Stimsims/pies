import React from 'react';
import styled from 'styled-components';
import IconButton from './../icons/IconButton.js';
import IcoMoon from './../icons/IcoMoon.js';

export default (props) => {
   
    return (
        <Social>
            <IcoMoon icon="facebook" bg="#45619dff" onInput={()=>{
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${props.url}`, "pop", "width=600, height=400, scrollbars=no");
                    }}/>
            <IcoMoon icon="twitter" bg="#5da9ddff" onInput={()=>{
                        window.open(`https://twitter.com/intent/tweet?url=${props.url}&text=hello my text`, "pop", "width=600, height=400, scrollbars=no");
                    }}/>
        </Social>
    )
}

const Social = styled.div`
    text-align: center;
    padding: 10px;
`