import Avatar from "../../components/Avatar";
import { BotaoTema, ContainerSideBar, Perfil } from "./style";

type Props = {
  trocaTema: () => void;
};

const SideBar = (props: Props) => (
  <Perfil>
    <ContainerSideBar>
      <Avatar></Avatar>
      <BotaoTema onClick={props.trocaTema}>Trocar Tema</BotaoTema>
    </ContainerSideBar>
  </Perfil>
);

export default SideBar;
