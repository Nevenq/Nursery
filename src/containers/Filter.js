import {connect} from "react-redux";
import Filter from "../components/Filter/Filter";
import {
    changeFilter, clearCards, filterCardsSuccess,
    requestCards,
    requestCardsSuccess,
    resetFilter,
    submitFilter
} from "../actionCreators/actionCreators";
import {api} from "../index";
import {withRouter} from "react-router";

export default withRouter(connect(
    (state) => ({
        filters : state.filter.allFilters,
        selected : state.filter.selectedFilters,
        changed : state.filter.changed

    }),
    (dispatch,props) =>({
        handleChange: (e) =>{
            dispatch(changeFilter({name : e.target.name, value : e.target.value}))
        },
        handleReset : (value) =>{
            dispatch(resetFilter())
        },
        handleSubmit : (value) =>{
            dispatch(clearCards())
            dispatch(requestCards());
            props.history.push('/')
            if(value.length > 0)
                dispatch(() => api.filterCards(JSON.stringify(value.reduce((a,b) => ({...a,[b[0]]:b[1]}),{}))).then(cards => dispatch(filterCardsSuccess(cards))).then(dispatch(submitFilter())));
            else{
                dispatch(() => api.getCards().then(cards => dispatch(filterCardsSuccess(cards))).then(() => dispatch(submitFilter())))
            }

        }

    })
)(Filter))