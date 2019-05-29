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
            console.log(e.currentTarget)
            dispatch(changeFilter({name : e.currentTarget.dataset.name, value : e.target.value}))
        },
        handleReset : (e) =>{
            e.target.parentNode.querySelectorAll('input[type="checkbox"]').forEach(input => input.checked = false)

            dispatch(resetFilter())
        },
        handleSubmit : (value) =>{
            dispatch(clearCards());
            dispatch(requestCards());
            props.history.push('/');
            //const a = JSON.stringify(value.reduce((a,b) => ({...a,[b[0]]:b[1]}),{})).then(cards => dispatch(filterCardsSuccess(cards))).then(dispatch(submitFilter()));
            let filters = {kinds:{cats:[...value.cats]}}
            console.log(value.filter(arr => arr[1].length !== 0).reduce((a,b) => ({...a,[b[0]]:b[1]}),{}));
            if(value.length > 0){
                dispatch(() => api.filterCards());

            }
            else{
                dispatch(() => api.getCards().then(cards => dispatch(filterCardsSuccess(cards))).then(() => dispatch(submitFilter())))
            }

        }

    })
)(Filter))