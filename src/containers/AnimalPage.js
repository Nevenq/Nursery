import {connect} from "react-redux";
import {AnimalPage} from "../components/AnimalPage/AnimalPage";
import {api} from "../index";
import {animalPageSuccess, getCard} from "../actionCreators/actionCreators";
import {Redirect, withRouter} from "react-router";
import React from "react";
import {NoMatch} from "../components/NoMatch/NoMatch";
export default connect(
    (state) =>({
        animal : state.animal
    }),
    (dispatch,props) => ({
        getInformation : (id) =>{
            dispatch(() => api.getCard(id)
                .then(card => dispatch(animalPageSuccess(card))))

        }

    })
)(withRouter(AnimalPage))