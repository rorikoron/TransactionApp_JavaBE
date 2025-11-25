import MenuCard from "./MenuCard.jsx";
import styled from "styled-components";
import { useOrder } from "./OrderProvider.jsx";

const StyledList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 22px;
`;

const StyledWrapper = styled.div`
    overflow-y: auto;
    box-sizing: border-box;
    padding: 24px;
    
    /* deleting scroll bar */
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar{
        display:none;
    }
`

const StyledError = styled.div`

`
export default function MenuList({order}){
    
    return(
        <StyledWrapper>
            {
                order.length ? (
                    <StyledList>
                        {
                            order.map(material => {
                                return <MenuCard {...material} key={material.name}/>
                            })
                        }
                    </StyledList>
                ) : (
                    <StyledError />
                )
            }
        </StyledWrapper>
    )
}