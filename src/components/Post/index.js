import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import PropTypes from 'prop-types'

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

export function Post({ isRepost, isQuotePost, postId }) {
  const location = useLocation()
  const navigate = useNavigate()

  return (
    <PostContainer>
      <LeftSection>
        {isRepost && <RepostIcon />}

        <ProfilePicture
          onClick={() => navigate(`${location.pathname}/userProfile`)}
          alt="Michael Scott"
          src="https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/MichaelScott.png"
        />
      </LeftSection>

      <ContentSection>
        {isRepost && (
          <RepostUserName>
            Michael Scott <span>reposted</span>
          </RepostUserName>
        )}

        <UserInfo>
          <Name>Michael Scott</Name>
          <UserName>@best_boss</UserName>
        </UserInfo>

        <PostContent>
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra
          quis, feugiat a, tellus. Phasellus viverra nulla ut metus varius
          laoreet. Quisque rutrum. Aenean imp
        </PostContent>

        {isQuotePost && (
          <QuotePostContainer>
            <QuoteUserWrapper>
              <ProfilePicture
                onClick={() => navigate(`${location.pathname}/userProfile`)}
                alt="Michael Scott"
                src="https://www.bu.edu/lernet/artemis/years/2017/projects/StudentWebsites/Dara/images/MichaelScott.png"
              />
              <UserInfo>
                <Name>Michael Scott</Name>
                <UserName>@best_boss</UserName>
              </UserInfo>
            </QuoteUserWrapper>

            <QuotePostContent>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies nec, pellentesque eu, pretium quis,
              sem. Nulla consequat massa quis enim. Donec pede justo, fringilla
              vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
              imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
              mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum
              semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula,
              porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem
              ante, dapibus in, viverra quis, feugiat a, tellus. Phasellus
              viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imp
            </QuotePostContent>
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
  /** Tells whether the content is a repost or not */
  isRepost: PropTypes.bool,
  /** Tells whether the content is a quote post or not */
  isQuotePost: PropTypes.bool,
  /** Post content to show */
  // postContent:
}

Post.defaultProps = {
  isRepost: false,
  isQuotePost: false,
}
