import {cards} from "./Cards";
import {store} from '../index'
import {Status} from "../Constants";

export default class Api{
    constructor(config){
        this.pageSize = 25;
        this.pageNumber = 0
        this.status = Status.ready;
    }

    getCards(){
        this.pageNumber++;
        return delay(2000).then(() => cards.slice(this.pageSize*(this.pageNumber - 1),this.pageSize*(this.pageNumber - 1) + this.pageSize))
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

