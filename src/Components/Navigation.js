import { Outlet } from "react-router-dom";
import './NavigationStyles.scss'
import Footer from "./Footer";

export default function Navigation(){
    return(
        <>
         <div className="navbar">
            <div className="nav-logo">
                <img src="https://www.xivtech.io./logo.svg" alt="logo"/>
                <img className="logo-name" src="https://www.xivtech.io./Text.svg" alt="logo"/>
            </div>
            <div className="nav-links">
                <a href="#">Services</a>
                <a href="#">Careers</a>
                <a href="#">About</a>
                <a href="#">Contact</a>
                <img src="https://cdn1.iconfinder.com/data/icons/science-technology-outline-24-px/24/Magnifier_magnifying_glass_search_search_web_searching_glass-512.png" alt="search"/>
            </div>
            <div className='wrapper extra-links'>
            <button><span>Let's talk</span></button>
            </div>
        </div>
        <Outlet/>
        <Footer/>
        </>
       
    )
}