import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import { Item, Link } from "./style";

const Projeto = () => {
  return (
    <Item>
      <Titulo fontSize={16}>Lista de Tarefas</Titulo>
      <Paragrafo tipo="secundaria">
        Projeto portfolio utilizando React com Typescript
      </Paragrafo>
      <Link>Vizualizar</Link>
    </Item>
  );
};

export default Projeto;
