import { Action } from "../types";
import { CurrentUser, FirebaseUser } from "types/users";

export interface SecurityState {
  isAuthenticated: boolean;
  user: CurrentUser | FirebaseUser | null | any;
  errorMessage: string;
  securityAction: string;
  securityError: boolean;
}

// export type Credentials = {
//   email: string;
//   password: string;
// };

// export type User = {
//   username: string;
//   email: string;
//   password: string;
// };

// export interface LoggedUser {
//   id: string;
//   username: string;
//   email: string;
// }

export interface SecurityAction extends Action {}

export interface SecurityActionError extends Action {
  response: string;
}

export interface LoginRequestAction extends Action {
  // credentials: CurrentUser;
}

export interface LoginSuccessAction extends Action {
  user: CurrentUser | FirebaseUser | null | any;
}

// export interface CreateUserRequestAction extends Action {
//   user: User;
// }

// export interface CreateUserSuccessAction extends Action {
//   user: User;
// }
