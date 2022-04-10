import styled from '@emotion/styled'
import { Button, Avatar, TextField, LinearProgress } from '@mui/material'

export const PostBoxContainer = styled.div`
  display: flex;
  column-gap: 16px;
  width: 100%;
`
export const TextAreaSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const PostInput = styled(TextField)({
  marginBottom: '16px',
})

export const ProfilePicture = styled(Avatar)`
  width: 48px;
  height: 48px;
`

export const BottomWrapper = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  column-gap: 10px;

  & > div {
    position: relative;
    width: 100%;

    p {
      position: absolute;
      top: 0;
      left: 0;
      margin: 0;
      line-height: auto;
      transform: translateY(50%);
    }
  }
`

export const PostButton = styled(Button)`
  width: 75px;
`

export const CharactersCountBar = styled(LinearProgress)`
  height: 10px;
  border-radius: 5px;
  width: 100%;
  background: ${(props) =>
    props.value < 90 ? 'rgb(190, 199, 239)' : '#fdd835'};
`
