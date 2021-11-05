import { CrowdsaleConstants } from "../_constants/crowdsale-constants";

const { FETCH_DETAILS_REQUEST, FETCH_DETAILS_SUCCESS, FETCH_DETAILS_FAILURE } =
CrowdsaleConstants;


  
export function FetchCrowdsaleDetailsReducer(state={}, action) {
    switch (action.type) {
        case FETCH_DETAILS_REQUEST:
            return {...state, loading: true}
        case FETCH_DETAILS_SUCCESS:
            return {...state, data: action.payload, loading: false}
        case FETCH_DETAILS_FAILURE:
            return {...state, error: action.payload, loading: false}
        default:
            return state;
    }
}