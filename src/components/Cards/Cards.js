import React from 'react'
import Card from "../Card/Card";
import './Cards.css'

export class Cards extends React.Component {


    render() {

        return (
            <div className='cards'>
                {this.props.cards.map((card, i) => <Card key={i} src={card.src} age={card.age} name={card.name}
                                                              sex={card.sex} text={card.text} id={card.id}
                                                              animal={card.animal}/>)}
                {this.props.status === 'loading' && <div className='loading'><i className="fa fa-spinner spinner" aria-hidden="true"/></div>}
            </div>

        )
    }
}
