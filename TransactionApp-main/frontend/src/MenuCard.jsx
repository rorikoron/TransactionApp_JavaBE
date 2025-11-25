import styled from "styled-components";
import Counter from "./Counter.jsx"
import { useOrder } from "./OrderProvider.jsx";

const StyledCard = styled.li`
    display: grid;
    grid-template-columns: 1fr 160px;
    grid-template-rows: 1fr 40px;
    row-gap: 16px;
    height: 140px;
    vertical-align: bottom;
    align-items: flex-end;
    box-sizing: border-box;
    padding: 18px;
    border: 1px solid gray;
    border-radius: 12px;
    color: black;
`;

const StyledTitle = styled.h1`
    grid-column: 1/3;
    font-size: 32px;
    font-weight: 200;
`

const StyledPrice = styled.h2`
    font-size: 24px;
    font-weight: 200;

    &::before{
        content: "$";

    }
`

export default function MenuCard({name, category, price, quantity}) {
    const { incrementOrder, decrementOrder} = useOrder();
    return(
        <StyledCard className={category}>
            <StyledTitle>{name}</StyledTitle>
            <StyledPrice>{price}</StyledPrice>
            <Counter className="CardCounter" value={quantity} fnIncrement={()=>incrementOrder(name)} fnDecrement={()=>decrementOrder(name)}/>
        </StyledCard>
    )
};