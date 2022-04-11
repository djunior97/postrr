import { createSlice } from '@reduxjs/toolkit'
import { posts as mockPosts } from 'mocks/posts'

const postsStorageKey = 'posts@posterr'

const getPosts = () => {
  let posts = JSON.parse(localStorage.getItem(postsStorageKey))

  if (!posts) {
    posts = mockPosts

    localStorage.setItem(postsStorageKey, JSON.stringify(posts))
  }

  return posts.reverse()
}

const initialState = {
  list: getPosts(),
  filtered: getPosts(),
}

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    newPost: (state, action) => ({
      ...state,
      list: [action.payload, ...state.list],
    }),
  },
})

// Actions
export const { newPost } = postsSlice.actions

// Selectors
export const SelectPosts = (state) => state.posts.list
export const SelectFollowingPosts = (state) => {
  const followingList = state.user.info.following

  const followingPosts = state.posts.list.filter((p) =>
    followingList.includes(p.user_id),
  )

  return followingPosts
}

export default postsSlice.reducer
