import FormularioBusca from '../../components/FormularioBusca'
import FormularioCadastro from '../../components/FormularioCadastro'
import { Aside } from './styles'

const BarraLateral = () => {
  return (
    <Aside>
      <FormularioBusca />
      <FormularioCadastro />
    </Aside>
  )
}

export default BarraLateral
