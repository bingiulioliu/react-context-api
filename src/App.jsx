import { BrowserRouter, Routes, Route } from "react-router";
import PrimoLayout from "../layouts/PrimoLayout";
import Homepage from "../pages/Homepage";
import ChiSiamo from "../pages/ChiSiamo";
import Prodotti from "../pages/Prodotti";
import { useState, useEffect } from "react";
import { useProducts } from "./hooks/useProducts";
import NotFound from "../pages/NotFound";
import Prodotto from "../pages/Prodotto";
import { BudgetProvider } from "./context/BudgetContext";


function App() {

  return (
    <BudgetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<PrimoLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="chi-siamo" element={<ChiSiamo />} />
            <Route path="prodotti" element={<Prodotti/>}/>
            <Route path="prodotti/:productId" element={<Prodotto/>}/>
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </BudgetProvider>
  );
}
export default App;
