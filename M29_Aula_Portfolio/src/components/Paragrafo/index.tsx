import { P } from "./style";

export type Props = {
  children: string;
  tipo?: "primaria" | "secundaria";
  fontSize?: number;
};

const Paragrafo = ({ fontSize, children, tipo = "primaria" }: Props) => (
  <P tipo={tipo} fontSize={fontSize}>
    {children}
  </P>
); //Objeto foi desestruturado pois foi necessário inserir uma definição padrão na propriedade 'tipo'.

export default Paragrafo;
