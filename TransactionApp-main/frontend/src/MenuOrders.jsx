import styled from "styled-components";
import { useEffect, useState } from "react";
import { useOrder } from "./OrderProvider";
import axios from "axios";

const StyledWrapper = styled.div`
    border-left: 2px solid gray;
    overflow-y: hidden;
    display: grid;
    grid-template-rows: 1fr auto 120px;
`
const StyledOrders = styled.ul`
    overflow: auto;
    background: rgb(180, 180, 205);
    height: 100%;
    scrollbar-gutter: stable;
    
    
    /* deleting scroll bar */
    &::-webkit-scrollbar{
        padding: 10px 0;
        width: 8px;
        background: rgb(217, 217, 217);
    }
    &::-webkit-scrollbar-thumb{
        background: rgb(163, 163, 163);
        border-radius: 24px;

    }
`;
const StyledCard = styled.li`
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px gray solid;
    padding: 0 16px;
    height: 72px;
    width: 100%;
    box-sizing: border-box;
    text-align: right;
    color: black;

    h4{
        display: inline-block;
        font-size: 26px;
    }

    span{
        font-size: 20px;
        padding: 0 12px;
        text-align: right;

    }

`;
const StyledCard__Detail = styled.div`
    > span{
        font-size: 16px;
        vertical-align: bottom;
    }
`

const StyledTotal = styled.h5`
    border-top: 2px solid gray;
    border-bottom: 2px solid gray;
    box-sizing: border-box;
    
    font-size: 22px;
`
const StyledCtrl = styled.div`
    display: flex;
    flex-direction: row-reverse;
    padding: 12px;
`
const StyledBtn = styled.div`
    background: orange;
    font-size: 26px;
    padding: 42px;
    display:grid;
    align-content: center;
    width: fit-content;
    border-radius: 18px;
`
const StyledModal = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 20px;
    z-index: 1000;
`;

const StyledTouchButton = styled.button`
    width: 200px;
    height: 200px;
    margin: 20px;
    font-size: 24px;
    border-radius: 16px;
`


export default function MenuOrders({order}){
    const { resetOrder } = useOrder();
    const [existOrder, setExistOrder] = useState(order.filter(({quantity}) => quantity>0));
    const [totalAmount, setTotalAmount] = useState(0);

    const [selectedPaymentMethod, setSelectedPaymentMethod] = useState(null);
    const paymentMethod = ['waiting', "cash", "credit card", 'line pay']
    const [cash, setCash] = useState(0);

    // clac total amount
    useEffect( () => {
        setExistOrder(order.filter(({quantity}) => quantity>0));
    }, [order]);
    useEffect(() => {
        if (selectedPaymentMethod === "payed" || selectedPaymentMethod === "credit card" || selectedPaymentMethod === "cash") {
            const timer = setTimeout(() => {
                setSelectedPaymentMethod(null);
            }, 2000);

            return () => clearTimeout(timer);  // クリーンアップ
        }
    }, [selectedPaymentMethod]);

    useEffect( () => {
        let sum = existOrder.reduce((accumulated, elem) => {
            return accumulated + elem.price * elem.quantity;
        }, 0)
        setTotalAmount(sum);
    }, [existOrder]);

    const fillZero = (date) => {
        return date<10 ? "0" + date : date; 
    }
    const getCurrentDate = (format = "YYYYMMDD") => {
        const current = new Date();

        const year = current.getFullYear();
        const month = current.getMonth()+1;
        const date = current.getDate();

        return format.replace(/Y+/, year).replace(/M+/, fillZero(month)).replace(/D+/, fillZero(date));
    }
    const getCurrentTime = (format = "HHMMSS") => {
        const current = new Date();
        
        const hr = current.getHours();
        const min = current.getMinutes();
        const sec = current.getSeconds();

        return format.replace(/H+/, hr).replace(/M+/, min).replace(/S+/, sec);
    }

    const postAsync = async () => {
        resetOrder();

        const timeStamp_format= "DATE TIME";
        const timeStamp = timeStamp_format.replace('DATE', getCurrentDate("YYYY-MM-DD")).replace('TIME', getCurrentTime("HH:MM:SS"));
        const orderId = self.crypto.randomUUID();
        
        try{
            const formattedExistOrder = existOrder.map( ({name, price, quantity}) => ({
                orderName: name,
                orderPrice: price,
                orderQuantity: quantity,
            }))
            console.log(formattedExistOrder);
            await axios.post("/api", {orderId, existOrder: formattedExistOrder, timeStamp});
        }catch(error){
            console.log(error);
        }
    }

    return(
        <StyledWrapper>
            <StyledOrders>
                {
                    existOrder.map(({name, price, quantity, index}) => (
                        
                        <StyledCard key={index}>
                            <StyledCard__Detail>
                                <h4>{name}</h4>
                                <span>x{quantity}</span>
                            </StyledCard__Detail>
                            <span>${price * quantity}</span>
                        </StyledCard>
                    ))
                }
            </StyledOrders>
            <StyledCard>
                <h4>Total:</h4>
                <span>${totalAmount}</span>
            </StyledCard>
            <StyledCtrl>
                <StyledBtn onClick={ () => setSelectedPaymentMethod('waiting')}>選擇付款方式</StyledBtn>
            </StyledCtrl>

{ selectedPaymentMethod &&
            <StyledModal>
                { selectedPaymentMethod === 'waiting' ? (
                    paymentMethod.slice(1).map( (method) => (
                        <StyledTouchButton key={method} onClick={() => {setSelectedPaymentMethod(method); postAsync();}}>{method}</StyledTouchButton>
                ))) : selectedPaymentMethod === 'cash' ? (
                    <>
                    <h1>Line Pay Selected</h1><input type="text" placeholder={`請輸入現金`} value={cash} onChange={(e) => setCash(e.target.value)}/><h2>找零: {cash < totalAmount ? '餘額不足' : '$'+( cash-totalAmount) }</h2>
                    {
                        //這裡偷懶
                    }
                    <StyledBtn onClick={() => setSelectedPaymentMethod('payed')}>結帳</StyledBtn>
                    </>
                ) : selectedPaymentMethod !== 'cash' && (
                    <h1>列印收據中...</h1>
                )
                }
            </StyledModal>
}
        </StyledWrapper>
    )
}