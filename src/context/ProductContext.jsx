import { createContext } from "react";

const ProductContext = createContext(null);

function ProductProvider({children}){
    const data = 0;

    return <>
        <ProductContext value={data}>
            {children}
        </ProductContext>
    </>
}