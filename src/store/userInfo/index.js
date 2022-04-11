import { createSlice } from '@reduxjs/toolkit'
import { user as userMock } from 'mocks/user'

const userInfoStorageKey = 'userInfo@posterr'

const getUserInfo = () => {
  let user = JSON.parse(localStorage.getItem(userInfoStorageKey))

  if (!user) {
    user = userMock

    localStorage.setItem(userInfoStorageKey, JSON.stringify(user))
  }

  return user
}

const initialState = {
  info: getUserInfo(),
}

const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    setUserInfo: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
})

// Actions
export const { setUserInfo } = userSlice.actions

// Selectors
export const SelectUserInfo = (state) => state.user.info

export default userSlice.reducer
