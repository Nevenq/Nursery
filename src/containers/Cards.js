import {connect} from "react-redux";
import {Cards} from "../components/Cards/Cards";

export default connect(
    (state) =>({
        cards : state.cards.cards,
        status : state.cards.status,
    }),
    (dispatch) => ({
    })
)(Cards)