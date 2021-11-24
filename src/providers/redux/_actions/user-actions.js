import { UserService } from "../../services/user-services";
import { UserAuthConstants } from "../_constants/user-auth-constants";

const { USER_AUTH_REQUEST, USER_AUTH_SUCCESS, USER_AUTH_FAILURE } =
  UserAuthConstants;

export const ConnectWallet = () => (dispatch) => {
  console.log("connecting to user wallet...");

  dispatch({ type: USER_AUTH_REQUEST });

  UserService.loadUserAccount()
    .then((response) => {
      return dispatch({
        type: USER_AUTH_SUCCESS,
        payload:{ userWallet: response} ,
      });
    })
    .catch((error) => {
      console.log({ error });
      return dispatch({
        type: USER_AUTH_FAILURE,
        payload: error,
      });
    });
};
