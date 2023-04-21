import { createSlice, type PayloadAction } from '@reduxjs/toolkit'
import type { RootState } from '../store'

export interface UserState {
  name: string
  loggedIn: boolean
}

const initialState: UserState = {
  name: 'Milo Kusold',
  loggedIn: true
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    login: (state, { payload: name }: PayloadAction<string>) => {
      state.name = name
      state.loggedIn = true
    },
    logout: (state) => {
      state.name = ''
      state.loggedIn = false
    }
  }
})

export const { login, logout } = userSlice.actions

export const selectUser = (state: RootState) => state.user

export default userSlice.reducer
