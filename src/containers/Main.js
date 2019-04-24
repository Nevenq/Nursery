import {connect} from "react-redux";
import {Main} from "../components/Main/Main";
import {api} from "../index";
import {requestCards, requestCardsSuccess} from "../actionCreators/actionCreators";
import {Status} from "../Constants";

export default connect(
    null,
    (dispatch,props) => ({
        getCards : () =>{
            dispatch(requestCards());
            dispatch(() => api.getCards().then(cards => {
                dispatch(requestCardsSuccess(cards));
                if(api.pageNumber > 1){
                    props.history.push(`/?pageNumber=${api.pageNumber}`);

                }
                if(cards.length < api.pageSize)
                    api.pageNumber = -1;
                api.status = Status.ready
            }))
        }
    })
)(Main)