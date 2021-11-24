import { CrowdsaleService } from "../../services/crowdsale-services";
import { CrowdsaleConstants } from "../_constants/crowdsale-constants";


const {
    FETCH_DETAILS_REQUEST,
    FETCH_DETAILS_SUCCESS,
    FETCH_DETAILS_FAILURE,
    BUY_TOKENS_REQUEST,
    BUY_TOKENS_SUCCESS,
    BUY_TOKENS_FAILURE

} = CrowdsaleConstants;

export const fetchCrowdsaleDetails = () => (dispatch) => {
    console.log('fetching crowdsale details...')

    dispatch({ type: FETCH_DETAILS_REQUEST });

    CrowdsaleService.fetch_details()
    .then((response) => {
        console.log({response})
      return dispatch({
        type: FETCH_DETAILS_SUCCESS,
        payload: response
      });
    })
    .catch((error) => {
        console.log({error})
    });
    
};

export const buyTokens = (amount) => (dispatch) => {
  console.log('buying tokens from crowdsale...')
  dispatch({ type: BUY_TOKENS_REQUEST });

  CrowdsaleService.buyTokens(amount)
  .then((response) => {
      console.log({response})
    return dispatch({
      type: BUY_TOKENS_SUCCESS,
      payload: response
    });
  })
  .catch((error) => {
      console.log({error})
  });

}