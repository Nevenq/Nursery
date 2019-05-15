import * as actionTypes from '../actionTypes/actionTypes'
import {combineReducers} from "redux";

const MainReducer = (state = [], action) => {
    switch (action.type) {
        case actionTypes.MAIN_CARD:


    }
    return state
};

const filterState = {
    allFilters : {cats :['Абиссинская', 'Сиамская', 'Шотландская', 'Британская', 'Мейн-кун', 'Манчкин', 'Бенгальская', 'Бурманская', 'Сфинкс', 'Европейская',
                         'Корниш-рекс','Невская маскарадная', 'Норвежская лесная', 'Оцикет', 'Персидская', 'Русская голубая', 'Японский бобтейл'].sort(),
        dogs:['Бигль', 'Немецкая овчарка', 'Самоедская лайка', 'Акита', 'Аляскинский маламут', 'Бульдог', 'Боксер', 'Дог', 'Йоркширский терьер', 'Овчарка', 'Пекинес',
              'Болонка', 'Бультерьер', 'Вельш-корги', 'Далматин', 'Доберман', 'Кокер спаниель', 'Колли', 'Лабрадор', 'Лайка', 'Мастиф', 'Мопс', 'Немецкая овчарка',
              'Питбуль', 'Пудель', 'Ретривер', 'Ротвейлер', 'Русская борзая', 'Сибирский хаски', 'Спаниель', 'Такса', 'Той-терьер', 'Чау-чау', 'Чихуахуа', 'Шарпей',
              'Шпиц'].sort(),
        rodents :['Морские свинки', 'Хомяки', 'Кролики декоративные', 'Кролики', 'Шиншиллы', 'Крысы', 'Мыши', 'Дегу', 'Хорьки', 'Бурундуки'].sort(),
        reptiles :['Ящерицы', 'Змеи', 'Черепахи морские', 'Черепахи сухопутные', 'Лягушки', 'Жабы'].sort(),
        birds : ['Куры', 'Волнистые попугаи', 'Канарейки', 'Попугаи Какаду', 'Утки', 'Гуси', 'Попугаи', 'Попугаи неразлучники', 'Голуби'].sort(),
        others:['Улитки', 'Еноты', 'Ежи', 'Обезьянки', 'Енотовидные собаки'].sort()},
    selectedFilters : {cats : [],dogs:[],rodents : [],reptiles : [],birds:[],others : [],sex:[],age:[]},
    changed : false
};
const FilterReducer = (state = filterState, action) => {
    switch (action.type) {
        case actionTypes.CHANGE_FILTER:
            let values = state.selectedFilters[action.payload.name];
            console.log(values);
            if(values.some(v => v === action.payload.value)){
                values = values.filter(v => v !== action.payload.value)
            } else{
                values.push(action.payload.value)
            }
            return {...state,selectedFilters: {...state.selectedFilters,[action.payload.name] : values},changed : true};
        case actionTypes.RESET_FILTER:
            return {...state, selectedFilters: {cats : [],dogs:[],rodents : [],reptiles : [],birds:[],others : [],sex:[],age:[]},changed: true};
        case actionTypes.SUBMIT_FILTER:
            return {...state,changed : false}

    }
    return state

};
const cardsState = {
    cards : [],
    status : 'loading'
};

const CardsReducer = (state = cardsState, action) => {
    switch (action.type) {
        case actionTypes.REQUEST_CARD:
            return {...state,status:'loading'};
        case actionTypes.REQUEST_CARD_SUCCESS:
            return {cards : [...state.cards,...action.cards],status:'loaded'};
        case actionTypes.FILTER_CARD_SUCCESS:
            return {cards : [...action.cards],status:'loaded'}
        case actionTypes.REQUEST_CARD_FAIL:
            return {...state,status : 'failed'};
        case actionTypes.GET_CARD:
            return state.cards.find(card => card.id === action.id)
        case actionTypes.CLEAR_CARDS:
            return {...state,cards :[]}

    }
    return state;

};
const animalPageState = {};
const AnimalPageReducer = (state = animalPageState,action) =>{
    switch (action.type) {
        case actionTypes.ANIMAL_PAGE_SUCCESS:
            return {...state,...action.card}

    }
    return state
}

const reducers =  combineReducers({
    main: MainReducer,
    filter: FilterReducer,
    cards: CardsReducer,
    animal : AnimalPageReducer,
});
export default (state,action) =>{
    switch (action.type) {
        case actionTypes.CLEAR_STATE:
            state = undefined;

    }
    return reducers(state,action)
}