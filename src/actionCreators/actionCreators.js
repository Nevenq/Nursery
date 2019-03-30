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

export const requestCardsFail = () =>{
    return {type : actionTypes.REQUEST_CARD_FAIL}
};
