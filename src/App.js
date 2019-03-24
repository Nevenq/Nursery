import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./Menu/Menu";
import Card from "./Card/Card";
import Main from "./Main/Main";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Menu/>
                </header>
                <section id="main">
                    <div className="container">
                        <h2 style={{'margin-top':'40px','margin-bottom':'20px'}}>Найдите любимца в нашем Питомнике!</h2>
                        <Main/>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
