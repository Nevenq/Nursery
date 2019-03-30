import {connect} from "react-redux";
import Filter from "../components/Filter/Filter";
import {changeFilter, resetFilter, submitFilter} from "../actionCreators/actionCreators";

export default connect(
    (state) => ({
        filters : state.filter.allFilters,
        selected : state.filter.selectedFilters

    }),
    (dispatch) =>({
        handleChange: (e) =>{
            dispatch(changeFilter({name : e.target.name, value : e.target.value}))
        },
        handleReset : () =>{
            dispatch(resetFilter())
        },
        handleSubmit : () =>{
            dispatch(submitFilter())

        }

    })
)(Filter)