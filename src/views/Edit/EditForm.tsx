import React from "react";
import { Form } from "formik";
import Input from "components/common/Input";
import Button from "components/common/Button";
import { StyledSpanError } from "./styles";

type Props = {
  handleChange: () => void;
  handleSubmit: () => void;
  values: any;
  errors: any;
  isValid: boolean;
};

const Edit = ({
  handleChange,
  values,
  errors,
  isValid,
  handleSubmit,
}: Props) => {
  return (
    <Form>
      <>
        <Input
          type="displayName"
          label="displayName"
          handleOnChange={handleChange}
          value={values.displayName}
          name="displayName"
        />
        <StyledSpanError>{errors.displayName}</StyledSpanError>
        <Button
          margin="16px auto"
          disabled={!isValid}
          title="Update"
          handleOnClik={handleSubmit}
        />
      </>
    </Form>
  );
};

export default Edit;
