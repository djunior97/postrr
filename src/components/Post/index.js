/* eslint-disable react/jsx-no-useless-fragment */
import React, { useMemo } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

import { SelectUsers } from 'store/users'
import { SelectPosts, newPost } from 'store/posts'
import { SelectUserInfo } from 'store/userInfo'

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

export function Post({ post, openQuoteModal }) {
  const dispatch = useDispatch()
  const location = useLocation()
  const navigate = useNavigate()
  const allUsers = useSelector(SelectUsers)
  const allPosts = useSelector(SelectPosts)
  const loggedUser = useSelector(SelectUserInfo)
  const user = useMemo(
    () => allUsers.find((u) => u.id === post.user_id),
    [allUsers, post.user_id],
  )
  const originUser =
    (post.isRepost || post.isQuotePost) &&
    allUsers.find((u) => u.id === post.origin_user_id)
  const originPost =
    (post.isRepost || post.isQuotePost) &&
    allPosts.find((p) => p.id === post.origin_post_id)
  const originUserQuote =
    post.isRepost &&
    post.isQuotePost &&
    allUsers.find((u) => u.id === post.origin_user_id_quote)
  const originPostQuote =
    post.isRepost &&
    post.isQuotePost &&
    allPosts.find((p) => p.id === post.origin_post_id_quote)

  const getCorrectUserAttribute = (prop) =>
    post.isRepost ? originUser[prop] : user[prop]

  const handleRepost = () => {
    const newRepost = {
      id: allPosts.length + 1,
      content: null,
      isRepost: true,
      user_id: loggedUser.id,
      origin_user_id: post.user_id,
      origin_post_id: post.id,
      quotePostContent: null,
    }

    if (post.isRepost) {
      newRepost.origin_user_id = post.origin_user_id
      newRepost.origin_post_id = post.origin_post_id
    }

    if (post.isQuotePost) {
      newRepost.isQuotePost = true
      newRepost.content = post.content
      newRepost.origin_user_id_quote = post.origin_user_id
      newRepost.origin_post_id_quote = post.origin_post_id
    }

    dispatch(newPost(newRepost))
  }

  const handleQuotePost = () => {
    const quotePostInfo = {
      post_id: post.id,
      content: post.content,
      user_id: post.user_id,
      userPicture: user.picture,
      name: user.name,
      username: user.username,
    }

    if (post.isRepost) {
      quotePostInfo.post_id = originPost.id
      quotePostInfo.content = originPost.content
      quotePostInfo.user_id = originUser.id
      quotePostInfo.userPicture = originUser.picture
      quotePostInfo.name = originUser.name
      quotePostInfo.username = originUser.username
    }

    openQuoteModal(quotePostInfo)
  }

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
                src={
                  post.isRepost && post.isQuotePost
                    ? originUserQuote.picture
                    : originUser.picture
                }
              />
              <UserInfo>
                <Name>
                  {post.isRepost && post.isQuotePost
                    ? originUserQuote.name
                    : originUser.name}
                </Name>
                <UserName>
                  @
                  {post.isRepost && post.isQuotePost
                    ? originUserQuote.username
                    : originUser.username}
                </UserName>
              </UserInfo>
            </QuoteUserWrapper>

            <QuotePostContent>
              {post.isRepost && post.isQuotePost
                ? originPostQuote.content
                : originPost.content}
            </QuotePostContent>
          </QuotePostContainer>
        )}

        <ActionsBlock>
          {post.isRepost && post.user_id === loggedUser ? (
            <></>
          ) : (
            <RepostActionContainer>
              <RepostIcon onClick={handleRepost} />
              <button type="button" onClick={handleRepost}>
                <p>Repost</p>
              </button>
            </RepostActionContainer>
          )}

          <QuoteActionContainer>
            <QuoteIcon onClick={handleQuotePost} />
            <button type="button" onClick={handleQuotePost}>
              <p>Quote Post</p>
            </button>
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
    origin_user_id_quote: PropTypes.number,
    origin_post_id_quote: PropTypes.number,
  }).isRequired,
  openQuoteModal: PropTypes.func.isRequired,
}
