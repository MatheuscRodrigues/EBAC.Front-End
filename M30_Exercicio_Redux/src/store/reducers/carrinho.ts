import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

//Tipagem do state
type CarrinhoState = {
  itens: Produto[]
}
const initialState: CarrinhoState = {
  itens: []
}

const carrinhoSlice = createSlice({
  name: 'carrinho',
  initialState, //Estado inicial do reducer

  //Aqui fica todas as actions que poderão serem executadas pelo reducer, nesse caso temos apenas a action 'adicionar'.
  reducers: {
    /*PayloadAction é usado para tipar as ações corretamente, garantindo que o payload seja do tipo esperado.
      No exemplo abaixo, o reducer espera uma action do tipo PayloadAction<Produto>, o que significa que ele espera receber uma ação com um payload que é do tipo Produto. */
    adicionar: (state, action: PayloadAction<Produto>) => {
      const p = action.payload
      if (state.itens.find((produto) => produto.id === p.id)) {
        alert('Item já adicionado')
      } else {
        state.itens.push(p)
      }
    }
  }
})

export const { adicionar } = carrinhoSlice.actions //Importação desestruturada da action adicionar
export default carrinhoSlice.reducer //Importação padrão do reducer
