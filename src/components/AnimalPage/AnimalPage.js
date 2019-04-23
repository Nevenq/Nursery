import React from 'react'
import {Link, NavLink} from "react-router-dom";
import './AnimalPage.css'

export class AnimalPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(this.props.history);
        this.goBack = this.goBack.bind(this)
    }

    componentDidMount() {
        this.props.getInformation(this.props.match.params.id)

    }
    goBack = () =>{
        this.props.history.goBack()
    }

    render() {
        const animal = this.props.animal;
        return (
            <div className='container animalPage'>
                <div className="link">
                    <div onClick={this.goBack} className='menuLink'>
                        <i className="fa fa-long-arrow-left arrow" aria-hidden="true"/> Назад
                    </div>
                </div>
                <div className="animalInfo">
                    <div className="imgContainer">
                        <img src={animal.src} alt="animal"/>
                    </div>
                    <div className="animal-information">
                        <div className="animal-name">{animal.name}</div>
                        <div className="animal-stat">
                            <div className="stats-label">Порода:</div>
                            <div className="stats-value">{animal.kind}</div>
                        </div>
                        <div className="animal-stat">
                            <div className="stats-label">Пол:</div>
                            <div className="stats-value">{makeSex(animal.sex)}</div>
                        </div>
                        <div className="animal-stat">
                            <div className="stats-label">Возраст:</div>
                            <div className="stats-value">{animal.age}</div>
                        </div>
                        <div className="animal-stat">
                            <div className="stats-label">Стерилизация:</div>
                            <div className="stats-value">{animal.sterilization}</div>
                        </div>
                        <div className="animal-stat">
                            <div className="stats-label">Прививки:</div>
                            <div className="stats-value">{animal.vaccination}</div>
                        </div>
                        <div className="animal-stat">
                            <div className="stats-label">Вет. паспорт:</div>
                            <div className="stats-value">{animal.passport}</div>
                        </div>
                    </div>
                    <div className="contact-info">
                        <h3 className="contact-heading">Понравился питомец?</h3>
                        <p className="contact-text">Вы можете забрать его по адресу:
                            г. Екатеринбург, ул. Мира, 29.
                            <br/><br/>Позвоните нам по номеру +79000000000, чтобы мы закрепили питомца за Вами.
                            <br/><br/>Обратите внимание, что в нашем питомнике животные отдаются совершеннолетним
                            людям по паспорту под договор ответственного содержания, на корм не ниже премиум-класса,
                            в жилье с сетками на окнах и застекленным балконом. Строго без свободного выгула.
                        </p>
                    </div>
                </div>
                <div className="animal-description">
                    <h3>Описание:</h3>
                    <p>{animal.text}</p>
                </div>
            </div>
        );
    }
}

const makeSex = (sex) => {
    return sex === 'male' ? 'Мальчик' : 'Девочка';
};