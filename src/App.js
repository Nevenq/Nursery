import React, {Component} from 'react';
import './App.css';
import Menu from "./components/Menu/Menu";
import Main from "./components/Main/Main";
import {BrowserRouter} from "react-router-dom";
import {Route} from "react-router";
import About from "./components/About/About";
import Rules from "./components/Rules/Rules";

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div className="App">
                    <header>
                        <Menu/>
                    </header>
                </div>
                <Route exact path='/' component={Main}/>
                <Route path='/about' component={About} />
                <Route path='/rules' component={Rules} />
            </BrowserRouter>
        );
    }
}

export default App;
