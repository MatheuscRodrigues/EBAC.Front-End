import { configureStore } from '@reduxjs/toolkit'

import contatosReducers from './reducers/contatosReducers'
import filtroReducers from './reducers/filtroReducer'

const store = configureStore({
  reducer: {
    contatos: contatosReducers,
    filtro: filtroReducers
  }
})

export type RootReducer = ReturnType<typeof store.getState>

export default store
