import { useState } from "react"
import styled from "styled-components"

const StyledButton = styled.span`
    background: #52474a;
    height: 100%;
    width: 100%;
    &::after{
        content: "${props => (props.value)}";
        display: grid;
        height: 100%;
        width: 100%;
        color: white;
        place-items: center;
        font-size: 26px;

    }
`
export default function CounterButton({ value, fnClick }){
    return(
        <StyledButton value={value} onClick={fnClick} />
    )
}