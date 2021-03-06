import React from 'react'
import './Menu.css'
import logo from '../../images/Питомник.svg'
import {Link} from "react-router-dom";
import $ from 'jquery'

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
                <div className='icons'>
                    <div className="anchor-form" onClick={formHandleClick} style={{display : getDisplay() ? "initial" : "none"}} title={'Добавить животного'}>+</div>
                    <div className="anchor-login" onClick={loginHandleClick} style={{display:!getDisplay() ? "initial" : "none"}} title={'Войти'} >
                        <i className="fa fa-user-o" aria-hidden="true" />
                    </div>
                </div>
            </div>
        </div>
    )
};
const formHandleClick = () => {
    $('.form').fadeIn(300, () => document.body.style.overflow = 'hidden');

}
const getDisplay = () =>{
    return document.cookie.indexOf('authed=yes') !== -1;
};
const loginHandleClick = () => {
    $('.loginForm').fadeIn(300, () => document.body.style.overflow = 'hidden');


}
export default Menu
export {Menu}