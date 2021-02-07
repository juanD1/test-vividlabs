import React from "react";
import {
  Route,
  Redirect,
  RouteProps,
  RouteComponentProps,
} from "react-router-dom";
import { useSelector } from "react-redux";
import { SecurityState } from "state/security/types";
import { CurrentUser } from "types/users";

interface Props extends RouteProps {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
}

const PrivateRoute = ({ component: Component, ...rest }: Props) => {
  const authUser: CurrentUser | any = useSelector(
    (state: SecurityState | any) => state.security.user
  );

  return (
    <Route
      {...rest}
      render={(props) =>
        authUser ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
};

export default PrivateRoute;
