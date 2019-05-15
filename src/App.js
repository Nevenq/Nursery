import React, {Component} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import ReactDOM from 'react-dom'
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
import AnimalForm from "./components/AnimalForm/AnimalForm";

class App extends Component {
    constructor(props) {
        super(props);
        this.handleScroll = this.handleScroll.bind(this);
        this.handleClick = this.handleClick.bind(this)
    }

    componentDidMount() {
        console.log(this.props)
        store.dispatch(requestCards());
        store.dispatch((dispatch) => api.getCards().then(cards => dispatch(requestCardsSuccess(cards))).then(api.status = Status.ready));
        window.addEventListener('scroll', this.handleScroll);
        document.querySelector('.anchor').addEventListener('click',this.handleClick)

    }

    componentWillUnmount() {
        window.removeEventListener('scroll', this.handleScroll)
        document.querySelector('.anchor').removeEventListener('click',this.handleClick)
    }

    handleScroll = (e) => {
        let headerHeight = Number(getComputedStyle(e.target.querySelector('#header')).height.replace(/\D/g, ''));
        let anchor = document.querySelector('.anchor');
        if (window.pageYOffset <= headerHeight) {
            anchor.style.opacity = 0;
        } else {
            anchor.style.opacity = 1;
        }
    };
    handleClick = (e) => {
        window.scrollTo(0,0);
    }

    render() {
        return (
            <div className="App">
                <div className="anchor" onClick={this.handleClick}><span>Наверх</span></div>
                <header id='header'>
                    <Menu/>
                </header>
                <div className="app-main">
                    <Switch>
                        <Route exact path='/about' render={() => {
                            return (
                                <div>
                                    <About/>
                                </div>
                            )
                        }}/>
                        <Route exact path='/rules' render={() => {
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
                </div>

                <footer className='footer'>
                    <Link to='/'><img src={logo} alt="logo" className="logo"/></Link>
                    <div className="info">
                        <p>+7 900 000 00 00</p>
                        <p>г. Екатеринбург, ул. Мира, 29</p>
                    </div>
                </footer>
                <AnimalForm/>
            </div>
        );
    }
}


export default withRouter(App);
