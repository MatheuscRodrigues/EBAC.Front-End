import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type FiltroState = {
  filtro: string
}

const initialState: FiltroState = {
  filtro: ''
}

const filtroSlice = createSlice({
  name: 'filtro',
  initialState,
  reducers: {
    alterarFiltro: (state, action: PayloadAction<string>) => {
      state.filtro = action.payload
    }
  }
})

export const { alterarFiltro } = filtroSlice.actions

export default filtroSlice.reducer
