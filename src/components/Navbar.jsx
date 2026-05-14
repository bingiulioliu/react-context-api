import { useState } from "react";
import { Link, NavLink } from "react-router";
import { BudgetContext } from "../context/BudgetContext";
import { useContext } from "react";


function Navbar() {
    
    const {isPoorMode, togglePoorMode } = useContext(BudgetContext) 
    
    return <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/'>Homepage</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/prodotti'>Prodotti</NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className='nav-link' to='/chi-siamo'>About Us</NavLink>
                        </li>
                        
                    </ul>
                </div>
                <button 
                className="btn btn-dark"
                onClick={togglePoorMode}>
                    {isPoorMode ? 'Disattiva' : 'Attiva'} Modalità Povero
                </button>
            </div>
        </nav>
    </>
};

export default Navbar;