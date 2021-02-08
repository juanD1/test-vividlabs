import React from "react";
import { RouteComponentProps } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Swal from "sweetalert2";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import { app } from "firebase/config";
import Layout from "components/common/Layout";
import Icon from "components/common/Icon";
import actions from "state/actions";
import { SecurityState } from "state/security/types";
import { CurrentUser } from "types/users";
import { colors, Img } from "styles/globalStyles";
import FormEditWrapper from "./FormWrapper";

const Edit = (props: RouteComponentProps) => {
  const authUser: CurrentUser | any = useSelector(
    (state: SecurityState | any) => state.security.user
  );
  const dispatch = useDispatch();

  const handleSubmit = (e: any) => {
    const user = app.auth().currentUser;
    if (user) {
      user
        .updateProfile({
          displayName: e.displayName,
        })
        .then(function () {
          dispatch(actions.security.updateSuccess(e.displayName));
          Swal.fire({
            icon: "success",
            title: "Updated user!",
            confirmButtonColor: colors.secondary,
          }).then((result) => props.history.push("/home"));
        })
        .catch(function (error) {
          dispatch(actions.security.loginFailure("Error updatting name"));
        });
    }
  };

  return (
    <Layout>
      <span style={{ textAlign: "center" }}>
        <h1 style={{ margin: "24px auto" }}>Edit profile</h1>
      </span>
      {!authUser?.photoURL ? (
        <Icon
          style={{ float: "right", margin: 16 }}
          icon={faUser}
          color={colors.primary}
          size="lg"
        />
      ) : (
        <Img
          className="rounded-circle"
          src={authUser?.photoURL}
          alt="user"
          width="88px"
          margin="16px auto"
          display="block"
          cursor="pointer"
        />
      )}
      <FormEditWrapper handleSubmit={handleSubmit} />
    </Layout>
  );
};

export default Edit;
