import {cards} from "./Cards";
import {store} from '../index'
import {Status} from "../Constants";

export default class Api {
    constructor(config) {
        this.url = config;
        this.pageSize = 25;
        this.status = Status.ready;
        this.pageNumber = 1;
    }

    getCards() {
        return fetch(`${this.url}/animal`)
            .then(response => response.json())
            .then((cards) => cards.slice(this.pageSize * (this.pageNumber - 1), this.pageSize * (this.pageNumber - 1) + this.pageSize))
    }

    filterCards(filter) {

    }

    getCard(id) {
        return fetch(`${this.url}/animal/${id}`).then(response => response.json())
    }

    addCard(card) {
        let a = JSON.stringify(card);
        console.log(a);
        return fetch(`${this.url}/animal`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: a
        });
    }

    getFile(src) {
        return fetch(`${this.url}/files/${src}`)
            .then(response => response.url)

    }
}