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
                        {[0,1,2,3,4,5,6,7,8,9].map((a,i) => <Card key ={i}/>)}
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
