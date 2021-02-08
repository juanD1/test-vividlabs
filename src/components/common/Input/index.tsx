import React from "react";
import { Container, CustomInput, CustomBar, CustomLabel } from "./styles";

type Props = {
  style?: object;
  id?: string;
  type?: string;
  name?: string;
  placeholder?: string;
  label: string;
  value: string | null;
  disabled?: boolean;
  handleOnChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

const Input = ({
  style,
  id,
  type,
  name,
  placeholder,
  label,
  value,
  disabled,
  handleOnChange,
}: Props) => (
  <Container {...style}>
    <CustomInput
      {...style}
      id={id}
      type={type}
      name={name}
      placeholder={placeholder}
      value={value || ""}
      disabled={disabled}
      onChange={handleOnChange}
      required
    />
    <CustomBar {...style} />
    <CustomLabel {...style}>{label}</CustomLabel>
  </Container>
);

export default Input;
