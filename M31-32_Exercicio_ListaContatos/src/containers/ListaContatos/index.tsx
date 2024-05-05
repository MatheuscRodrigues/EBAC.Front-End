import { useSelector } from 'react-redux'
import { RootReducer } from '../../store'

import Contato from '../../components/CardContato'
import { Main } from './style'

const ListaContato = () => {
  const { itens } = useSelector((state: RootReducer) => state.contatos)
  const { filtro } = useSelector((state: RootReducer) => state.filtro)

  const filtraTarefas = () => {
    return itens.filter(
      (item) => item.nome.toLowerCase().search(filtro.toLowerCase()) >= 0
    )
  }

  return (
    <Main>
      <ul>
        {filtraTarefas().map((c) => (
          <li key={c.id}>
            <Contato
              id={c.id}
              nome={c.nome}
              contato={c.contato}
              email={c.email}
            />
          </li>
        ))}
      </ul>
    </Main>
  )
}
export default ListaContato
