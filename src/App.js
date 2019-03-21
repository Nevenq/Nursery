import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Menu from "./Menu/Menu";
import Card from "./Card/Card";

class App extends Component {
    render() {
        return (
            <div className="App">
                <header>
                    <Menu/>
                </header>
                <section id="main">
                    <div className="container">
                        <h2>Найдите любимца в нашем Питомнике!</h2>
                        <Card/>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
