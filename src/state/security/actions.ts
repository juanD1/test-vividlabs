import * as actionsTypes from "./constants";
import {
  LoginRequestAction,
  LoginSuccessAction,
  UpdateRequestAction,
  UpdateSuccessAction,
  SecurityAction,
  SecurityActionError,
} from "./types";
import { CurrentUser, FirebaseUser } from "types/users";

export const loginRequest = (): LoginRequestAction => {
  return {
    type: actionsTypes.LOGIN_REQUEST,
  };
};

export const loginSuccess = (
  user: CurrentUser | FirebaseUser | null | any
): LoginSuccessAction => {
  return {
    type: actionsTypes.LOGIN_SUCCESS,
    user,
  };
};

export const loginFailure = (response: string): SecurityActionError => {
  return {
    type: actionsTypes.LOGIN_FAILURE,
    response,
  };
};

export const updateRequest = (user: {
  displayName: string;
}): UpdateRequestAction => {
  return {
    type: actionsTypes.UPDATE_REQUEST,
    user,
  };
};

export const updateSuccess = (
  user: CurrentUser | FirebaseUser | null | any
): UpdateSuccessAction => {
  return {
    type: actionsTypes.UPDATE_SUCCESS,
    user,
  };
};

export const logoutRequest = (): SecurityAction => {
  return {
    type: actionsTypes.LOGOUT_REQUEST,
  };
};

export const clearLoginFailure = (): SecurityAction => {
  return {
    type: actionsTypes.CLEAR_LOGIN_FAILURE,
  };
};

export const clearCreateUserFailure = (): SecurityAction => {
  return {
    type: actionsTypes.CLEAR_LOGIN_FAILURE,
  };
};

export const clearSecurity = (): SecurityAction => {
  return {
    type: actionsTypes.CLEAR_SECURITY,
  };
};
