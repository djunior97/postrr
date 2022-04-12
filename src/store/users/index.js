import { createSlice } from '@reduxjs/toolkit'
import { users as mockUsers } from 'mocks/users'

const usersStorageKey = 'users@posterr'

const getUsers = () => {
  let users = JSON.parse(localStorage.getItem(usersStorageKey))

  if (!users) {
    users = mockUsers

    localStorage.setItem(usersStorageKey, JSON.stringify(users))
  }

  return users
}

const initialState = {
  list: getUsers(),
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

export const SelectUserById = (state, userId) =>
  state.users.list.find((u) => u.id === Number(userId))

export default usersSlice.reducer
