import { createContext } from "react";

export const BudgetContext = createContext(null);

export function BudgetProvider({children}){
    const budgetMode = false;

    return <>
        <BudgetContext value={data}>
            {children}
        </BudgetContext>
    </>
};
