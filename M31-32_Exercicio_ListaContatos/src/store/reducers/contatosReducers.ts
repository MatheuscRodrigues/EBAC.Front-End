import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import Contatos from '../../models/ContatosClass'

type ContatosState = {
  itens: Contatos[]
}

const initialState: ContatosState = {
  itens: []
}

const contatosSlice = createSlice({
  name: 'contatosSlice',
  initialState,
  reducers: {
    remover: (state, action: PayloadAction<number>) => {
      state.itens = state.itens.filter((tarefa) => tarefa.id !== action.payload)
    },
    editar: (state, action: PayloadAction<Contatos>) => {
      const indexContato = state.itens.findIndex(
        (t) => t.id === action.payload.id
      )
      if (indexContato >= 0) {
        state.itens[indexContato] = action.payload
      }
    },
    adicionar: (state, action: PayloadAction<Omit<Contatos, 'id'>>) => {
      const contatoExistente = state.itens.find(
        (t) => t.nome.toLowerCase() === action.payload.nome.toLowerCase()
      )
      if (contatoExistente) {
        alert(
          `Você já possui um contato cadastro com o nome informado. Por favor, verificar.`
        )
      } else {
        const ultimoContato = state.itens[state.itens.length - 1]
        const contatoNovo = {
          ...action.payload,
          id: ultimoContato ? ultimoContato.id + 1 : 1
        }
        state.itens.push(contatoNovo)
      }
    }
  }
})

export const { remover, editar, adicionar } = contatosSlice.actions
export default contatosSlice.reducer
