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
    followAction: (state, action) => {
      const userInfo = state

      userInfo.info.following.push(Number(action.payload.userId))

      localStorage.setItem(userInfoStorageKey, JSON.stringify(userInfo.info))

      return userInfo
    },
    unfollowAction: (state, action) => {
      const userInfo = { ...state.info }

      const newFollowing = userInfo.following.filter(
        (f) => f !== Number(action.payload.userId),
      )

      localStorage.setItem(
        userInfoStorageKey,
        JSON.stringify({ ...userInfo, following: newFollowing }),
      )

      return {
        ...state,
        info: {
          ...userInfo,
          following: newFollowing,
        },
      }
    },
  },
})

// Actions
export const { setUserInfo, followAction, unfollowAction } = userSlice.actions

// Selectors
export const SelectUserInfo = (state) => state.user.info

export default userSlice.reducer
