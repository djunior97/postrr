import { createSlice } from '@reduxjs/toolkit'
import { posts as mockPosts } from 'mocks/posts'

const postsStorageKey = 'posts@posterr'

const getPosts = () => {
  let posts = JSON.parse(localStorage.getItem(postsStorageKey))

  if (!posts) {
    posts = mockPosts

    localStorage.setItem(postsStorageKey, JSON.stringify(posts))
  }

  return posts
}

const initialState = {
  list: getPosts(),
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    newPost: (state, action) => ({
      ...state,
      list: [...state.list, action.payload],
    }),
  },
})

// Actions
export const { newPost } = postsSlice.actions

// Selectors
export const SelectPosts = (state) => state.users.list

export default postsSlice.reducer
