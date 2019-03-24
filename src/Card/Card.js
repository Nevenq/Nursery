import React from 'react'
import img from '../images/sample-card-image.jpg'
import './Card.css'
import 'font-awesome/css/font-awesome.min.css';
const Card = ({src = img, name = 'Рыжик', text = 'Очень ласковый и любвеобильный котик. Любит греться на солнышке', sex = 'male', age = "1 год"}) => {
    return (
        <a href="#">
            <div className="card">
                <img src={img} alt="animal" className='animal'/>
                <div className="text-wrapper">
                    <h3 className='animal-name'>{name}</h3>
                    <p className='animal-text'>{trimText(text)}</p>
                    <div className="animal-data" style={{color: colorText(sex)}}>
                        {makeSex(sex)} <span className='age'>{age}</span>
                    </div>
                </div>
            </div>
        </a>

    )
};
const makeSex = (sex) => {
    const sexIcon = sex === 'male'
        ? <i className="fa fa-mars" aria-hidden="true"/>
        : <i className="fa fa-venus" aria-hidden="true"/>;
    return sexIcon

};
const colorText = (sex) => {
    return sex === 'male' ? '#2196f3' : '#f06292'
}
const trimText = (text, value = 64) => {
    return text.length >= value - 3 ? text.slice(0, value - 3).trim() + '...' : text;


}
export default Card;
export {Card};