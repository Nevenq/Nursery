import {cards} from "./Cards";
import {store} from '../index'
import {Status} from "../Constants";
import React from "react";
import {Redirect} from "react-router";
import {NoMatch} from "../components/NoMatch/NoMatch";

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
        return fetch(`${this.url}/animal/${id}`)
            .then(response => response.json())
            .catch(err => {
            })
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

    login(user) {
        return fetch(`${this.url}/account/login`, {
            method: 'POST',
            credentials: "same-origin",
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json-patch+json'
            },
            body: JSON.stringify(user),
        })
    }

    register(user) {
        return fetch(`${this.url}/account/register`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user),
        })
    }
}