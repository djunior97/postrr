import React, { useState } from 'react'
import Divider from '@mui/material/Divider'

import ToggleButton from '@mui/material/ToggleButton'

import { PostBox } from 'components/PostBox'
import { Post } from 'components/Post'

import { FeedContainer, ToggleContainer } from './styles'

export function Feed() {
  const [alignment, setAlignment] = useState('all')

  const handleChange = (event, newAlignment) => {
    setAlignment(newAlignment)
  }

  return (
    <FeedContainer>
      <PostBox />

      <Divider />

      <ToggleContainer
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
      >
        <ToggleButton value="all">All</ToggleButton>
        <ToggleButton value="following">Following</ToggleButton>
      </ToggleContainer>

      <Post />
      <Divider />

      <Post repost />
      <Divider />

      <Post />
      <Divider />

      <Post repost />
      <Divider />

      <Post />
      <Divider />
    </FeedContainer>
  )
}
