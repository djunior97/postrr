import React, { useState } from 'react'

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
  const [isPostButtonDisabled, setIsPostButtonDisabled] = useState(true)
  const [charactersCount, setCharactersCount] = useState(0)

  const handlePostInputChange = (event) => {
    setIsPostButtonDisabled(shouldDisablePostButton(event.target.value))
    setCharactersCount(event.target.value.length)
  }

  const shouldDisablePostButton = (postContent) =>
    !(postContent.length >= 1 && postContent.length <= 777)

  return (
    <PostBoxContainer>
      <ProfilePicture
        alt="Michael Scott"
        src="https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/MichaelScott.png"
      />

      <TextAreaSection>
        <PostInput
          onChange={handlePostInputChange}
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

          <PostButton disabled={isPostButtonDisabled} variant="contained">
            Post!
          </PostButton>
        </BottomWrapper>
      </TextAreaSection>
    </PostBoxContainer>
  )
}
