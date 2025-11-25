import { useState } from "react"
import styled from "styled-components"
import CounterButton from "./CounterButton.jsx"

const StyledWrapper = styled.div`
    align-self: end;
    height: fit-content;
    display: grid;
    place-items: center;
    grid-template-columns: 1fr 40% 1fr;
    height: 100%;
`
const StyledInput = styled.input`
    display: inline-block;
    box-sizing: border-box;
    height: 100%;
    width: 100%;
    vertical-align: bottom;
    padding: 8px 0;
    font-size: 24px;

    text-align: center;
    border: none;
    border-bottom: 1px solid gray;
    border-top: 1px solid gray;
    &::-webkit-inner-spin-button,
    &::-webkit-outer-spin-button {
        -webkit-appearance: none;
        -moz-appearance:textfield;
    }

    &:hover{
        outline: none;
    }
`

export default function Counter({ value, fnIncrement, fnDecrement}){
    return(
        <StyledWrapper>
            <CounterButton value='-' fnClick={fnDecrement} />
            <StyledInput type="number" readOnly value={value} />
            <CounterButton value='+' fnClick={fnIncrement} />
        </StyledWrapper>
    )
}