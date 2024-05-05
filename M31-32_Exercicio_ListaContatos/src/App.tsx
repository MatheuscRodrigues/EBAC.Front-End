import { Provider } from 'react-redux'
import BarraLateral from './containers/BarraLateral'
import ListaContato from './containers/ListaContatos'
import EstiloGlobal, { Container } from './styles'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <EstiloGlobal />
      <Container>
        <BarraLateral />
        <ListaContato />
      </Container>
    </Provider>
  )
}

export default App
