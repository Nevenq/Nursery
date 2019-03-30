import {cards} from "./Cards";

export default class Api{
    constructor(config){
    }

    getCards(){
        return delay(2000).then(() => cards)
    }
}
function delay(time) {
    return new Promise((resolve => setTimeout(resolve,time)))}

