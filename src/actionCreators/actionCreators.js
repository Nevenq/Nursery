import * as actionTypes from '../actionTypes/actionTypes'

export const mainCard = () => ({
    type : actionTypes.MAIN_CARD,
});

export const changeFilter = (value) => ({
    type : actionTypes.CHANGE_FILTER,
    payload : value,
});
export const resetFilter = (values) => ({
    type : actionTypes.RESET_FILTER,
});
export const submitFilter = () => ({
    type : actionTypes.SUBMIT_FILTER,
});

export const requestCards = () =>{
    return {type : actionTypes.REQUEST_CARD}
};

export const requestCardsSuccess = (cards) =>{
    return {type : actionTypes.REQUEST_CARD_SUCCESS,cards}
};
export const filterCardsSuccess = (cards) =>{
    return {type : actionTypes.FILTER_CARD_SUCCESS,cards}
};

export const requestCardsFail = () =>{
    return {type : actionTypes.REQUEST_CARD_FAIL}
};
export const clearStore = () =>{
    return {type : actionTypes.CLEAR_STATE}
};
export const clearCards = () =>({type : actionTypes.CLEAR_CARDS});

export const animalPageSuccess= (card) =>{
    return {
        type : actionTypes.ANIMAL_PAGE_SUCCESS,
        card
    }
};