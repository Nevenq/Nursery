import React, {Component} from 'react'
import './LoginForm.css'
import $ from 'jquery'
import {api} from '../../index'
const initialState = {email:'',password:''};
class LoginForm extends Component {
    constructor(props) {
        super(props);
        this.state = {...initialState};
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleClose = this.handleClose.bind(this);

    }
    handleClose = () =>{
        $('.loginForm').fadeOut(300, () => {
            document.body.style.overflow = "auto";
            this.setState({...initialState});
        })
    }

    handleChange = (e) => {
        let warning = document.querySelector('#loginForm .warning');
        if(!e || !e.target || !warning) return;
        warning.style.display = 'none';
        this.setState({[e.target.name] : e.target.value})
    };
    handleSubmit(e){
        e.preventDefault();
        let inputs = [].slice.call(document.querySelector('#loginForm').querySelectorAll('input'));
        if (!inputs.some(i => {
            if (!i.validity.valid) {
                i.reportValidity();
                return true;
            }
        })) {
            api.login({email: this.state.email, password: this.state.password})
                .then(response => {
                    if(response.status === 403){
                        document.querySelector('#loginForm .warning').style.display = "inline"
                    } else{
                        $('.loginForm').fadeOut(300, this.handleClose())
                    }
                })

        }
    }

    render() {
        return (
            <div className='loginForm'>
                <div className="login">
                    <form id={"loginForm"}>
                        <h2 className='formHeader'>Вход</h2>
                        <span className='warning' style={{color:'red',position:'relative',top:'-10px',display:'none'}}>Неверная почта или пароль</span>
                        <div className="input-container">
                            <label htmlFor='email'>E-mail</label>
                            <div className="input">
                                <input type="email" name='email' id='email' required={true} value={this.state.email} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <div className="input-container">
                            <label htmlFor='password'>Пароль</label>
                            <div className="input">
                                <input type="password" name='password' id='password' required={true} value={this.state.password} onChange={this.handleChange}/>
                            </div>
                        </div>
                        <p onClick={registration}>Зарегистрироваться</p>
                    </form>
                    <div className='submitBtn' onClick={this.handleSubmit}>Войти</div>
                </div>
                <div className="formBack" onClick={this.handleClose}/>
            </div>

        )
    }
}
const registration = () =>{
    $('.loginForm').fadeOut(300, () => $('.registrationForm').fadeIn(300))
}


export default LoginForm