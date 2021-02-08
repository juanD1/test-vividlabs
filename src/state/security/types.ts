import { Action } from "../types";
import { CurrentUser, FirebaseUser } from "types/users";

export interface SecurityState {
  isAuthenticated: boolean;
  user: CurrentUser | FirebaseUser | null | any;
  errorMessage: string;
  securityAction: string;
  securityError: boolean;
}

export interface SecurityAction extends Action {}

export interface SecurityActionError extends Action {
  response: string;
}

export interface LoginRequestAction extends Action {}

export interface LoginSuccessAction extends Action {
  user: CurrentUser | FirebaseUser | null | any;
}

export interface UpdateRequestAction extends Action {
  user: { displayName: string };
}
export interface UpdateSuccessAction extends Action {
  user: CurrentUser | FirebaseUser | null | any;
}
