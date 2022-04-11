import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector } from 'react-redux'
import PropTypes from 'prop-types'

import { SelectUsers } from 'store/users'
import { SelectPosts } from 'store/posts'

import {
  PostContainer,
  ProfilePicture,
  ContentSection,
  UserInfo,
  Name,
  UserName,
  PostContent,
  RepostIcon,
  RepostUserName,
  LeftSection,
  ActionsBlock,
  RepostActionContainer,
  QuoteActionContainer,
  QuoteIcon,
  QuotePostContainer,
  QuoteUserWrapper,
  QuotePostContent,
} from './styles'

export function Post({ post }) {
  const location = useLocation()
  const navigate = useNavigate()
  const allUsers = useSelector(SelectUsers)
  const allPosts = useSelector(SelectPosts)
  const user = allUsers.find((u) => u.id === post.user_id)
  const originUser =
    (post.isRepost || post.isQuotePost) &&
    allUsers.find((u) => u.id === post.origin_user_id)
  const originPost =
    (post.isRepost || post.isQuotePost) &&
    allPosts.find((p) => p.id === post.origin_post_id)

  const getCorrectUserAttribute = (prop) =>
    post.isRepost ? originUser[prop] : user[prop]

  return (
    <PostContainer>
      <LeftSection>
        {post.isRepost && <RepostIcon />}

        <ProfilePicture
          onClick={() =>
            navigate(
              `${location.pathname}/userProfile/${getCorrectUserAttribute(
                'id',
              )}`,
            )
          }
          alt="profile picture"
          src={getCorrectUserAttribute('picture')}
        />
      </LeftSection>

      <ContentSection>
        {post.isRepost && (
          <RepostUserName>
            {user.name} <span>reposted</span>
          </RepostUserName>
        )}

        <UserInfo>
          <Name>{getCorrectUserAttribute('name')}</Name>
          <UserName>@{getCorrectUserAttribute('username')}</UserName>
        </UserInfo>

        <PostContent>
          {post.isRepost ? originPost.content : post.content}
        </PostContent>

        {post.isQuotePost && (
          <QuotePostContainer>
            <QuoteUserWrapper>
              <ProfilePicture
                onClick={() => navigate(`${location.pathname}/userProfile`)}
                alt="profile picture"
                src={originUser.picture}
              />
              <UserInfo>
                <Name>{originUser.name}</Name>
                <UserName>@{originUser.username}</UserName>
              </UserInfo>
            </QuoteUserWrapper>

            <QuotePostContent>{originPost.content}</QuotePostContent>
          </QuotePostContainer>
        )}

        <ActionsBlock>
          <RepostActionContainer>
            <RepostIcon />
            <p>Repost</p>
          </RepostActionContainer>

          <QuoteActionContainer>
            <QuoteIcon />
            <p>Quote Post</p>
          </QuoteActionContainer>
        </ActionsBlock>
      </ContentSection>
    </PostContainer>
  )
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    content: PropTypes.string,
    isRepost: PropTypes.bool,
    isQuotePost: PropTypes.bool,
    user_id: PropTypes.number,
    origin_user_id: PropTypes.number,
    origin_post_id: PropTypes.number,
  }).isRequired,
}
