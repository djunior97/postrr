import React from 'react'
import PropTypes from 'prop-types'

import { PostBox } from 'components/PostBox'
import {
  QuoteContainer,
  QuotePostContainer,
  QuoteUserWrapper,
  QuotePostContent,
  ProfilePicture,
  UserInfo,
  Name,
  UserName,
  CloseButton,
} from './styles'

export function Quote({ quotePostInfo, handleCloseQuoteModal }) {
  return (
    <QuoteContainer>
      <CloseButton onClick={handleCloseQuoteModal} />
      <PostBox
        isQuotePost
        quotePostInfo={quotePostInfo}
        handleCloseQuoteModal={handleCloseQuoteModal}
      />

      <QuotePostContainer>
        <QuoteUserWrapper>
          <ProfilePicture
            alt="profile picture"
            src={quotePostInfo.userPicture}
          />
          <UserInfo>
            <Name>{quotePostInfo.name}</Name>
            <UserName>@{quotePostInfo.username}</UserName>
          </UserInfo>
        </QuoteUserWrapper>

        <QuotePostContent>{quotePostInfo.content}</QuotePostContent>
      </QuotePostContainer>
    </QuoteContainer>
  )
}

Quote.propTypes = {
  quotePostInfo: PropTypes.shape({
    post_id: PropTypes.number,
    content: PropTypes.string,
    user_id: PropTypes.number,
    userPicture: PropTypes.string,
    name: PropTypes.string,
    username: PropTypes.string,
  }),
  handleCloseQuoteModal: PropTypes.func,
}
