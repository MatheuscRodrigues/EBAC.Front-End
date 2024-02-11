import { ThemeProvider } from "styled-components";
import lightTheme from "./themes/Light";
import darkTheme from "./themes/Dark";
import EstiloGlobal, { Container } from "./style";
import Projetos from "./containers/Projetos";
import SideBar from "./containers/Sidebar";
import Sobre from "./containers/Sobre";
import { useState } from "react";

function App() {
  const [estaUsandoTemaDark, setEstaUsandoTemaDark] = useState(false);

  function trocaTema() {
    setEstaUsandoTemaDark(!estaUsandoTemaDark);
  }
  return (
    <ThemeProvider theme={estaUsandoTemaDark ? darkTheme : lightTheme}>
      <EstiloGlobal />
      <Container>
        <SideBar trocaTema={trocaTema} />
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  );
}

export default App;
