import React from 'react';
import styled from 'styled-components';
import IconButton from './icons/IconButton.jsx';

export default (props) => {
    console.log(`Social media props`, props);
    return (
        <Social>
            <IconButton icon="fb" onInput={()=>{
                        window.open(`https://www.facebook.com/sharer/sharer.php?u=${props.url}`, "pop", "width=600, height=400, scrollbars=no");
                    }}/>
            <IconButton icon="twitter" onInput={()=>{
                        window.open(`https://twitter.com/intent/tweet?url=${props.url}&text=hello my text`, "pop", "width=600, height=400, scrollbars=no");
                    }}/>
        </Social>
    )
}

const Social = styled.div`
    text-align: center;
`