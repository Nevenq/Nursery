import React, {Component} from 'react';
import './Main.css'
import Filter from "../../containers/Filter";
import Cards from "../../containers/Cards";
import {Route, Switch} from "react-router";
import About from "../About/About";



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }

    render() {

        return (
            <Switch>
                <Route path='/' render={() =>(
                    <section id='main'>
                        <div className="container">
                            <h2 style={{'marginTop': '30px', 'marginBottom': '20px'}}>Найдите любимца в нашем
                                Питомнике!</h2>
                            <div className='main'>
                                <Filter/>
                                <Cards />
                            </div>
                        </div>
                    </section>
                )}/>
                <Route path={`${this.props.match.path}/:cardId`} component={About}/>
            </Switch>



        )
    }
}

export {Main}
export default Main