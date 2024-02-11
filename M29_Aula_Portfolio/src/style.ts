import styled, { createGlobalStyle } from "styled-components";
import { Theme } from "./themes/Dark"; //Importação necessária para alterar o Dafault Theme do createGlobalStyle, permitindo obter propriedades dinamicas.

const EstiloGlobal = createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'JetBrains Mono', monospace;
    list-style: none;
    text-decoration: none;
  }

  body {
    padding: 80px 0 80px 0;
    background-color: ${(props) => (props.theme as Theme).corDeFundo};

    @media (max-width: 768px) {
      padding-top: 40px;
      max-width: 100%;
    }
  }

`;

export const Container = styled.div`
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 256px auto;
  column-gap: 56px;

  @media (max-width: 768px) {
    max-width: 95%;
    display: block;
  }
`;

export default EstiloGlobal;
