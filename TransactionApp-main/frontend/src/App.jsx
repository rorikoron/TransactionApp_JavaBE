import { useState, useEffect, React } from 'react'
import styled from "styled-components";
import Sidebar from './Sidebar.jsx';
import Content from './Content.jsx';
import Statistic from './Statistic.jsx';
import OrderProvider from "./OrderProvider.jsx";
const StyledApp = styled.div`
    display: grid;
    grid-template-columns: ${props => (props.sidebarOpen ? '18%' : '4%')} 1fr;
    height: 100dvh;
    width: 100dvw;
    overflow-y: hidden;
    transition: all 0.4s;
    
    &>div:first-child{
        background: #1D2939;

        font-size: ${props => (props.sidebarOpen ? '20px' : '0px')};
    }

`;


export default function App(){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [contentType, setContentType] = useState("Content");

    const [message, setMessage] = useState();
    useEffect(() => {
        fetch('/api')
            .then((res) => res.json())
            .then((data) => setMessage(data));
    }, []);

    return(
        <OrderProvider>
            <StyledApp sidebarOpen={sidebarOpen}>
                <Sidebar isOpen={sidebarOpen} setOpen={setSidebarOpen} setContent={setContentType}/>
                {
                    {
                        "Content": <Content/>,
                        "Statistic": <Statistic/>
                    }[contentType]
                }
            </StyledApp>
        </OrderProvider>
    )
}