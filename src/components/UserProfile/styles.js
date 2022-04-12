import styled from '@emotion/styled'
import { Paper, Avatar, Button } from '@mui/material'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth'

export const Container = styled(Paper)`
  max-width: 600px;
  margin: 0 auto;
  min-height: 100vh;
`

export const TopWrapper = styled.div`
  position: relative;
  padding: 16px;
  display: flex;
  align-items: center;
  column-gap: 10px;

  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    line-height: normal;
  }

  p {
    margin: 0;
    font-size: 13px;
    color: ${({ theme }) => theme.palette.primary.textSecondary};
    line-height: normal;
  }
`

export const BackButton = styled(ArrowBackIcon)`
  cursor: pointer;
`

export const UserNameWrapper = styled.div`
  position: relative;
`

export const UserInfoContainer = styled.div`
  position: relative;
  width: 100%;
`

export const ProfileCover = styled.div`
  width: 100%;
  height: 200px;
  background: url('https://upload.wikimedia.org/wikipedia/commons/thumb/9/9c/Dunder_Mifflin%2C_Inc.svg/1920px-Dunder_Mifflin%2C_Inc.svg.png');
  background-size: cover;
  background-position-y: 20%;
`

export const ProfilePictureWrapper = styled.div`
  padding: 16px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  height: 68.5px;
`

export const ProfilePicture = styled(Avatar)`
  width: 135px;
  height: 135px;
  position: absolute;
  top: 0;
  left: 16px;
  transform: translateY(-50%);
  border: 2px solid white;
`

export const FollowButton = styled(Button)`
  width: 95px;
  border-radius: 20px;
  position: relative;
`

export const MainUserNameWrapper = styled.div`
  padding: 0 16px;
  margin-top: 15px;
  h2 {
    margin: 0;
    font-size: 20px;
    font-weight: bold;
    line-height: normal;
  }

  p {
    margin: 0;
    font-size: 15px;
    color: ${({ theme }) => theme.palette.primary.textSecondary};
    line-height: normal;
  }
`

export const BioContainer = styled.div`
  position: relative;
  width: 100%;
  padding: 0 16px;
  margin: 15px 0;

  p {
    font-size: 15px;
    font-weight: normal;
    color: black;
  }
`

export const OtherInfoContainer = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  padding: 0 16px;
  color: ${({ theme }) => theme.palette.primary.textSecondary};
`

export const JoinedIcon = styled(CalendarMonthIcon)`
  margin-right: 5px;
`

export const SocialInfoContainer = styled.div`
  position: relative;
  padding: 0 16px;
  display: flex;
  column-gap: 16px;

  p {
    color: ${({ theme }) => theme.palette.primary.textSecondary};
  }

  span {
    font-weight: bold;
    color: black;
  }
`
