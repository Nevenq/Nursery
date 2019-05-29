import React from 'react'
import img from './sample-card-image.jpg'
import './Card.css'
import 'font-awesome/css/font-awesome.min.css';
import {Link} from "react-router-dom";
import {api} from "../../index";

const Card = ({src = img, animal = 'cats', name = 'Рыжик', text = 'Очень ласковый и любвеобильный котик. Любит греться на солнышке', sex, bDate, id}) => {
    return (
        <Link to={`/card/${id}`}>
            <div className="card">
                <div className="animal" style={getSrc(src)}/>
                <div className="text-wrapper">
                    <h3 className='animal-name'>{trimText(name,15)}</h3>
                    <p className='animal-text'>{trimText(text)}</p>
                    <div className="animal-data" style={{color: colorText(sex)}}>
                        {makeSex(sex)} <span className='age'>{makeAge(bDate)}</span>
                    </div>
                </div>
            </div>
        </Link>
    )
};
const getSrc = (src) =>{
    let extension = src && src[0] && src[0].split('.')[1];
    if(!src || !src[0] || !['png','jpg','jpeg'].some(a => a === extension)){
        return {
            backgroundImage: `url(${img})`
        }
    }
    return {
        backgroundImage : src[0] ? `url(${api.url}/files/${src[0]})` : `url(${img})`
    }
}
const makeSex = (sex) => {
    const sexIcon = sex === 0
        ? <i className="fa fa-mars" aria-hidden="true"/>
        : <i className="fa fa-venus" aria-hidden="true"/>;
    return sexIcon

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
    let strMonth = month > 0 ? `${month} мес. `: '';
    let strDay = day > 0 ? `${day} дн. ` : '';
    if(!strYear && !strMonth) return 'Не указан';
    return strYear + strMonth;

};
const colorText = (sex) => {
    return sex === 0 ? '#2196f3' : '#f06292'
};
const trimText = (text, value = 64) => {
    return text.length >= value - 3 ? text.slice(0, value - 3).trim() + '...' : text;


};
export default Card;