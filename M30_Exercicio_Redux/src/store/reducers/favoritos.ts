import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Produto } from '../../App'

type FavoritosState = {
  itens: Produto[]
}

const initialState: FavoritosState = {
  itens: []
}

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState,
  reducers: {
    favoritar: (state, action: PayloadAction<Produto>) => {
      const f = action.payload

      if (state.itens.find((favorito) => favorito.id === f.id)) {
        // Se o produto já estiver nos favoritos, remova-o
        state.itens = state.itens.filter((favorito) => favorito.id !== f.id)
      } else {
        // Se o produto não estiver nos favoritos, adicione-o
        state.itens.push(f)
      }
    }
  }
})

export const { favoritar } = favoritosSlice.actions
export default favoritosSlice.reducer
