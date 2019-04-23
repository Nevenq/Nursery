import React, {Component} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import {BrowserRouter, Link} from "react-router-dom";
import {Route, Switch, withRouter} from "react-router";
import About from "./components/About/About";
import Rules from "./components/Rules/Rules";
import {store} from './index'
import {clearStore, requestCards, requestCardsSuccess} from "./actionCreators/actionCreators";
import {api} from "./";
import logo from './images/Питомник.svg'
import {NoMatch} from "./components/NoMatch/NoMatch";
import AnimalPage from "./containers/AnimalPage";
import Main from "./containers/Main";
import {Status} from "./Constants";

class App extends Component {
    componentDidMount() {
    }

    render() {
        return (
            <div className="App">
                <header>
                    <Menu/>
                </header>
                <Switch>
                    <Route exact path='/about' render={() =>{
                        {api.pageNumber = 0}
                        {store.dispatch(clearStore())}
                        return (
                            <div>
                                <About/>
                            </div>
                        )
                    }}/>
                    <Route exact path='/rules' render={() =>{
                        {api.pageNumber = 0}
                        {store.dispatch(clearStore())}
                        return (
                            <div>
                                <Rules/>
                            </div>
                        )
                    }}/>
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

export default withRouter(App);
