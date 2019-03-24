import React, {Component} from 'react';
import './App.css';
import Menu from "./Menu/Menu";
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
                        <h2 style={{'marginTop':'30px','marginBottom':'20px'}}>Найдите любимца в нашем Питомнике!</h2>
                        <Main/>
                    </div>
                </section>
            </div>
        );
    }
}

export default App;
