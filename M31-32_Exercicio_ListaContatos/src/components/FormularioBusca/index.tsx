import { useDispatch, useSelector } from 'react-redux'
import { ContainerBusca, InputBusca, LabelBusca } from './style'
import { RootReducer } from '../../store'
import { alterarFiltro } from '../../store/reducers/filtroReducer'

const FormularioBusca = () => {
  const dispatch = useDispatch()
  const { filtro } = useSelector((state: RootReducer) => state.filtro)

  return (
    <ContainerBusca>
      <LabelBusca htmlFor="Busca">Busca</LabelBusca>
      <InputBusca
        type="text"
        placeholder="Busque por nome ou sobrenome"
        id="Busca"
        value={filtro}
        onChange={(e) => dispatch(alterarFiltro(e.target.value))}
      ></InputBusca>
    </ContainerBusca>
  )
}

export default FormularioBusca
