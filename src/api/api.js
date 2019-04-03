import {cards} from "./Cards";
import {store} from '../index'

export default class Api{
    constructor(config){
    }

    getCards(){
        return delay(2000).then(() => cards)
    }
    filterCards(filter){
        return delay(3000).then(() => cards.filter(card => card.id > 2))
    }
    getCard(id){
        const card = store.getState().cards.cards.find(card => card.id === Number(id));
        if(card)
            return Promise.resolve(card);
        console.log(card);
        return delay(500).then(() => cards.find(card => card.id === Number(id)))
    }
}
function delay(time) {
    return new Promise((resolve => setTimeout(resolve,time)))}

