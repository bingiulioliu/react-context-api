import { Outlet } from "react-router";
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

function PrimoLayout(){

    return <>
        <Navbar/>
        <main className="">
            <Outlet/>
        </main>
        <Footer/>

    </>
};

export default PrimoLayout;