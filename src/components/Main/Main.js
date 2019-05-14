import React, {Component} from 'react';
import './Main.css'
import Filter from "../../containers/Filter";
import Cards from "../../containers/Cards";
import {Route, Switch} from "react-router";
import About from "../About/About";
import {api, store} from "../../index";
import {Status} from "../../Constants";
import {clearStore, requestCards, requestCardsSuccess} from "../../actionCreators/actionCreators";


class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {
            scroll : 0,

        };
        this.handleScroll = this.handleScroll.bind(this);
    }
    componentDidMount() {
        api.status = Status.loading;
        store.dispatch(requestCards());
        store.dispatch((dispatch) => api.getCards().then(cards => dispatch(requestCardsSuccess(cards))).then(api.status = Status.ready));
        window.addEventListener('scroll',this.handleScroll,true)

    }
    componentWillUnmount() {
        window.removeEventListener('scroll',this.handleScroll,true);

    }
    handleScroll = (e) =>{
        if(!e.target.body) return;
        this.setState({scroll : window.pageYOffset + document.documentElement.clientHeight});
        if(Math.abs(this.state.scroll - e.target.body.clientHeight) < 30 && api.status !== 'loading' && api.pageNumber !== -1){
            api.status = Status.loading;
            this.props.getCards();
        }

    };

    render() {

        return (
            <Switch>
                <Route path='/' render={() =>(
                    <section id='main' ref ={comp => this.main = comp} >
                        <div className="container" >
                            <h2 style={{'marginTop': '30px', 'marginBottom': '20px'}}>Найдите любимца в нашем
                                Питомнике!</h2>
                            <div className='main' ref = {r => this.cards = r}>
                                <Filter/>
                                <Cards />
                            </div>
                        </div>
                    </section>
                )}/>
            </Switch>
        )
    }
}

export {Main}