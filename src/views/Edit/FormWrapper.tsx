import React from "react";
import { Formik } from "formik";
import EditForm from "./EditForm";
import schema from "./schema";
import { useSelector } from "react-redux";
import { SecurityState } from "state/security/types";
import { CurrentUser } from "types/users";

type Props = {
  handleSubmit: (e: any) => void;
};

const Edit = ({ handleSubmit }: Props) => {
  const authUser: CurrentUser | any = useSelector(
    (state: SecurityState | any) => state.security.user
  );

  return (
    <Formik
      component={EditForm}
      initialValues={{
        displayName: authUser.displayName,
      }}
      validationSchema={schema}
      onSubmit={handleSubmit}
    />
  );
};

export default Edit;
