import React, {Component} from 'react'
import './LoginForm.css'
import $ from 'jquery'
import {api} from '../../index'

class LoginForm extends Component {
    constructor (props){
        super(props);

    }

    render() {
        return (
            <div className='loginForm'>
                <h2 className='formHeader'>Вход</h2>
                <div className="input-container">
                    <label htmlFor='email'>E-mail</label>
                    <div className="input">
                        <input type="email" name='email' id='email' required={true}/>
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor='password'>Пароль</label>
                    <div className="input">
                        <input type="password" name='password' id='password' required={true}/>
                    </div>
                </div>
                <p>Зарегистрироваться</p>
                <div className='submitBtn'>Войти</div>
            </div>
        )
    }
}

export default LoginForm