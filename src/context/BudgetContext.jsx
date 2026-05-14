import { createContext, useState } from "react";
import { useProducts } from "../hooks/useProducts";


export const BudgetContext = createContext(null);

export function BudgetProvider({children}){

    const [isPoorMode, setIsPoorMode] = useState(false);

    const {filter, filteredProducts: filteredTemp, handleChange, categories} = useProducts();

    const togglePoorMode = () => {
        setIsPoorMode(isPoorMode ? false : true);
        console.log(' Click ');
        
    }

    const poorProducts = filteredTemp.filter(product=>{
        return isPoorMode? product.price < 30 : true;
    })

    const value = {
        isPoorMode,
        togglePoorMode,
        filter,
        handleChange,
        categories,
        filteredProducts : poorProducts // Sovrascrivo con la lista filtrata
    }

    return <>
        <BudgetContext value={value}>
            {children}
        </BudgetContext>
    </>
};
