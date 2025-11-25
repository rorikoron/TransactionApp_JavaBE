import { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Table from './Table';

const StyledWrapper = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    place-items: center;
    background: rgb(238, 238, 238);
    color: black;

    *{
        box-sizing: border-box;

    }
`
const StyledContent = styled.div`
    background: #fff;
    display: grid;
    height: 80%;
    width: 90%;
    padding: 24px;
    overflow-y: auto;
    position: relative;
    color: black;
`
export default function Statistic(){
    const [transactinoData, setTransactionData] = useState([]);
    const tableHeader = ["OrderID", "Name", "Price", "Quantity", "TimeStamp"];
    
    useEffect( () => {
        const fetchData = async () =>{
            try{
                const res = await axios.get("/api");
                const sorted = res.data.toSorted((a,b) => new Date(b.timeStamp) - new Date(a.timeStamp) );
                console.log(sorted);
                const localized = sorted.map((({id, timeStamp, ...other}) => ({
                    ...other,
                    timeStamp: new Date(timeStamp).toLocaleString()
                })))
                setTransactionData(localized);
            }catch(error){
                console.log(error);
            }
        } 
        fetchData();
    }, []);
    return( 
        <StyledWrapper>
            <StyledContent>
                <Table tableHeader={tableHeader} tableData={transactinoData}/>
            </StyledContent>
        </StyledWrapper>
    )
}