import * as actionTypes from '../actionTypes/actionTypes'
import {combineReducers} from "redux";

const MainReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.MAIN_CARD:


    }
    return state
};

const filterState = {
    allFilters : {cats :['Абиссинская', 'Сиамская', 'Шотландская', 'Британская', 'Мейн-кун', 'Манчкин'].sort(),
        dogs:['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Британская', 'Мейн-кун', 'Манчкин'].sort(),
        rodents :['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Британская', 'Мейн-кун', 'Манчкин'].sort(),
        reptiles :['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Британская', 'Мейн-кун', 'Манчкин'].sort(),
        birds : ['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Британская', 'Мейн-кун', 'Манчкин'].sort(),
        others:['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Британская', 'Мейн-кун', 'Манчкин'].sort()},
    selectedFilters : {cats : '',dogs:'',rodents : '',reptiles : '',birds:'',others : '',sex:'',age:''}
};
const FilterReducer = (state = filterState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FILTER:
            return {...state,selectedFilters: {...state.selectedFilters,[action.payload.name] : action.payload.value}};
        case actionTypes.RESET_FILTER:
            return {...state, selectedFilters: {}};
        case actionTypes.SUBMIT_FILTER:
            console.log(state)

    }
    return state

};
const cardsState = [];

const CardsReducer = (state = cardsState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_CARD:
            return {...state};
        case actionTypes.REQUEST_CARD_SUCCESS:
            return [...action.cards];
        case actionTypes.REQUEST_CARD_FAIL:
            return {...state};

    }
    return state;

};

export default combineReducers({
    main: MainReducer,
    filter: FilterReducer,
    cards: CardsReducer
})