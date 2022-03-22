import React from 'react';
import styled,{keyframes} from 'styled-components'
import { small } from '../controllers/responsive'
const runningText =keyframes`
0% {transform:translateX(100%)}
100%{transform:translateX(-100%)}
`

const Container=styled.div`
height: 2.5rem;
font-weight: 700;
color: white;
background-color: black;
box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
overflow: hidden;
${small({height:"4rem"})}
&  p{
animation: ${runningText} 15s infinite linear;
width: 100%;
position: relative;
top: -5px;
}
`

const Alert = () => {
    return (
        <Container>
            <div style={{marginTop:"10px"}}>
                ¡¡¡Grande!!! Noticias : Consigue nuestras 
                colecciones Rolex con un 30% de descuento  
            </div>
        </Container>
    )
}

export default Alert