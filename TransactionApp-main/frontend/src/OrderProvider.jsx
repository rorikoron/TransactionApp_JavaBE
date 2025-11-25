import React, { createContext, useState, useContext, useEffect } from "react";
import menu_data from "./assets/menu_data.json";
import axios from "axios";

const OrderContext = createContext();
export const useOrder = () => useContext(OrderContext); 

export default function OrderProvider({children}){
    const [order, setOrder] = useState([]);
    const [menu, setMenu] = useState([]);

    const resetOrder = () => {
        const initialOrder = menu.map(elem => ({
            ...elem,
            quantity: 0
        }));
        setOrder( initialOrder );
    }
    useEffect(() => {
        const fetchMenu = async () =>{
            try{
                const res = await axios.get("/menu");
                setMenu(res.data);
            }catch(error){
                throw error;
            }
        }
        fetchMenu();
    }, []);
    useEffect(() =>{
        resetOrder();
    }, [menu]);
    
    const incrementOrder = (name) =>{
        const newOrder = [...order], target = newOrder.find(elem => elem.name === name);
        target.quantity++;
        setOrder(newOrder);
    }

    const decrementOrder = (name) => {
        const newOrder = [...order], target = newOrder.find(elem => elem.name === name);
        if(target.quantity>0) target.quantity--;
        setOrder(newOrder);
    }
    
    return(
        <OrderContext.Provider value={ {order, resetOrder, setOrder, incrementOrder, decrementOrder} }>
            {children}
        </OrderContext.Provider>
    )
}