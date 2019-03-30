import {cards} from "./Cards";

export default class Api{
    constructor(config){
    }

    getCards(){
        return delay(2000).then(() => cards)
    }
    filterCards(filter){
        return delay(3000).then(() => cards.filter(card => card.id > 2))
    }
}
function delay(time) {
    return new Promise((resolve => setTimeout(resolve,time)))}

