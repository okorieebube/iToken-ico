// REDUCERS
import { combineReducers } from "redux";
import { FetchCrowdsaleDetailsReducer } from "./crowdsale-details-reducer";
import { FetchTokenArtifactReducer } from "./token-details-reducer";
import { UserAuthReducer } from "./user-auth-reducer";

export default combineReducers({
  FetchTokenArtifact: FetchTokenArtifactReducer,
  FetchCrowdsaleArtifact: FetchCrowdsaleDetailsReducer,
  UserAuth: UserAuthReducer,
});
