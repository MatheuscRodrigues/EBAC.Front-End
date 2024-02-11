import styled from "styled-components";

export const Perfil = styled.aside`
  text-align: center;
`;

export const BotaoTema = styled.button`
  margin: 24px 0 40px 0;
  padding: 8px;
  border-radius: 12px;
  background-color: ${(props) => props.theme.corPrincipal};
  color: ${(props) => props.theme.corDeFundo};
  border: none;
  cursor: pointer;
`;

export const ContainerSideBar = styled.div`
  position: sticky;
  top: 80px;
  left: 0;
`;
