import React from 'react'
import {Link, NavLink} from "react-router-dom";
import './AnimalPage.css'
export class AnimalPage extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.getInformation(this.props.match.params.id)

    }

    render() {
        console.log(this.props)
        const animal = this.props.animal;
        return (
            <div className='container animalPage'>
                <div className="link">
                    <NavLink to='/' className='menuLink'>
                        <i className="fa fa-long-arrow-left arrow" aria-hidden="true"/> Назад
                    </NavLink>
                </div>
                <div className="animalInfo">
                    <div className="imgContainer">
                        <img src={animal.src} alt="animal"/>
                    </div>
                    <div className="information">
                        <div className="animalStats">
                            <h3>{animal.name}</h3>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}