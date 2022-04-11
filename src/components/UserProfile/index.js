import { Post } from 'components/Post'
import React from 'react'

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

export function UserProfile() {
  return (
    <Container>
      <TopWrapper>
        <BackButton />
        <UserNameWrapper>
          <h2>Michael Scott</h2>
          <p>600 posts</p>
        </UserNameWrapper>
      </TopWrapper>

      <UserInfoContainer>
        <ProfileCover />

        <ProfilePictureWrapper>
          <ProfilePicture alt="Michael Scott" src="assets/images/avatar.jpg" />
          <FollowButton variant="contained">Follow</FollowButton>
        </ProfilePictureWrapper>

        <MainUserNameWrapper>
          <h2>Michael Scott</h2>
          <p>@best_boss</p>
        </MainUserNameWrapper>

        <BioContainer>
          <p>World&#39;s Best Boss | Regional Manager @DunderMifflinScranton</p>
        </BioContainer>

        <OtherInfoContainer>
          <JoinedIcon />
          Joined January 2020
        </OtherInfoContainer>

        <SocialInfoContainer>
          <p>
            <span>444</span> Following
          </p>
          <p>
            <span>600</span> Followers
          </p>
        </SocialInfoContainer>
      </UserInfoContainer>

      <Post />
      <Post />
      <Post />
      <Post />
    </Container>
  )
}
