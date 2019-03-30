import React, {Component} from 'react';
import './Main.css'
import Card from "../Card/Card";
import Filter from "../../containers/Filter";
import Cards from "../../containers/Cards";



class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {

    }

    render() {
        return (
            <section id='main'>
                <div className="container">
                    <h2 style={{'marginTop': '30px', 'marginBottom': '20px'}}>Найдите любимца в нашем
                        Питомнике!</h2>
                    <div className='main'>
                        <Filter/>
                        <Cards/>
                    </div>
                </div>
            </section>


        )
    }
}

export {Main}
export default Main