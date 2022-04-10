import React from 'react'

import { PostBox } from 'components/PostBox'

import { FeedContainer } from './styles'

export function Feed() {
  return (
    <FeedContainer>
      <PostBox />
    </FeedContainer>
  )
}
