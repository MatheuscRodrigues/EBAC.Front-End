import Paragrafo from "../Paragrafo";
import Titulo from "../Titulo";
import { StyleAvatar } from "./style";

const Avatar = () => (
  <StyleAvatar>
    <img src="https://github.com/matheuscrodrigues.png" alt="" />
    <Titulo fontSize={25}>Matheus Camargo</Titulo>
    <a target="blank" href="https://github.com/matheuscrodrigues">
      <Paragrafo fontSize={18} tipo="secundaria">
        @matheuscrodrigues
      </Paragrafo>
    </a>
    <Paragrafo tipo="primaria">Programador Full-Stack</Paragrafo>
  </StyleAvatar>
);

export default Avatar;
