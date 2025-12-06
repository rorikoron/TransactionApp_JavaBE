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
const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 1000;
`;


export default function App(){
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [contentType, setContentType] = useState("Content");

    const [staff, setStaff] = useState([]);
    const [selectedStaff, setSelectedStaff] = useState(null);   
    useEffect(() => {
        const load = async () => {
            const [interRes, outerRes] = await Promise.all([
                fetch('/inter').then(r => r.json()),
                fetch('/outer').then(r => r.json())
            ]);

            setStaff([...interRes, ...outerRes]);  // 結合する
        };

    load();
}, []);


    return(
        <OrderProvider>
            <StyledApp sidebarOpen={sidebarOpen}>
                <Sidebar isOpen={sidebarOpen} setOpen={setSidebarOpen} setContent={setContentType} />
                {
                    !selectedStaff && <StyledModal><h1>選擇工作人員</h1>
                    <select value={selectedStaff} onChange={e => setSelectedStaff(e.target.value)}>
                        {
                            staff?.map((staffMember) => (
                                <option key={staffMember.id} value={staffMember.id}>
                                    {staffMember.name}
                                </option>
                            ))
                        }
                    </select></StyledModal>

                }

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