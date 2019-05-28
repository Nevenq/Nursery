import React, {Component} from 'react'
import './RegistrationForm.css'
import $ from 'jquery'
import {api} from '../../index'

class RegistrationForm extends Component {
    constructor (props){
        super(props);

    }

    render() {
        return (
            <div className='registrationForm'>
                <h2 className='formHeader'>Регистрация</h2>
                <div className="input-container">
                    <label htmlFor='email'>E-mail</label>
                    <div className="input">
                        <input type="email" name='email' id='email' required={true}/>
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor='name'>Имя</label>
                    <div className="input">
                        <input type="text" name='name' id='name' required={true}/>
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor='password'>Пароль</label>
                    <div className="input">
                        <input type="password" name='password' id='password' required={true}/>
                    </div>
                </div>
                <div className="input-container">
                    <label htmlFor='repeat'>Повторите пароль</label>
                    <div className="input">
                        <input type="password" name='repeat' id='repeat' required={true}/>
                    </div>
                </div>
                <div className='submitBtn'>Зарегистрироваться</div>
            </div>
        )
    }
}

export default RegistrationForm