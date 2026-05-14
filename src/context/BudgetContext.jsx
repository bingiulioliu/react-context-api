import { createContext, useState } from "react";

export const BudgetContext = createContext(null);

export function BudgetProvider({children}){

    const [isPoorMode, setIsPoorMode] = useState(false);

    const togglePoorMode = () => {
        setIsPoorMode(isPoorMode ? false : true);
        console.log(' Click ');
        
    }

    const value = {
        isPoorMode,
        togglePoorMode
    }

    return <>
        <BudgetContext value={value}>
            {children}
        </BudgetContext>
    </>
};
