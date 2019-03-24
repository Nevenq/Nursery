import React from 'react'
import './Menu.css'
import logo from '../images/Питомник.svg'

const Menu = () => {
    return (
        <div className="menu">
            <div className="container menu-container">
                <a href="#"><img src={logo} alt="logo" className="logo"/></a>
                <nav>
                    <div className="menu-element"><a href="#">Главная</a></div>
                    <div className="menu-element"><a href="#">О нас</a></div>
                    <div className="menu-element"><a href="#">Правила</a></div>
                </nav>
                <div className="number">+7 900 000 00 00</div>
            </div>
        </div>
    )
};
export default Menu
export {Menu}