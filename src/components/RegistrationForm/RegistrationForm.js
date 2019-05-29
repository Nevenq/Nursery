import React, {Component} from 'react'
import './RegistrationForm.css'
import $ from 'jquery'
import {api} from '../../index'

const initialState = {
    email:'',
    name : '',
    password:'',
    repeatPass:'',
    confirmedPass : false,
}

class RegistrationForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...initialState};

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.comparePass = this.comparePass.bind(this);
        this.formClose = this.formClose.bind(this);
    }
    formClose = () => {
        $('.registrationForm').fadeOut(300, () => {
            this.setState({...initialState});
            document.body.style.overflow = "auto"})
    }
    handleSubmit(e){
        e.preventDefault();
        let inputs = [].slice.call(document.querySelector('#registerForm').querySelectorAll('input'))
        if (!inputs.some(i => {
            if (!i.validity.valid) {
                i.reportValidity();
                return true;
            }
        }) || !this.state.confirmedPass) {
            api.register({email: this.state.email, name : this.state.name, password: this.state.repeatPass})
                .then(response => {
                    console.log(response.status);
                    if(response.status === 422){
                        document.querySelector("#registerForm #email").setCustomValidity('Пользователь с такой почтой уже зарегистрирован');
                        document.querySelector("#registerForm #email").reportValidity();
                    }
                    if(response.status === 200){
                        $('.registrationForm').fadeOut(300, () => $('.loginForm').fadeIn(300))
                    }
                    else{
                        $('.registrationForm').fadeOut(300, () => document.body.style.overflow = "auto")
                    }
                })

        }
    }
    handleChange(e){
        if(!e || !e.target) return;
        this.setState({[e.target.name] : e.target.value})


    }
    comparePass(e){
        if(!e || !e.target || !e.target.value) return;
        if(e.target.value.length === 0){
            e.target.value.style.outline = "initial"
            return
        }
        if(e.target.value !== this.state.password){
            e.target.style.outline = '2px solid red';
            this.state.confirmedPass = false
        } else {
            e.target.style.outline = 'initial';
            this.state.confirmedPass = true
        }

    }


    render() {
        return (
            <div className='registrationForm'>
                <div className="register">
                    <form id="registerForm">
                        <h2 className='formHeader'>Регистрация</h2>
                        <div className="input-container">
                            <label htmlFor='email'>E-mail</label>
                            <div className="input">
                                <input type="email" value={this.state.email} name='email' id='email' required={true} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor='name'>Имя</label>
                            <div className="input">
                                <input type="text" name='name' id='name' required={true} value={this.state.name} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor='password'>Пароль</label>
                            <div className="input">
                                <input type="password" name='password' id='password' required={true} value={this.state.password} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor='repeat'>Повторите пароль</label>
                            <div className="input">
                                <input type="password" name='repeatPass' id='repeat' required={true} value={this.state.repeatPass} onChange={(e) => {this.handleChange(e); this.comparePass(e)}}/>
                            </div>
                        </div>
                    </form>
                    <div className='submitBtn' onClick={this.handleSubmit} >Зарегистрироваться</div>
                </div>
                <div className="formBack" onClick={this.formClose}/>
            </div>
        )
    }
}

export default RegistrationForm