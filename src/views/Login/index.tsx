import React from "react";
import { useDispatch, useSelector } from "react-redux";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import { app, googleAuthProvider, facebookAuthProvider } from "firebase/config";
import { faPizzaSlice } from "@fortawesome/free-solid-svg-icons";
import actions from "state/actions";
import Icon from "components/common/Icon";
import { SecurityState } from "state/security/types";
import { CurrentUser } from "types/users";
import { colors } from "styles/globalStyles";
import { StyledContainer } from "./styles";

const Login: React.FC = (props: any) => {
  const dispatch = useDispatch();
  const authUser: CurrentUser | any = useSelector(
    (state: SecurityState | any) => state.security.user
  );

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [googleAuthProvider, facebookAuthProvider],
    callbacks: {
      signInSuccessWithAuthResult: () => {
        dispatch(actions.security.loginRequest());
        props.history.push("/home");
        return false;
      },
    },
  };

  if (authUser) {
    props.history.push("/home");
  }

  return (
    <StyledContainer>
      <Icon
        icon={faPizzaSlice}
        style={{ margin: "64px 0" }}
        size="8x"
        color={colors.primary}
      />
      <h1 className="mb-4">Welcome to Scx's Pizza</h1>
      <p className="mb-4">
        Here you can select premium ingredients and we will prepare with love
        your dream pizza
      </p>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={app.auth()} />
    </StyledContainer>
  );
};

export default Login;
