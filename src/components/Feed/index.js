import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
import { useParams, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import Divider from '@mui/material/Divider'
import ToggleButton from '@mui/material/ToggleButton'

import { PostBox } from 'components/PostBox'
import { Post } from 'components/Post'

import { SelectPosts, SelectFollowingPosts } from 'store/posts'

import { FeedContainer, ToggleContainer } from './styles'

export function Feed({ openQuoteModal }) {
  const navigate = useNavigate()
  const { filter } = useParams()
  const allPosts = useSelector(SelectPosts)
  const followingPosts = useSelector(SelectFollowingPosts)
  const [posts, setPosts] = useState(allPosts)
  const [alignment, setAlignment] = useState(
    ['all', 'following'].includes(filter) ? filter : 'all',
  )

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment)
      navigate(`/${newAlignment}`)
    }
  }

  useEffect(() => {
    if (alignment === 'all') {
      setPosts(allPosts)
    } else {
      setPosts(followingPosts)
    }
  }, [alignment, allPosts, followingPosts])

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

      {posts.map((post) => (
        <React.Fragment key={post.id}>
          <Post post={post} openQuoteModal={openQuoteModal} />
          <Divider />
        </React.Fragment>
      ))}
    </FeedContainer>
  )
}

Feed.propTypes = {
  openQuoteModal: PropTypes.func.isRequired,
}
