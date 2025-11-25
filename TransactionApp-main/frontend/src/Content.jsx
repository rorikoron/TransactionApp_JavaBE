import styled from "styled-components";
import MenuList from "./MenuList.jsx";
import MenuOrders from "./MenuOrders.jsx"
import { useOrder } from "./OrderProvider";

const StyledContent = styled.main`
    display: grid;
    grid-template-columns: 70% 30%;
    overflow-y: hidden;
    height: 100%;
    background: white;
    box-sizing: border-box;
`;


export default function Content(existOrder = {}){
    const { order } = useOrder();

    return(
        <StyledContent>
            <MenuList order={order}/>
            <MenuOrders order={order}/>
        </StyledContent>
    )
}