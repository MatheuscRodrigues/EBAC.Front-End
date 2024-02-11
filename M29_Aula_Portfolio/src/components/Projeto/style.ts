import styled from "styled-components";

export const Item = styled.div`
  border: 1px solid ${(props) => props.theme.corBordaLista};
  border-radius: 4px;
  padding: 16px;
`;

export const Link = styled.a`
  background-color: ${(props) => props.theme.corBotaoLista};
  color: ${(props) => props.theme.corDeFundo};
  padding: 8px;
  border-radius: 4px;
  display: inline-block;
  margin-top: 32px;
  font-size: 14px;
  text-decoration: none;
  cursor: pointer;
`;
