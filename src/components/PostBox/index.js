import React, { useState } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'

import { SelectUserInfo } from 'store/userInfo'
import { SelectPosts, newPost as newPostAction } from 'store/posts'

import {
  PostBoxContainer,
  TextAreaSection,
  PostButton,
  ProfilePicture,
  BottomWrapper,
  PostInput,
  CharactersCountBar,
} from './styles'

export function PostBox() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const location = useLocation()
  const [isPostButtonDisabled, setIsPostButtonDisabled] = useState(true)
  const [newPostContent, setNewPostContent] = useState('')
  const [charactersCount, setCharactersCount] = useState(0)
  const userInfo = useSelector(SelectUserInfo)
  const posts = useSelector(SelectPosts)

  const handlePostInputChange = (event) => {
    setIsPostButtonDisabled(shouldDisablePostButton(event.target.value))
    setCharactersCount(event.target.value.length)
    setNewPostContent(event.target.value)
  }

  const shouldDisablePostButton = (postContent) =>
    !(postContent.length >= 1 && postContent.length <= 777)

  const handleSubmitPost = () => {
    const newPost = {
      id: posts.length + 1,
      content: newPostContent,
      isRepost: false,
      isQuotePost: false,
      user_id: userInfo.id,
    }

    dispatch(newPostAction(newPost))

    setNewPostContent('')
    setIsPostButtonDisabled(true)
    setCharactersCount(0)
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

          <PostButton
            onClick={handleSubmitPost}
            disabled={isPostButtonDisabled}
            variant="contained"
          >
            Post!
          </PostButton>
        </BottomWrapper>
      </TextAreaSection>
    </PostBoxContainer>
  )
}
