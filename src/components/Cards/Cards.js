import React from 'react'
import Card from "../Card/Card";

export class Cards extends React.Component{
    constructor(props){
        super(props);
    }
    componentDidMount() {
        this.props.getCards();
    }

    render(){
        return (
            <div className='cards'>
                {this.props.cards.map((card,i) => <Card key = {i} src={card.src} age={card.age} name={card.name} sex={card.sex} text={card.text}/>)}
            </div>
        )
    }
}
