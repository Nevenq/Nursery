import {connect} from "react-redux";
import {Cards} from "../components/Cards/Cards";
import {requestCardsSuccess} from "../actionCreators/actionCreators";
import {api} from "../";

export default connect(
    (state) =>({
        cards : state.cards,
    }),
    (dispatch) => ({
        getCards : () =>{
            const asyncGetCards = () =>{
                return dispatch =>{
                    api.getCards().then(cards => dispatch(requestCardsSuccess(cards)))
                }
            };
            dispatch(asyncGetCards());
        }
    })
)(Cards)