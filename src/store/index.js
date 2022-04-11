import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import users from './users'
import userInfo from './userInfo'
import posts from './posts'

const reducer = combineReducers({
  users,
  user: userInfo,
  posts,
})
const store = configureStore({
  reducer,
})
export default store
