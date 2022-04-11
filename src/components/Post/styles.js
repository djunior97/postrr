import styled from '@emotion/styled'
import { Avatar } from '@mui/material'
import RepeatIcon from '@mui/icons-material/Repeat'
import FormatQuoteIcon from '@mui/icons-material/FormatQuote'

export const PostContainer = styled.div`
  display: flex;
  column-gap: 16px;
  transition: all 0.2s;
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
  width: 100%;
  padding: 16px;
`
export const LeftSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`

export const RepostIcon = styled(RepeatIcon)`
  position: relative;
  transform: rotate(90deg);
  color: ${({ theme }) => theme.palette.primary.textSecondary};
`

export const RepostUserName = styled.p`
  margin: 0;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.textSecondary};
  font-size: 14px;
  span {
    font-weight: normal;
  }
`

export const ProfilePicture = styled(Avatar)`
  width: 48px;
  height: 48px;
  cursor: pointer;
`
export const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const UserInfo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  column-gap: 5px;

  p {
    margin: 0;
  }
`

export const Name = styled.p`
  cursor: pointer;
  font-weight: bold;
  font-size: 15px;

  &:hover {
    text-decoration: underline;
  }
`

export const UserName = styled.p`
  cursor: pointer;
  font-size: 14px;
`

export const PostContent = styled.p`
  margin: 0;
  text-align: left;
  font-size: 16px;
`

export const ActionsBlock = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-top: 16px;
  column-gap: 16px;
  cursor: pointer;

  svg {
    cursor: pointer;
  }
`

export const RepostActionContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;

  p {
    margin: 0;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const QuoteActionContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 5px;

  p {
    margin: 0;
    &:hover {
      text-decoration: underline;
    }
  }
`

export const QuoteIcon = styled(FormatQuoteIcon)`
  position: relative;
  color: ${({ theme }) => theme.palette.primary.textSecondary};
`

export const QuotePostContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 16px;
  padding: 12px;
  margin-top: 8px;

  .MuiAvatar-root {
    height: 20px;
    width: 20px;
    margin-right: 8px;
  }
`

export const QuoteUserWrapper = styled.div`
  position: relative;
  display: flex;
  column-gap: 0;
`
export const QuotePostContent = styled.p`
  margin: 0;
`
