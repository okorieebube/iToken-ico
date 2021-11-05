// REDUCERS
import { combineReducers } from "redux";
import { FetchCrowdsaleDetailsReducer } from "./crowdsale-details-reducer";
import { FetchTokenArtifactReducer } from "./token-details-reducer";

export default combineReducers({
  FetchTokenArtifact: FetchTokenArtifactReducer,
  FetchCrowdsaleArtifact: FetchCrowdsaleDetailsReducer,
});
