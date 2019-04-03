import {connect} from "react-redux";
import {AnimalPage} from "../components/AnimalPage/AnimalPage";
import {api} from "../index";
import {animalPageSuccess, getCard} from "../actionCreators/actionCreators";
export default connect(
    (state) =>({
        animal : state.animal
    }),
    (dispatch) => ({
        getInformation : (id) =>{
            dispatch(() => api.getCard(id).then(card => dispatch(animalPageSuccess(card))));
        }

    })
)(AnimalPage)