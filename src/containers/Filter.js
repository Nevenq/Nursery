import {connect} from "react-redux";
import Filter from "../components/Filter/Filter";
import {
    changeFilter,
    requestCards,
    requestCardsSuccess,
    resetFilter,
    submitFilter
} from "../actionCreators/actionCreators";
import {api} from "../index";

export default connect(
    (state) => ({
        filters : state.filter.allFilters,
        selected : state.filter.selectedFilters,
        changed : state.filter.changed

    }),
    (dispatch) =>({
        handleChange: (e) =>{
            dispatch(changeFilter({name : e.target.name, value : e.target.value}))
        },
        handleReset : () =>{
            dispatch(resetFilter())
        },
        handleSubmit : (value) =>{
            dispatch(requestCards());
            if(value.length > 0)
                dispatch(() => api.filterCards(JSON.stringify(value.reduce((a,b) => ({...a,[b[0]]:b[1]}),{}))).then(cards => dispatch(requestCardsSuccess(cards))).then(dispatch(submitFilter())));
            else{
                dispatch(() => api.getCards().then(cards => dispatch(requestCardsSuccess(cards))).then(() => dispatch(submitFilter())))
            }

        }

    })
)(Filter)