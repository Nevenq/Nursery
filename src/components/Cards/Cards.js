import React from 'react'
import Card from "../Card/Card";
import './Cards.css'

export class Cards extends React.Component {


    render() {
        console.log(this.props)
        return (
            <div className='cards'>
                {this.props.cards.map((card, i) => <Card key={i} src={card.wayToFiles} age={card.age} name={card.name}
                                                              sex={card.sex} text={card.description} id={card.id}
                                                              animal={card.animal} bDate={card.bDate}/>)}
                {this.props.status === 'loading' && <div className='loading'><i className="fa fa-spinner spinner" aria-hidden="true"/></div>}
            </div>

        )
    }
}
