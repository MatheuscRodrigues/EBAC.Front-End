import styled from "styled-components";
import { Props } from ".";

export const Titulo = styled.h3<Props>`
  font-size: ${(props) => (props.fontSize ? props.fontSize + "px" : "14px")};
  color: ${(props) => props.theme.corPrincipal};
  margin-bottom: 16px;
  font-weight: bold;
`;
