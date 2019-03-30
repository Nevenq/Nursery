import React from 'react'
import './Menu.css'
import logo from './Питомник.svg'
import {Link} from "react-router-dom";

const Menu = () => {
    return (
            <div className="menu">
                <div className="container menu-container">
                    <Link to="/"><img src={logo} alt="logo" className="logo"/></Link>
                    <nav>
                        <div className="menu-element"><Link to="/">Главная</Link></div>
                        <div className="menu-element"><Link to="/about">О нас</Link></div>
                        <div className="menu-element"><Link to="/rules">Правила</Link></div>
                    </nav>
                    <div className="number">+7 900 000 00 00</div>
                </div>
            </div>
    )
};
export default Menu
export {Menu}