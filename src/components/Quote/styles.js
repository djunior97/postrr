import styled from '@emotion/styled'
import { Paper, Avatar } from '@mui/material'
import CloseIcon from '@mui/icons-material/Close'

export const QuoteContainer = styled(Paper)`
  max-width: 600px;
  margin: 50px auto;
  padding: 12px;
`

export const QuotePostContainer = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid rgb(207, 217, 222);
  border-radius: 16px;
  padding: 12px;
  margin: 0 auto;
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

export const ProfilePicture = styled(Avatar)`
  width: 48px;
  height: 48px;
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

export const CloseButton = styled(CloseIcon)`
  float: right;
  cursor: pointer;
`
