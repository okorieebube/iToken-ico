import { TokenConstants } from "../_constants/token-constants";
import {TokenService} from '../../services/token-services'


const {
    FETCH_ARTIFACT_REQUEST,
    FETCH_ARTIFACT_SUCCESS,
    FETCH_ARTIFACT_FAILURE,

} = TokenConstants;

export const fetchTokenDetails = () => (dispatch) => {
    console.log('fetching token details...')

    dispatch({ type: FETCH_ARTIFACT_REQUEST });

    TokenService.fetch_details()
    .then((response) => {
        console.log({response})
      return dispatch({
        type: FETCH_ARTIFACT_SUCCESS,
        payload: response
      });
    })
    .catch((error) => {
        console.log({error})
    });
    
};