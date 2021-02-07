import { put, takeLatest } from "redux-saga/effects";
import { app } from "firebase/config";
import { LOGIN_REQUEST, LOGOUT_REQUEST } from "./constants";
import { LoginRequestAction, SecurityAction } from "./types";
import { loginFailure, loginSuccess } from "./actions";
import { FirebaseUser } from "types/users";

function* requestLogin(action: LoginRequestAction) {
  try {
    const user: FirebaseUser = app.auth().currentUser;
    if (user && user.providerData[0]) {
      yield put(loginSuccess(user.providerData[0]));
    } else {
      yield put(loginFailure("An error ocurred on login process"));
    }
  } catch (e) {
    yield put(
      loginFailure(
        e.response && e.response.data
          ? e.response.data.Message.description
          : "An error ocurred"
      )
    );
  }
}

function requestLogout(action: SecurityAction) {
  app.auth().signOut();
}

export default function* contextSagas() {
  yield takeLatest(LOGIN_REQUEST, requestLogin);
  yield takeLatest(LOGOUT_REQUEST, requestLogout);
}
