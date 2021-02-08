import styled from "styled-components";

type Props = {
  fontSize?: string;
  margin?: string;
  fontWeight?: string;
};

export const StyledSpan = styled.span<Props>`
  display: block;
  font-size: ${(props) => props.fontSize && props.fontSize};
  margin: ${(props) => props.margin && props.margin};
  font-weight: ${(props) => props.fontWeight && props.fontWeight};
`;
