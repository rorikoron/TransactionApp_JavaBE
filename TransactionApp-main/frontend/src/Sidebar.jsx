import { useState } from "react";
import styled from "styled-components";

const StyledSidebar = styled.div`
    overflow-x: hidden;
    color: white;
    padding: 32px 15px;

    > ul{
        list-style: none;
    }
    > li{
    }

`

const StyledTitle = styled.h6`
    visibility: ${props => (props.isOpen ? 'visible' : 'hidden')};
    font-size: 18px;
    color: rgb(200, 200, 200);
    padding: 16px 12px;
`

const StyledButton = styled.li`
    font-size: 18px;
    display: grid;
    overflow-x: hidden;
    padding: 14px 6px;
    grid-template-columns: calc(4vw - 42px) ${props => (props.isOpen ? '1fr' : '0')};
    gap: 16px;

    &:hover{
        backdrop-filter: brightness(70%);
    }

    &>img{
        height: 100%;
    }


`
export default function Sidebar({isOpen, setOpen, setContent}){
    return(
        <StyledSidebar onMouseEnter={() => setOpen(true)} onMouseLeave={() => setOpen(false)}>
            <StyledTitle isOpen={isOpen}>Information</StyledTitle>
            <ul>
                <StyledButton onClick={() => setContent("Content")} isOpen={isOpen}>
                    <img src="/house-solid.svg" />
                    <span>Home</span>
                </StyledButton>
                <StyledButton onClick={() => setContent("Statistic")} isOpen={isOpen}>
                    <img src="/chart-simple-solid.svg" />
                    <span>Statistic</span>
                </StyledButton>
                <StyledButton onClick={() => setContent("Setting")} isOpen={isOpen}>
                    <img src="/gear-solid.svg" />
                    <span>Setting</span>
                </StyledButton>
            </ul>
        </StyledSidebar>
    )
}