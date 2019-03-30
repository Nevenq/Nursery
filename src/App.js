import React, {Component} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {Route, Switch} from "react-router";
import About from "./components/About/About";
import Rules from "./components/Rules/Rules";
import {store} from './index'
import {requestCards, requestCardsSuccess} from "./actionCreators/actionCreators";
import {api} from "./";
import logo from './images/Питомник.svg'

class App extends Component {
    componentDidMount() {
        store.dispatch(requestCards());
        store.dispatch((dispatch) => api.getCards().then(cards => dispatch(requestCardsSuccess(cards))))
    }

    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header>
                        <Menu/>
                    </header>
                </div>
                <Switch>
                    <Route exact path='/' component={Main}/>
                    <Route exact path='/about' component={About}/>
                    <Route path='/rules' component={Rules}/>
                    <Route exact path='/card/:id' component={About}/>
                </Switch>
                <footer className='footer'>
                    <img src={logo} alt="logo" className="logo"/>
                    <div className="info">
                        <p>+7 900 000 00 00</p>
                        <p>г. Екатеринбург, ул. Мира, 29</p>
                    </div>
                </footer>
            </BrowserRouter>
        );
    }
}

export default App;
