import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import Tooltip from '@mui/material/Tooltip'

import { SelectUserInfo } from 'store/userInfo'
import {
  SelectPosts,
  newPost as newPostAction,
  SelectTodaysPosts,
} from 'store/posts'

import {
  PostBoxContainer,
  TextAreaSection,
  PostButton,
  ProfilePicture,
  BottomWrapper,
  PostInput,
  CharactersCountBar,
} from './styles'

export function PostBox({ isQuotePost, quotePostInfo, handleCloseQuoteModal }) {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [showTooltip, setShowTooltip] = useState(false)
  const [isPostButtonDisabled, setIsPostButtonDisabled] = useState(true)
  const [newPostContent, setNewPostContent] = useState('')
  const [charactersCount, setCharactersCount] = useState(0)
  const userInfo = useSelector(SelectUserInfo)
  const posts = useSelector(SelectPosts)
  const todaysPosts = useSelector((state) =>
    SelectTodaysPosts(state, userInfo.id),
  )

  const handlePostInputChange = (event) => {
    setIsPostButtonDisabled(shouldDisablePostButton(event.target.value))
    setCharactersCount(event.target.value.length)
    setNewPostContent(event.target.value)
  }

  const shouldDisablePostButton = (postContent) =>
    !(postContent.length >= 1 && postContent.length <= 777) ||
    todaysPosts.length >= 5

  const handleSubmitPost = () => {
    const newPost = {
      id: posts.length + 1,
      content: newPostContent,
      isRepost: false,
      isQuotePost: false,
      user_id: userInfo.id,
      createdAt: new Date(),
    }

    if (isQuotePost) {
      newPost.isQuotePost = true
      newPost.origin_user_id = quotePostInfo.user_id
      newPost.origin_post_id = quotePostInfo.post_id
      handleCloseQuoteModal()
    }

    dispatch(newPostAction(newPost))

    setNewPostContent('')
    setIsPostButtonDisabled(true)
    setCharactersCount(0)
  }

  const handleHideTooltip = () => {
    setShowTooltip(false)
  }

  const handleShowTooltip = () => {
    if (todaysPosts.length >= 5) {
      setShowTooltip(true)
    }
  }

  return (
    <PostBoxContainer>
      <ProfilePicture
        alt="profile picture"
        src={userInfo.picture}
        onClick={() =>
          navigate(`${location.pathname}/userProfile/${userInfo.id}`)
        }
      />

      <TextAreaSection>
        <PostInput
          onChange={handlePostInputChange}
          value={newPostContent}
          label="Share your thoughts..."
          multiline
          rows={4}
        />

        <BottomWrapper>
          <div>
            <CharactersCountBar
              variant="determinate"
              value={(charactersCount / 777) * 100}
            />

            {charactersCount >= 700 && <p>{charactersCount} / 777</p>}
          </div>

          <Tooltip
            open={showTooltip}
            onClose={handleHideTooltip}
            onOpen={handleShowTooltip}
            title="You already created 5 posts today. Come back tomorrow!"
          >
            <span>
              <PostButton
                onClick={handleSubmitPost}
                disabled={isPostButtonDisabled}
                variant="contained"
              >
                Post!
              </PostButton>
            </span>
          </Tooltip>
        </BottomWrapper>
      </TextAreaSection>
    </PostBoxContainer>
  )
}

PostBox.propTypes = {
  isQuotePost: PropTypes.bool,
  quotePostInfo: (props, propName) => {
    if (props.isQuotePost && !props[propName]) {
      return new Error('quotePostInfo is required if isQuotePost is true')
    }

    return null
  },
  handleCloseQuoteModal: (props, propName) => {
    if (props.isQuotePost && !props[propName]) {
      return new Error(
        'handleCloseQuoteModal is required if isQuotePost is true',
      )
    }

    return null
  },
}
