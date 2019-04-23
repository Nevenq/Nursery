import React, {Component} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch} from "react-router";
import About from "./components/About/About";
import Rules from "./components/Rules/Rules";
import {store} from './index'
import {requestCards, requestCardsSuccess} from "./actionCreators/actionCreators";
import {api} from "./";
import logo from './images/Питомник.svg'
import {NoMatch} from "./components/NoMatch/NoMatch";
import AnimalPage from "./containers/AnimalPage";

class App extends Component {
    componentDidMount() {
        store.dispatch(requestCards());
        store.dispatch((dispatch) => api.getCards().then(cards => dispatch(requestCardsSuccess(cards))))
    }

    render() {
        return (
            <div className="App">
                <header>
                    <Menu/>
                </header>
                <Switch>
                    <Route exact path='/about' component={About}/>
                    <Route exact path='/rules' component={Rules}/>
                    <Route exact path='/card/:id' component={AnimalPage}/>
                    <Route exact path='/:params?' component={Main}/>
                    <Route component={NoMatch}/>
                </Switch>
                <footer className='footer'>
                    <Link to='/'><img src={logo} alt="logo" className="logo"/></Link>
                    <div className="info">
                        <p>+7 900 000 00 00</p>
                        <p>г. Екатеринбург, ул. Мира, 29</p>
                    </div>
                </footer>
            </div>
        );
    }
}

export default App;
