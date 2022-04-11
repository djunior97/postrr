import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
}

const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {
    setUsers: (state, action) => ({
      ...state,
      list: action.payload,
    }),
  },
})

// Actions
export const { setUsers } = usersSlice.actions

// Selectors
export const SelectUsers = (state) => state.users.list

export default usersSlice.reducer
