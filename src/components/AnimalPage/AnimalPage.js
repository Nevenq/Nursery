import React from 'react'
import {Link, NavLink} from "react-router-dom";
import img from '../Card/sample-card-image.jpg'
import './AnimalPage.css'
import {api} from '../../index'
import {Redirect} from "react-router";

export class AnimalPage extends React.Component {
    constructor(props) {
        super(props);
        this.goBack = this.goBack.bind(this)
        this.getSrc = this.getSrc.bind(this);
    }

    componentDidMount() {
        this.props.getInformation(this.props.match.params.id)

    }
    componentDidCatch(err,info){

    }
    goBack = () =>{
        this.props.history.goBack()
    }
    getSrc = () =>{
        if(!this.props.animal || !this.props.animal.wayToFiles || this.props.animal.wayToFiles.length < 1) return img;
        return `${api.url}/files/${this.props.animal.wayToFiles[0]}`
    }

    render() {
        const animal = this.props.animal;
        return (
            <div className='container animalPage'>
                <div className="link">
                    <div onClick={this.goBack} className='menuLink'>
                         Назад
                    </div>
                </div>
                <div className="animalInfo">
                    <div className="imgContainer">
                        <img src={this.getSrc()} alt="animal"/>
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
                            <div className="stats-value">{makeAge(animal.bDate)}</div>
                        </div>
                        <div className="animal-stat">
                            <div className="stats-label">Стерилизация:</div>
                            <div className="stats-value">{animal.sterilization ? 'Есть' : 'Нет'}</div>
                        </div>
                        <div className="animal-stat">
                            <div className="stats-label">Прививки:</div>
                            <div className="stats-value">{animal.vaccination ? 'Есть' : 'Нет'}</div>
                        </div>
                        <div className="animal-stat">
                            <div className="stats-label">Вет. паспорт:</div>
                            <div className="stats-value">{animal.passport ? 'Есть' : 'Нет'}</div>
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
                    <p>{animal.description}</p>
                </div>
            </div>
        );
    }
}
const makeSex = (sex) => {
    return sex === 0 ? 'Мальчик' : 'Девочка';
};
const makeAge = (bDate) =>{
    let birthDate = new Date(bDate);
    let diffDate = new Date() - birthDate;
    let day = diffDate/1000/60/60/24;
    let year = parseInt(day/365);
    day -=year*365;
    let month = parseInt(day/28);
    day = parseInt(day - month*28);
    let strYear = year >= 1 ? `${year} год ` : '';
    let strMonth = month > 0 ? `${month}мес `: '';
    let strDay = day > 0 ? `${day} дн. ` : '';
    if(!strYear && !strMonth && !strDay) return 'Не указан'
    return strYear + strMonth + strDay;
}