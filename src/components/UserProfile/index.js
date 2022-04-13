import React from 'react'
import PropTypes from 'prop-types'
import { useSelector, useDispatch } from 'react-redux'
import { useLocation } from 'react-router-dom'

import { SelectPostsByUserId } from 'store/posts'
import { SelectUserById } from 'store/users'
import { SelectUserInfo, followAction, unfollowAction } from 'store/userInfo'
import { Post } from 'components/Post'
import { PostBox } from 'components/PostBox'

import {
  Container,
  TopWrapper,
  BackButton,
  UserNameWrapper,
  UserInfoContainer,
  ProfileCover,
  ProfilePictureWrapper,
  ProfilePicture,
  FollowButton,
  MainUserNameWrapper,
  BioContainer,
  OtherInfoContainer,
  JoinedIcon,
  SocialInfoContainer,
} from './styles'

export function UserProfile({ backButtonAction, openQuoteModal }) {
  const dispatch = useDispatch()
  const location = useLocation()
  const loggedUser = useSelector(SelectUserInfo)
  const userId = location.pathname.split('/')[3]
  const selectedUser = useSelector((state) => SelectUserById(state, userId))
  const userInfo = loggedUser.id === Number(userId) ? loggedUser : selectedUser
  const posts = useSelector((state) => SelectPostsByUserId(state, userId))

  const handleUnfollow = () => {
    dispatch(unfollowAction({ userId }))
  }

  const handleFollow = () => {
    dispatch(followAction({ userId }))
  }

  return (
    <Container>
      <TopWrapper>
        <BackButton onClick={backButtonAction} />
        <UserNameWrapper>
          <h2>{userInfo.name}</h2>
          <p>{posts.length} posts</p>
        </UserNameWrapper>
      </TopWrapper>

      <UserInfoContainer>
        <ProfileCover />

        <ProfilePictureWrapper>
          <ProfilePicture alt="profile picture" src={userInfo.picture} />
          {!(loggedUser.id === Number(userId)) &&
            (loggedUser.following.includes(Number(userId)) ? (
              <FollowButton variant="contained" onClick={handleUnfollow}>
                Unfollow
              </FollowButton>
            ) : (
              <FollowButton variant="contained" onClick={handleFollow}>
                Follow
              </FollowButton>
            ))}
        </ProfilePictureWrapper>

        <MainUserNameWrapper>
          <h2>{userInfo.name}</h2>
          <p>@{userInfo.username}</p>
        </MainUserNameWrapper>

        <BioContainer>
          <p>{userInfo.bio}</p>
        </BioContainer>

        <OtherInfoContainer>
          <JoinedIcon />
          Joined {` `}
          {Intl.DateTimeFormat('en', {
            year: 'numeric',
            day: 'numeric',
            month: 'long',
          }).format(new Date(userInfo.joinedDate))}
        </OtherInfoContainer>

        <SocialInfoContainer>
          <p>
            <span>{userInfo.following.length}</span> Following
          </p>
          <p>
            <span>{userInfo.followers.length}</span> Followers
          </p>
        </SocialInfoContainer>
      </UserInfoContainer>

      {loggedUser.id === Number(userId) && <PostBox />}

      {posts.map((post) => (
        <Post key={post.id} post={post} openQuoteModal={openQuoteModal} />
      ))}
    </Container>
  )
}

UserProfile.propTypes = {
  backButtonAction: PropTypes.func.isRequired,
  openQuoteModal: PropTypes.func.isRequired,
}
