import Titulo from "../../components/Titulo";
import { P } from "../../components/Paragrafo/style";
import { GitHubSection } from "./styles";

const Sobre = () => (
  <section>
    <Titulo fontSize={20}>Sobre Mim</Titulo>
    <P tipo="primaria">
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa eius
      ratione repellendus incidunt. Temporibus repudiandae suscipit ullam
      veniam? Commodi maxime omnis accusantium, facilis officia minima rerum et
      nesciunt quo harum?
    </P>
    <GitHubSection>
      <img src="https://github-readme-stats.vercel.app/api?username=ogiansouza&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" />
      <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=ogiansouza&layout=compact&langs_count=7&theme=dracula" />
    </GitHubSection>
  </section>
);

export default Sobre;
